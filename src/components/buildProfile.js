import React, { useEffect } from "react";
import "../styles/buildmyprofile.scss";
import { GoSearch } from "react-icons/go";
import { MdModeEditOutline} from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../styles/home.scss";
import "../styles/buildmyprofile.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/slices/dataSlice";
import Header from "./header";

const BuildProfile = () => {
  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("email");
  const userDetails = useSelector((state) => state.User.value.userDetails);
  console.log(userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUser({ userId: userId }));
  }, []);
  return (
    <div className="buldmyprofile-container  ">
    <Header/>
     
      <div className="container profile-container">
        <div className="h1">Profile</div>
        <div className="profile-pic-container">
           <div className="profile-pic">
            {
              userDetails? <img className="profile-image" src={userDetails.profile_pic} alt="Img"/> :  <p className="h1" >{email && email.slice(0,2).toUpperCase()}</p>
            }
          
            <MdModeEditOutline  className="edit-icon"/> 
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
                  readOnly
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
                  placeholder={`${userDetails.name? userDetails.name:"N/A"}`}
                  readOnly
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
                  type="text"
                  placeholder={`${userDetails.dob? userDetails.dob:"N/A"}`}
                  readOnly
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
                  placeholder={`${userDetails.gender? userDetails.gender:"N/A"}`}
                  readOnly
                />
              </div>
            </div>
            <div className="no1">
              <div><label>Address :</label></div>
            <textarea readOnly cols={50}>{`${userDetails.address? userDetails.address:"N/A"}`}</textarea>
            </div>
          </div>
          <div className="update">
            <Link to={"/profile/edit/" + userId}>    <button type="button">Update Details</button></Link>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildProfile;
