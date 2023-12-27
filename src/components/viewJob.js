import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useMatches, useNavigate, Link } from "react-router-dom";
import { getJob, saveJob, getAllCompanies } from "../redux/slices/dataSlice";
import { BsInstagram } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import Header from "./header";
import { BsBookmark } from "react-icons/bs";
import { verifyToken } from "../utils/utlis";
import "../styles/viewJob.scss";
import Footer from "./footer";
import Navigationpanel from "./navigationpanel";

function ViewJob() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const getJobDetails = useSelector((state) => state.User.value.getJobDetails);
  const companyData = useSelector((state) => state.User.value.companyData);
  console.log(companyData);
  console.log(getJobDetails);
  const { skills } = getJobDetails;
  // const skill = skills.split(",")
  // console.log(skill);

  const params = useMatches();

  const handleSaveJob = () => {
    dispatch(saveJob({ jobId: params[0].params.jobId }));
  };
  useEffect(() => {
    dispatch(getJob({ jobId: params[0].params.jobId }));
    dispatch(getAllCompanies());
  }, []);

  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  useEffect(() => {
    if (!verifyToken(email, userId, token)) {
      navigate("/login");
      window.location.reload();
    }
  }, [token]);
  return (
    <div className="viewjob bg-white" >
      <Header />
      <div className="viewjob-details bg-white pt-3">
        <div className="viewjob-details-inner container  ">
          <div>
            Home / JobId : {getJobDetails._id && getJobDetails._id.slice(0, 3)}
          </div>
          <div style={{ cursor: "pointer" }}>
            <BsBookmark />{" "}
            <span onClick={handleSaveJob} className="text-decoration-underline">
              Save Job
            </span>
          </div>
        </div>
      </div>
      <div className="job-title container ">
        <div>{getJobDetails.title}</div>
      </div>
      <div className="hirings">
        <div className="hirings-inner container">
          <div className=" hirings-opening ">
            <div className="hiring  bg-white  rounded-pill   ">Hiring</div>
            <div className="openings  bg-secondary  text-white rounded-pill ">
              {getJobDetails.openings}
            </div>
          </div>
          <div className="share   rounded-pill">SHARE JOB</div>
        </div>
      </div>
<hr className="container"/>
       <div className="view-jobdescription-outer ">
       <div className="view-jobdescription container  border shadow ">
        <div className="view-jobdescription-inner conatiner">
          <div className="company-roles-1">
            <div>
              <div className="lab">ROLE </div>
              <div className="labels">
                {getJobDetails && getJobDetails.role}
              </div>
            </div>
            <div>
              <div className="lab">FUNCTIONAL AREA</div>
              <div className="labels">
                {getJobDetails && getJobDetails.functionalarea}
              </div>
            </div>
            <div>
              <div className="lab"> STATES/CITIES </div>
              <div className="labels">
                {getJobDetails && getJobDetails.States}
              </div>
            </div>
          </div>
          <div className="company-roles-2">
            <div>
              <div className="lab">OPENINGS </div>
              <div className="labels">
                {getJobDetails && getJobDetails.openings}
              </div>
            </div>
            <div>
              <div className="lab">SALARY </div>
              <div className="labels">
                {getJobDetails.salary && getJobDetails.salary}
              </div>
            </div>
          </div>

          <div className="company-roles-3">
            <div>
              <div>
                <div className="lab">SKILL</div>
                <div className="job-skills">
                  {getJobDetails.skills &&
                    getJobDetails.skills.split(",").map((i) => {
                      return (
                        <div className="skills">
                          {/* <div className="rounded-pill bg-secondary text-white ">
                            {i}
                          </div> */}
                          <Link to={"/searchSkill/" + i} style={{textDecoration:'solid'}}>
                            <div className=" rounded-pill bg-secondary text-white   ">
                              {i}
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div>
                <div className="lab">JOB TYPE</div>
                <div className="labels">
                  {getJobDetails && getJobDetails.employmenttype}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="descriptions">
          <div className="descriptions-inside">
            <div className="jodes">JOB DESCRIPTION :</div>
            <p>{getJobDetails && getJobDetails.description}</p>

            <div className="responsibilities">
              <div className="jodes">Responsibilities :</div>
              <p>{getJobDetails && getJobDetails.responsibilities}</p>
            </div>
          </div>
        </div>
      </div>
       </div>

      <div className="about-comp container  pt-5 pb-3">
        <div>About Company</div>
      </div>

       <div className="about-comp-details-outer">
       <div className="about-comp-details container border shadow ">
        <div className="about-comp-details-inner">
          <div className="profile-comp">
            <p
              className="random"
              style={{
                backgroundColor:
                  "#" + Math.floor(Math.random() * 16777215).toString(16),
                color: "white",
              }}
            >
              {getJobDetails.company_name &&
                getJobDetails.company_name.slice(0, 2).toUpperCase()}
            </p>
            <div>
              <div className="cname">
                {getJobDetails && getJobDetails.company_name}
              </div>
              <div className="loc">{getJobDetails && getJobDetails.States}</div>
            </div>
          </div>
          <div className="abt-comp">About Company</div>
          <div className="abt-data">{getJobDetails && getJobDetails.about}</div>
        </div>
      


      </div>
       </div>
      {/* ///footer// */}
      <Footer />
      <Navigationpanel />
    </div>
  );
}

export default ViewJob;
