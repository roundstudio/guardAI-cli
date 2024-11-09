import api from "../../../config/api";


const loginService = async (username: string, password: string) => {
  const response = await api.post("/api/token/", { username, password });
  return response.data;
};


export default loginService