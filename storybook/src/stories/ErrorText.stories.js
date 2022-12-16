import ErrorText from "../components/ErrorText";

export default {
  title: "Component/ErrorText",
  copmponent: ErrorText,
};

export const Default = (args) => {
  return <ErrorText {...args}>Error Text</ErrorText>;
};
