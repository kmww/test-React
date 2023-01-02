import styled from "@emotion/styled";

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 40px;
  align-items: content;
  padding: 0 8px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  box-sizing: border-box;
`;

const Content = styled.span`
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
  text-decoration: ${({ complete }) => (complete ? "line-through" : "none")};
`;

export const Task = ({ id, content, complete }) => {
  return (
    <ListItem>
      <Content complete={complete}>{content}</Content>
    </ListItem>
  );
};
