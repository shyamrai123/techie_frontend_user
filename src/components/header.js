import React, { useEffect, useState } from 'react'
import { Link, useMatch, useMatches, useNavigate } from 'react-router-dom';
import { getAllJobs, getSaveJob } from '../redux/slices/dataSlice';
import { GoSearch } from "react-icons/go";
import { useDispatch } from 'react-redux';
function Header() {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const userId = localStorage.getItem("userId");
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        setOpen(!open);
      };
      useEffect(() => {
        dispatch(getAllJobs());
        if (!token) {
          navigate("/accounts/login");
          window.location.reload();
        }
      }, [token]);

      const matches = useMatches();


      useEffect(()=>{
        dispatch(getSaveJob())
      },[])
  return (
 
        <div className="home-container ">
        <div className="line"></div>
        <div className="home-container-header">
          <div>
            <img
              className="logo"
              src="https://res.cloudinary.com/cliqtick/image/upload/v1692600339/icons/logo-techie-_IE_uqk1bc.png"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center gap-3 border p-1 searchbar-div ">
            <div>
              <input
                className=" border-0 searchbar"
                placeholder="Search by Designation/KeyWord"
              />
            </div>
            <div className="h4 pt-1">
              <GoSearch className="" />
            </div>
          </div>
          <div style={{ cursor: "pointer" }} onClick={() => navigate("/home")}>
            Jobs
          </div>
          <Link
            to={"/profile=/" + userId}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
            }}
          >
            Build My Profile
          </Link>
          <div onClick={() => navigate("/ifollow")} style={{cursor: "pointer"}} className="border rounded-pill p-2 border-success text-success">
            iFollow
          </div>
          <div onClick={handleClick} className="profile-name">
            <p>{email && email.slice(0, 2).toUpperCase()}</p>
          </div>
        </div>
        <div></div>

        <div
          className={` profile-dropdown ${open ? "display" : "display-none"}`}
        >
          <ul>
            <li onClick={() => navigate("/profile=/:userId")}>My Profile</li>
             {
                   <Link to={`/savejob/${userId}`}>
                   <li>Saved Jobs</li>
                   </Link>
             }
            <li>Applied Jobs</li>
            <li
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              Log Out
            </li>
          </ul>
        </div>
      </div>
   
  )
}

export default Header
