import LoginForm from "../components/LoginForm";

export default {
  title: "component/LoginForm",
  component: LoginForm,
  argTypes: {
    onSubmit: { aciton: "onSubmit" },
  },
};

export const Default = (args) => {
  return <LoginForm {...args} />;
};
