import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import useLogin from "../hook/useLogin";

interface LoginFormValues {
  username: string;
  password: string;
}
const LoginForm = () => {
  const { loginMutation } = useLogin();
  const initialValues: LoginFormValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("نام کاربری اجباری هست"),
    password: Yup.string()
      .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
      .required("رمز عبور اجباری هست"),
  });

  const onSubmit = (values: LoginFormValues) => {
    loginMutation(values);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg"
    >
      <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-800">
        ورود
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                نام کاربری
              </label>
              <Field
                type="username"
                id="username"
                name="username"
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="mt-2 text-sm text-red-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                رمز عبور
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="mt-2 text-sm text-red-500"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-3 mt-4 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
            >
              {isSubmitting ? "ورود..." : "ورود"}
            </motion.button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default LoginForm;
