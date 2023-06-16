import React, { useState } from 'react';
import Button from './Button';

const NewProject = () => {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    pictures: [],
  });

  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePictureChange = (e) => {
    setProjectData({
      ...projectData,
      pictures: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform the submission logic
    // For example, send the project data and pictures to a server

    // Reset the form after submission
    setProjectData({
      title: '',
      description: '',
      pictures: [],
    });
  };

  return (
   <div>

     <div className='header'>
            <h1>Create a New Project</h1>
            <h4>and change the world today</h4>
        </div>
        
    <form className='add-form' onSubmit={handleSubmit}>
    <div className='form-control'>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={projectData.title}
          onChange={handleChange}
        />
      </label>
    </div>

    <div className='form-control'>
      <label>
        Description:
        <textarea
          name="description"
          value={projectData.description}
          onChange={handleChange}
        />
      </label>
    </div>

    <div className='form-control'>
      <label>
        Pictures:
        <input
          type="file"
          name="pictures"
          accept="image/*"
          multiple
          onChange={handlePictureChange}
        />
      </label>
    </div>

    <input type = 'submit' value ="Save Task" className = 'btn btn-block'></input>
    </form>
    <Button text ="Checkout other projects" onClick={()=>{window.location.href ='/Projects'}}></Button>
  </div>  
  );
};

export default NewProject;
