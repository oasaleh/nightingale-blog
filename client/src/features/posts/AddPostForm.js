import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
/* ---------------------------------- style --------------------------------- */
const FormPageView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  text-align: center;
  justify-content: center;
`;
const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  text-align: center;
  justify-content: center;
  width: 400px;
`;
const ButtonsTray = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
/* -------------------------------- component ------------------------------- */
const AddPostForm = ({ handleSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);

  const canSave = [title, content, author].every(Boolean);

  const onSavePostClicked = async () => {
    if (canSave) {
      const date = new Date();
      const postDate = date.toISOString();
      const data = {
        title,
        content,
        author,
        id: nanoid(),
        date: postDate,
      };
      handleSave(data);
      // fetch('https://serverless-api.osaleh.workers.dev/api/add', {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      // });
      setTitle('');
      setContent('');
      setAuthor('');
    }
  };

  return (
    <FormPageView>
      <h2>Add a New Post</h2>
      <AddForm>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          className="p-form-text"
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <input
          type="text"
          id="postAuthor"
          name="postAuthor"
          placeholder="What's your name?"
          value={author}
          onChange={onAuthorChanged}
          className="p-form-text"
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
          style={{ width: '100%', height: '100px' }}
        />

        <ButtonsTray>
          <button
            type="button"
            className={canSave ? 'p-form-button p-form-send' : 'p-form-button'}
            style={canSave ? { cursor: 'pointer' } : { cursor: 'not-allowed' }}
            onClick={onSavePostClicked}
            disabled={!canSave}
          >
            Save Post
          </button>
          <Link to="/">
            <button className="p-btn btn-sm">Back</button>
          </Link>
        </ButtonsTray>
      </AddForm>
    </FormPageView>
  );
};

export default AddPostForm;
