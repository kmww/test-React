import styled from "@emotion/styled";
import Task from "./Task";

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;

  & > li {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`;

const TaskList = (props) => {
  return (
    <UnorderedList>
      <Task content="Test1" />
      <Task content="Test2" />
      <Task content="Test3" />
    </UnorderedList>
  );
};

export default TaskList;
