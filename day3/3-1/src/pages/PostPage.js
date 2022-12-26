import { useParams } from "react-router-dom";
import { useAsync } from "@hooks";
import { Header, Text, Spinner } from "@components";
import axios from "axios";
import { Fragment } from "react";

const PostPage = () => {
  const { postId } = useParams();

  const post = useAsync(async () => {
    return await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.data);
  }, [postId]);
  return (
    <div>
      {post.isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Header strong>{post.value?.title}</Header>
          <Text>{post.value?.body}</Text>
        </Fragment>
      )}
    </div>
  );
};

export default PostPage;
