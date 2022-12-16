import Button from "../components/Button";

export default {
  title: "Component/Button",
  copmponent: Button,
  argTypes: {
    onClick: { action: "onCilck" },
  },
};

export const Default = (args) => {
  return <Button {...args}>Button</Button>;
};
