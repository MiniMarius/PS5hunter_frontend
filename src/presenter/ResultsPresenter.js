import React, { useEffect } from "react";
import axios from "axios";
import ResultsView from '../view/ResultsView';
function ResultsPresenter () {
    const [products, setProducts] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
      useEffect(() => {
        let retries = 3;
      
        const fetchData = async () => {
          try {
            const res = await axios.get("/api/product/");
            setProducts(res.data);
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
      const handleClick = () => {
        setIsLoading(true);
        axios
          .get("/run_scraper/")
          .then((response) => {
            console.log(response.data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setIsLoading(false);
          });
      };
  
    return (<ResultsView products={products} isLoading={isLoading} handleClick={handleClick} />

    )

}
export default ResultsPresenter;