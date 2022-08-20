import "./AddPosts.css";
import { useState, useRef, useEffect } from "react";

const AddPosts = (props) => {
  // uploading  post photo
  const [photoData, setPhotoData] = useState({});

  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] });
  };

  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  // handle change
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  // useRef
  const formElement = useRef();
  // console.log(formElement);

  // use effect
  useEffect(() => {
    formElement.current.checkValidity()
      ? setValidForm(true)
      : setValidForm(false);
  }, [formData]);

  // handleSubmit
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddPost(formData, photoData.photo);
  };

  return (
    <>
      <h1>Post your Articles</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="photo-upload" className="form-label">
            Upload Photo
          </label>
          <br />
          <input
            type="file"
            className="form-control-post-image"
            id="photo-upload"
            name="photo"
            onChange={handleChangePhoto}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="name-input" className="form-label">
            Articles's Name (required)
          </label>
          <input
            type="text"
            className="form-control"
            id="name-input"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="breed-input" className="form-label">
            Description (required)
          </label>
          <textarea
            type="text"
            className="form-control"
            id="breed-input"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary btn-fluid"
            disabled={!validForm}
          >
            Post
          </button>
        </div>
      </form>
    </>
  );
};

export default AddPosts;
