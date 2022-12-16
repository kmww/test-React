import CardForm from "../components/CardForm";

export default {
  title: "Component/CardForm",
  copmponent: CardForm,
};

export const Default = (args) => {
  return <CardForm {...args}>CardForm</CardForm>;
};
