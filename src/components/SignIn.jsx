import Joi from "joi";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import formikValidateUsingJoi from "../components/utils/FormikValidateUsingJoi";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import PageHeader from "./common/PageHeader";
import Input from "./common/Input";
import { loginUser } from "../services/usersService";
import { useAuth } from "../context/AuthContext";

const SignIn = ({ redirect }) => {
  const [error, setError] = useState("");
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
    }),
    async onSubmit(values) {
      try {
        await login(values);

        if (redirect) {
          navigate(redirect);
        }
      } catch ({ response }) {
        if (response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader
        title="Sign In"
        description="Sign in to your account! NOW!!"
      />

      <form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        <Input
          type="email"
          label="Email"
          {...form.getFieldProps("email")}
          error={form.touched.email && form.errors.email}
        />
        <Input
          type="password"
          label="Password"
          {...form.getFieldProps("password")}
          error={form.touched.password && form.errors.password}
        />

        <div className="my-2">
          <button disabled={!form.isValid} className="btn btn-primary">
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};
export default SignIn;
