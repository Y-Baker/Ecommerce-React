import http from "./http";

const GetAllCategories = async () => {
  const result = await http.get(`/products/categories`);
  return result.data;
};
export { GetAllCategories };
