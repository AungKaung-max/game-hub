import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "69fedc8739554d6c9a142e1a01f9f9cc",
  },
});
