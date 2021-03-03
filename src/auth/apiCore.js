import dotenv from "dotenv";

dotenv.config();
const apiKey = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;

export const getImage = (attribute) => {
  return fetch(`${apiKey}${attribute}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
