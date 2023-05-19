import React from "react";
import axios from "axios";

export const useFetchProducts = () => {
  const [productsData, setProductsData] = React.useState(undefined);
  const [productsLoading, setProductsLoading] = React.useState<boolean>(false);
  const [productsError, setProductsError] = React.useState<boolean>(false);

  const fetchProductsList = async () => {
    setProductsLoading(true);
    try {
      const { data } = await axios({
        method: "GET",
        url: process.env.REACT_APP_BASE_URL! + "/products/products/",
      });

      setProductsData(data);
    } catch (error) {
      setProductsError(true);
    }
    setProductsLoading(false);
  };

  return { productsData, productsLoading, productsError, fetchProductsList };
};
