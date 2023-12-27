import React, { useEffect } from "react";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCompanies,
  getUserFollowedComp,
} from "../redux/slices/dataSlice";
import { FaArrowRightLong } from "react-icons/fa6";

import { verifyToken } from "../utils/utlis";
import { Link, useNavigate } from "react-router-dom";
import "../styles/ifollow.scss";
import "../styles/home.scss";
import Footer from "./footer";
import Navigationpanel from "./navigationpanel";
function Ifollow() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const companyData = useSelector((state) => state.User.value.companyData);
  // const getJobDetails = useSelector((state) => state.User.value.getJobDetails);
  const followedCompanies = useSelector(
    (state) => state.User.value.followedCompanies
  );
  console.log(followedCompanies);

  useEffect(() => {
    dispatch(getAllCompanies());
    dispatch(getUserFollowedComp({ userId: localStorage.getItem("userId") }));
  }, []);

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  useEffect(() => {
    if (!verifyToken(email, userId, token)) {
      navigate("/login");
      window.location.reload();
    }
  }, [token]);
  return (
    <div className="ifollowcomp" >
      <Header />
      <div className="ifollow-inner container  ">
        <div className="ifollow-text   container"> i-Follow</div>
        <div className="ifolowinp">
          <input className="inp container" type="text" />
        </div>
        <div className="followed">
          <h2>Companies Followed</h2>
        </div>

        <div className="browse-comp ">
          {followedCompanies &&
            followedCompanies.map((e) => {
              return (
                <Link  to={"/viewCompany/" + e?.value._id} className="link" style={{textDecoration:'solid',color:'black'}}>
            
                <div>
                <div className="browse-comp-inner   border shadow ">
                <div className=" comp-profile">
                  <div>
                    <p
                      className="random"
                      style={{
                        backgroundColor:
                          "#" +
                          Math.floor(Math.random() * 16777215).toString(16),
                      }}
                    >
                      {e?.value.company_name.slice(0, 2).toUpperCase()}
                    </p>
                  </div>
                  <div className="">
                    <div className="">
                      <b>{e?.value.company_name}</b>
                    </div>
                    <div className="">{e?.value?.location}</div>
                  </div>
                </div>

                <div className="view-company">
                  <Link  to={"/viewCompany/" + e?.value._id} className="link">
                    View Company
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
             </div>
              </Link>
              );
            })}
        </div>
        <div className="browse">
          <h2>Browse Companies</h2>
        </div>
        <div className="browse-comp  ">
          {companyData &&
            companyData.map((e) => {
              return (
                <Link  to={"/viewCompany/" + e?._id} className="link" style={{textDecoration:'solid',color:'black'}}>
            
               <div>
                  <div className="browse-comp-inner   border shadow ">
                  <div className=" comp-profile">
                    <div>
                      <p
                        className="random"
                        style={{
                          backgroundColor:
                            "#" +
                            Math.floor(Math.random() * 16777215).toString(16),
                        }}
                      >
                        {e?.company_name.slice(0, 2).toUpperCase()}
                      </p>
                    </div>
                    <div className="">
                      <div className="">
                        <b>{e?.company_name}</b>
                      </div>
                      <div className="">{e?.location}</div>
                    </div>
                  </div>

                  <div className="view-company">
                    <Link to={"/viewCompany/" + e?._id} className="link">
                      View Company
                      <FaArrowRightLong />
                    </Link>
                  </div>
                </div>
               </div>
              </Link>
              );
            })}
        </div>
      </div>

      <Footer />
      <Navigationpanel />
    </div>
  );
}

export default Ifollow;
