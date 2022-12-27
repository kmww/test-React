import styled from "@emotion/styled";
import Header from "./components/Header";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import TaskProvider from "./contexts/TaskProvider";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <TaskProvider>
      <Container>
        <Header>Todo</Header>
        <NewTaskForm />
        <TaskList style={{ marginTop: 16 }} />
      </Container>
    </TaskProvider>
  );
};

export default App;
