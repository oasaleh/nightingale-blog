import styled from 'styled-components';
import { TimeAgo } from '../features/posts/TimeAgo';
import { Link } from 'react-router-dom';
/* ---------------------------------- style --------------------------------- */
const StyledPostCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  border: 1px solid #e89444;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #242628;
  /* width: 100%; */
  h1 {
    font-size: 1.5em;
    margin: 0;
  }
  p {
    font-size: 0.9em;
    margin: 0 0 5px 0;
    & span {
      font-size: 0.85em;
    }
  }

  .button {
    margin-top: 5x;
    width: fit-content;
  }
`;
/* -------------------------------- component ------------------------------- */
const PostCard = ({ post }) => {
  return (
    <StyledPostCard>
      <div>
        <h1>{post.title}</h1>
      </div>

      <p>
        <span>by {post.author ? post.author : 'Unknown author'}</span>
        <span>
          <TimeAgo timestamp={post.date} />
        </span>
      </p>
      <p
        style={{
          textOverflow: 'ellipsis',
          maxWidth: '800px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {post.content}
      </p>
      <Link to={`/post/${post.id}`}>
        <button
          className="p-btn p-btn-sm"
          style={{
            backgroundColor: '#262525',
            color: '#E89444',
            margin: '0px',
            fontSize: '0.8em',
          }}
        >
          View Post
        </button>
      </Link>
    </StyledPostCard>
  );
};

export default PostCard;
// background 1D1F20
// less background 242628
// grey 73777B
// orange E79346
// less orange E89444
// off white D6D7D8
// off orange EAA252
