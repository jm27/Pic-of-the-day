import dotenv from "dotenv";

dotenv.config();
const apiKey = `https://api.nasa.gov/planetary/apod?api_key=UNGhJmUc9LxwxgrdDUCjSTUnddcp87cQrPJPCONq`;

export const getImage = (attribute) => {
  return fetch(`${apiKey}${attribute}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
