import styled from "@emotion/styled";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Header from "./components/Header";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Header>ToDo</Header>
      <NewTaskForm />
      <TaskList />
    </Container>
  );
}

export default App;
