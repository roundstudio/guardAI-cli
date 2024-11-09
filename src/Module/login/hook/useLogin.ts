import { useMutation } from "@tanstack/react-query";
import { loginService } from "../services";
import { useNavigate } from 'react-router-dom';



const useLogin = () => {
    const navigate = useNavigate();

  const { mutate: loginMutation } = useMutation({
    mutationKey: ["login"],
    mutationFn: ({ username, password }: { username: string; password: string }) =>
      loginService(username, password),
    onSuccess: (response) => {
      localStorage.setItem('access_token', response.access);
      localStorage.setItem('refresh_token', response.refresh);

          navigate('/');


    },
  });

  return {loginMutation };
};

export default useLogin;
