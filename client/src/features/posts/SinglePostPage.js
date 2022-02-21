import { useParams } from 'react-router-dom';
import PostView from '../../components/PostView';

const SinglePostPage = ({ posts }) => {
  let content;
  let params = useParams();
  const { postId } = params;
  const post = posts.find((post) => post.id === postId);

  if (post) {
    content = <PostView post={post} />;
  }

  return <div>{post ? content : null}</div>;
};

export default SinglePostPage;
