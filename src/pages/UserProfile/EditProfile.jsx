import { useState, useRef, useEffect } from "react";

const EditProfile = (props) => {
  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState({
    bio: "",
    talksAbout: "",
    livesIn: "",
    profession: "",
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const formElement = useRef();

  // use effect
  useEffect(() => {
    formElement.current.checkValidity()
      ? setValidForm(true)
      : setValidForm(false);
  }, [formData]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddProfileDetails(formData);
  };
  
  return (
    <>
      <h1>Add profile Detals</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
        {/* <div className="form-group mb-4">
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
        </div> */}

        <div className="form-group mb-3">
          <label htmlFor="bio-input" className="form-label">
            Bio
          </label>
          <input
            type="text"
            className="form-control"
            id="bio-input"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="talksAbout-input" className="form-label">
            Talks About
          </label>
          <input
            type="text"
            className="form-control"
            id="talksAbout-input"
            name="talksAbout"
            value={formData.talksAbout}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="livesIn-input" className="form-label">
            Live In
          </label>
          <input
            type="text"
            className="form-control"
            id="LivesIn-input"
            name="livesIn"
            value={formData.livesIn}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="profession-input" className="form-label">
            Profession
          </label>
          <input
            type="text"
            className="form-control"
            id="profession-input"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary btn-fluid"
            disabled={!validForm}
          >
            Add Details
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
