import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 01b32622490556b2fb291f678ad474b0b09a8ddef6b8374e87917258c7a614ec"
  }
});
