import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Resume from "../src/assets/ShubhamKeshri_CV.pdf"
// import QRCode from "react-qr-code";
//state management
const App = () => {
  const [formdata, setformdata] = useState({
    name: "",
    // lastname: "",
    email: "",
    contact: "",
    gender: "",
    // department: "",
    // resume: "",
    // about: "",
    // isvisible: "",
  });
  function changeHandler(e) {
    setformdata((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/insertdata", formdata);
      toast.success("Form Submitted Successfull", {
        position: "top-center",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="container">
      <h1>Dataman Form</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstname">
          Name<span>*</span>
        </label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="name"
          onChange={changeHandler}
          required
          value={formdata.name}
        />
        {/* <label htmlFor="lastname">
          Last Name<span>*</span>
        </label> */}
        {/* <input
          type="text"
          placeholder="Enter Last Name"
          name="lastname"
          onChange={changeHandler}
          required
          value={formdata.lastname}
        /> */}
        <label htmlFor="email">
          Email<span>*</span>
        </label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={changeHandler}
          required
          value={formdata.email}
        />
        <label htmlFor="contact">
          Contact<span>*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          name="contact"
          onChange={changeHandler}
          required
          value={formdata.contact}
        />
        {/* <label htmlFor="gender">Gender</label>
        <input type="radio" name="gender" onChange={changeHandler} />
        Male
        <input type="radio" name="gender" onChange={changeHandler} />
        Female
        <input type="radio" name="gender" onChange={changeHandler} />
        Others */}
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" onChange={changeHandler}>
          <option value="Other">Other</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {/* <label htmlFor="resume">Resume</label> */}
        {/* <input
          type="file"
          placeholder="Select Resume"
          name="resume"
          onChange={changeHandler}
        /> */}
        {/* <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          cols={30}
          rows={10}
          placeholder="Enter Message"
          onChange={changeHandler}
          value={formdata.about}
        ></textarea> */}
        {/* <input
          type="checkbox"
          name="isvisible"
          onChange={changeHandler}
          id="isvisible"
        />
        <label htmlFor="isvisible">
          please read terms and condition before submitting
        </label> */}
        {/* <button type="button" onClick={ResetHandler}>
          Reset
        </button> */}
        <button type="submit">Submit</button>
      </form>
      {/* <a
        href="https://api.whatsapp.com/send?phone=11282829029"
        rel="noreferrer"
        target="_blank"
      >
        WhatsApp
      </a> */}
      {/* <a className="btn btn-cv" href={Resume} download="ShubhamKeshri.pdf">
        My Resume
      </a> */}
      {/* <QRCode
      size={200}
      bgColor="black"
      fgColor="white"
      value="https://facebook.com"
      /> */}
    </div>
  );
};

export default App;
