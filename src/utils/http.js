import axios from "axios";

const get = async ({ url }) => {
  try {
    return await axios.get(url);
  } catch (error) {
    throw new Error(error);
  }
};

export { get };
