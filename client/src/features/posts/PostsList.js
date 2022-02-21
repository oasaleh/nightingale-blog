import { useMemo } from 'react';
import styled from 'styled-components';
import PostCard from '../../components/PostCard';
/* ---------------------------------- style --------------------------------- */
const PostsTray = styled.div`
  width: fit-content;
  align-self: center;
  margin: 0px auto;
`;
/* -------------------------------- component ------------------------------- */
const PostsList = ({ posts }) => {
  // const [posts, setPosts] = useState([]);

  let content;
  const sortedPosts = useMemo(() => {
    if (posts) {
      const sortedPosts = posts.slice();
      sortedPosts.sort((a, b) => b.date.localeCompare(a.date));
      return sortedPosts;
    }
  }, [posts]);
  const renderedPosts = sortedPosts.map((post) => (
    <PostCard key={post.id} post={post} />
  ));
  content = renderedPosts;

  return <PostsTray>{content ? content : 'Add some posts!'}</PostsTray>;
};

export default PostsList;
