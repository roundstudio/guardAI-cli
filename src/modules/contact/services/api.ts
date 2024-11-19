import axios from "axios";

const getContact = async () => {
  const response = await axios.get("/contact");
  return response.data;
};

export default getContact;