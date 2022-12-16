import Input from "../components/Input";

export default {
  title: "component/Input",
  component: Input,
  argTypes: {
    onChange: { aciton: "onChange" },
  },
};

export const Default = (args) => {
  return <Input {...args} />;
};
