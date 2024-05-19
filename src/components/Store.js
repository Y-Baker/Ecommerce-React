import { useContext } from "react";
import { Container, Grid } from "@mui/material";
// context
import { ProductContext } from "../contexts/ProductContextProvider";
// components
import Products from "./common/Products";
import Loading from "./Loading";
import { GetAllCategories } from "../services/getAllCategories";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";


const Store = () => {
  const products = useContext(ProductContext);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    setCategories(await GetAllCategories());
    console.log("Get all categories", categories);
    setLoading(false);
  };

  const filterProducts = (category) => {
    return products.filter((product) => product.category === category);
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Grid container>
        {categories.length ? (
          categories.map((category) => (
            filterProducts(category).length > 0 ? (
              filterProducts(category).map((product) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  p={2}
                  mt={8}
                  key={product.id}
                >
                  <Products productData={product} />
                </Grid>
              ))) : (
                <Typography variant="h6" align="center" key={category}>
                  No products found in {category}
                </Typography>
              )))
        ) : (
          <Grid item xs={12}>
            <Loading />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Store;