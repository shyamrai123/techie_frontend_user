import React, { useEffect, useState } from "react";
import "../styles/buildmyprofile.scss";
import { GoSearch } from "react-icons/go";
import { MdModeEditOutline} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "../styles/home.scss";
import "../styles/profileform.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../redux/slices/dataSlice";
import Header from "./header";

const BuildProfile = () => {
  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  const date = new Date();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [open, setOpen ] = useState(false)
  console.log(formData);
  const handleClick = (e) => {
    e.preventDefault()
      dispatch(updateUser({...formData, lastupdatetime : date}));
      alert("Saved Successfully")
  }
  const handleClick1 = () => {
    setOpen(!open)
}
  const userDetails = useSelector((state) => state.User.value.userDetails);
  console.log(userDetails);
  
  useEffect(() => {
    if(!token) navigate("/accounts/login")
    dispatch(getUser({ userId: userId }));
    
  }, [token]);
  return (
    <div className="buldmyprofile-container">
       <Header/>
      <div className="container profile-container">
        <h2>Profile</h2>
        <div className="profile-pic-container">
           <div className="profile-pic">
           {
              userDetails? <img className="profile-image" src={userDetails.profile_pic} alt="Img"/> :  <p className="h1" >{email && email.slice(0,2).toUpperCase()}</p>
            }
            <MdModeEditOutline onClick={() => navigate("/profile/edit-pic")} className="edit-icon"/> 
           </div>
        </div>
        <div className="profile-div">
          <div className="profile-details">
            <div className="no1">
              <div>
                <label>User Name :</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder={`${userDetails.username}`}
                  onChange={(e) => setFormData({...formData,username : e.target.value})}
                />
              </div>
            </div>
            <div className="no1">
           
              <div>
                <label>Name :</label>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={`${userDetails.name? userDetails.name:"N/A"}`}
                  onChange={(e) => setFormData({...formData,name : e.target.value})}
                />
              </div>
           
            </div>
            <div className="no1">
          
              <div>
                <label>Email Address :</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder={`${userDetails.email}`}
                  readOnly
                />
              </div>
           
            </div>
            <div className="no1">
            
              <div>
                <label>Phone Number</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder={`+91${userDetails.mobilenumber}`}
                  readOnly
                />
              </div>
           
            </div>
            <div className="no1">
              <div>
                <label>Date of Birth :</label>
              </div>
              <div>
                <input
                  type="date"
                  placeholder= "Dob"
                  onChange={(e) => setFormData({...formData,dob : e.target.value})}
                />
              </div>
            </div>
            <div className="no1">
              <div>
                <label>Gender :</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="gender"
                  onChange={(e) => setFormData({...formData, gender : e.target.value})} 
                />
              </div>
            </div>
            <div className="no1">
              <div><label>Address :</label></div>
            <textarea onChange={(e) => setFormData({...formData, address: e.target.value})}>{`${userDetails.address? userDetails.address:"N/A"}`}</textarea>
            </div>
          </div>
          <div className="update">
             <button onClick={handleClick} type="button">Save</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildProfile;
