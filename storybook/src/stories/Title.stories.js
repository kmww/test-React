import Title from "../components/Title";

export default {
  title: "Component/Title",
  copmponent: Title,
};

export const Default = (args) => {
  return <Title {...args}>Title</Title>;
};
