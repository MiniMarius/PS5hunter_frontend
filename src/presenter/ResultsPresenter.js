import React, { useEffect } from "react";
import ResultsView from '../view/ResultsView';
import { getProductData, runScraper } from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
function ResultsPresenter () {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(checkAuth()); // Check for token on mount
  }, [dispatch]);

  useEffect(() => {
    let retries = 3;

    const fetchData = async () => {
      try {
        const data = await getProductData();
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        if (retries > 0) {
          console.log(`Error fetching data. Retrying... ${retries} retries left.`);
          retries--;
          fetchData();
        } else {
          console.log("Error fetching data. Max retries exceeded.");
        }
      }
    };

    fetchData();
  }, []);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await runScraper();
      const data = await getProductData();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <ResultsView products={products} isLoading={isLoading} handleClick={handleClick} />
  );
}

export default ResultsPresenter;