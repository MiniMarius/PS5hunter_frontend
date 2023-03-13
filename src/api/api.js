import axios from 'axios';

export const getProductData = async () => {
  try {
    const response = await axios.get('/api/product/');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const runScraper = async () => {
  try {
    const response = await axios.post('/api/scraper/run/');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
