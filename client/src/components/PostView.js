import styled from 'styled-components';
import { TimeAgo } from '../features/posts/TimeAgo';
import { Link } from 'react-router-dom';

/* ---------------------------------- style --------------------------------- */
const StyledPostView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: auto;
  width: 70%;
  background-color: #242628;
  h1 {
    font-size: 1.5em;
    margin: 0 0 5px 0;
  }
  p {
    font-size: 1em;
    margin: 0px 0 5px 0;
    & span {
      font-size: 0.85em;
      margin: 0px 5px 0px 0;
    }
  }
  .button {
    margin-top: 10px;
  }
`;
/* -------------------------------- component ------------------------------- */
const PostView = ({ post }) => {
  return (
    <StyledPostView className="p-to-shadow-3">
      <div>
        <h1>{post.title}</h1>
      </div>
      <p>
        <span>by {post.author ? post.author : 'Unknown author'}</span>
        <span>
          <TimeAgo timestamp={post.date} />
        </span>
      </p>
      <p>{post.content}</p>
      <Link to="/">
        <button className="p-btn p-btn-sm">Back</button>
      </Link>
    </StyledPostView>
  );
};

export default PostView;
// background 1D1F20
// less background 242628
// grey 73777B
// orange E79346
// less orange E89444
// off white D6D7D8
// off orange EAA252
