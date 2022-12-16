import useForm from "../hooks/useForm";
import CardForm from "./CardForm";
import Title from "./Title";
import Button from "./Button";
import ErrorText from "./ErrorText";
import Input from "./Input";

// const sleep = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), 1000);
//   });
// };

const LoginForm = ({ onSubmit }) => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: "",
      password: "",
    },
    // onSubmit: async () => {
    //   await sleep();
    //   console.log("Submit!");
    // },
    onSubmit,
    validate: ({ name, password }) => {
      const newErrors = {};
      if (!name) newErrors.name = "이름을 입력해주세요.";
      if (!password) newErrors.password = "비밀번호를 입력해주세요";
      return newErrors;
    },
  });

  // console.log(values, errors);

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Login</Title>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        style={{ marginTop: 8 }}
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      <Button type="submit" disabled={isLoading} style={{ marginTop: 16 }}>
        Login
      </Button>
    </CardForm>
  );
};

export default LoginForm;
