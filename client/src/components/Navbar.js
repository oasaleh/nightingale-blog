import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: fit-content;
  margin: auto;
  gap: 40px;
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>Nightingale</h1>
      <Link to='/add'>
        <button className='p-btn p-btn-mob p-orange p-white-color p-white-color'>
          Add Post
        </button>
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
