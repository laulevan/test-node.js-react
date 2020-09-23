import axios from "axios";

const FEATURED_URL = "/datas/featured.json";
const PRODUCT_URL = "/datas/products.json";
const NEWS_URL = "/datas/whatnew.json";


export function getFeatured() {
  return axios.get(FEATURED_URL);
}
export function getProducts() {
  return axios.get(PRODUCT_URL);
}
export function getNews() {
  return axios.get(NEWS_URL);
}
