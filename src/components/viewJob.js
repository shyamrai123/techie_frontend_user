import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useMatches, useNavigate } from "react-router-dom";
import { getJob , postSaveJob } from "../redux/slices/dataSlice";
import Header from "./header";
import { BsBookmark } from "react-icons/bs";
import "../styles/viewJob.scss";
import {BsInstagram} from "react-icons/bs"
import { FaArrowRightLong } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
function ViewJob() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {jobId} = useParams();
  const userId = localStorage.getItem("userId")
  const getJobDetails = useSelector((state) => state.User.value.getJobDetails);
  const postJobState = useSelector((state)=>state.User.value.postSaveJob);

  console.log(postJobState);

  
   const jobsMatches = useMatches();
  console.log(jobsMatches);


  const params = useMatches();
  
  useEffect(() => {
    dispatch(getJob({ jobId: params[0].params.jobId }));

  }, []);
  

  const handleSaveJob = () => {
    dispatch(postSaveJob({ userId, jobId }));
  };
  


  return (
    <div className="job-container ">
      <Header />

      <div className="container pt-3">
        <div className="d-flex justify-content-between">
          <div>
            Home / JobId : {getJobDetails._id && getJobDetails._id.slice(0,3)}
          </div>
          <div style={{ cursor: "pointer" }}>
            <BsBookmark />{" "}
            <button className="text-decoration-underline" onClick={()=>handleSaveJob({_id:jobId, _id:userId})}>Save Job</button>
          </div>
        </div>
        <div className="h2">{getJobDetails.title}</div>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-evenly gap-2">
            <div
              style={{ fontSize: "0.8rem" }}
              className=" text-success border border-success rounded-pill d-flex justify-content-center align-items-center ps-2 pe-2"
            >
              HIRING
            </div>
            <div
              style={{ fontSize: "0.8rem" }}
              className="ps-2 pe-2 text-white bg-secondary rounded-pill d-flex justify-content-center align-items-center"
            >
              {getJobDetails.openings}
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="text-danger border border-danger rounded-pill ps-2 pe-2"
          >
            SHARE JOB
          </div>
        </div>
        {/* diplay job details */}
        <div className=" bg-light">

       
        <div className="d-flex justify-content-between align-items-start pt-5 border">
          <div>
            <div>
              <label>ROLE</label>
              <p>{getJobDetails && getJobDetails.role}</p>
            </div>
            <div>
              <label>FUNCTIONAL AREA</label>
              <p>{getJobDetails && getJobDetails.functionalarea}</p>
            </div>
            <div>
              <label>STATES/CITIES</label>
              <p>{getJobDetails && getJobDetails.States}</p>
            </div>
            <div>
              <label>OPENINGS</label>
              <p>{getJobDetails && getJobDetails.openings}</p>
            </div>
            <div>
              <label>SALARY</label>
              <p>{getJobDetails && getJobDetails.salary}</p>
            </div>
          </div>
          <div>
            <div>
              <label>SKILLS</label>
              <div className="d-flex" style={{ columnGap: "0.3rem" }}>
                {getJobDetails.skills &&
                  getJobDetails.skills.split(",").map((i) => {
                    return (
                      <div>
                        <span
                          style={{
                            fontSize: "0.8rem",
                            padding: "0 0.2rem 0 0.2rem",
                          }}
                          className="bg-secondary text-white rounded-pill"
                        >
                          {i}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div>
              <label>JOB TYPE</label>
              <p>{getJobDetails && getJobDetails.employmenttype}</p>
            </div>
          </div>
        </div>

        <div>
          <label>JOB DESCRIPTION</label>
          <h6>
            Thought Minds – is a global leader in providing solutions on LLM and
            generative AI solutions .We are seeking an experienced Business
            Analyst with 3- 5 years of professional experience to join our team.
            As a Business Analyst, you will play a vital role in bridging the
            gap between business needs and technology solutions.
          </h6>
          <h6>Responsibilities:</h6>
          <ul>
            <li>
              Collaborate with Project Manager, Business and Data Analysts and
              other team members, as well as other stakeholders to document and
              maintain requirements, procedures, processes, and other related
              content in an Agile/Scrum team environment.
            </li>
            <li>
              The candidate must demonstrate superior writing, editing and
              communication skills, with a keen eye for detail.
            </li>
            <li>
              Prepare, review, revise and maintain business requirement
              documentation Gather and analyze technical information from
              various sources to document new and changing requirements and to
              document processes and procedures.
            </li>
            <li>
              Stay updated on industry best practices, emerging technologies,
              and business trends to propose innovative solutions and process
              improvements.
            </li>
            <li>
              Facilitate communication between business units and IT teams,
              ensuring that all parties have a clear understanding of project
              objectives and requirement.
            </li>
            <li>
              Work with cross-functional teams to design and propose solutions,
              including functional specifications, user stories, and mock-ups,
              to address business challenges.
            </li>
          </ul>
          <h6>Qualifications :</h6>
          <ul>
            <li>
              Bachelor's degree in Business Administration, Finance, Information
              Systems, or related field.
            </li>
            <li>
              Knowledge of project management methodologies (e.g., Agile/Scrum,
              Waterfall).
            </li>
            <li>
              Certification in business analysis (e.g., CBAP, CCBA) is a plus.
            </li>
            <li>Willingness to travel for business needs.</li>
            <li>Excellent communication and interpersonal skills.</li>
            <li>Strong analytical and problem-solving skills.</li>
            <li>
              3-5 years of professional experience in a business analysis or
              related role.
            </li>
          </ul>
        </div>
        </div>  
        <div className="h6">
          Location : {getJobDetails && getJobDetails.States}
        </div>
      </div>
      <div className="container">
        <h3  className="pt-2"style={{marginLeft:'0em'}}>About Company</h3>
        <hr style={{width:'81.5em',marginLeft:'0em'}}/>
        <div className="card-profile shadow border bg-light pt-2 rounded pill" style={{width:'81.5em',height:'20vh',marginLeft:'0em'}}>
          <p style={{marginLeft:'1.3em',backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16),color:'white'}}>
            {getJobDetails.company_name &&
              getJobDetails.company_name.slice(0, 2).toUpperCase()}
          </p>
          <div>
            {
              <div><b>{getJobDetails && getJobDetails.company_name}</b></div>
            }
              {
              <div>{getJobDetails && getJobDetails.States}</div>
            }
          </div>
          <div className="pt-5">
            <span style={{marginLeft:'36em',cursor:"pointer"}}>View Company <FaArrowRightLong /></span>
          </div>
        </div>
      </div>

      <div className="border bg-secondary rounded pill pt-1" style={{width:'15em',height:'7vh',textAlign:'center',marginLeft:'7em',marginTop:'1.5em',color:'white'}}>
        <p>Verify Account to Apply</p>
      </div>


      <div className="footer">
                <div className="inside">
                    <img src="https://res.cloudinary.com/cliqtick/image/upload/v1692600339/icons/logo-techie-_IE_uqk1bc.png" style={{ width: '7em', height: '3em', marginTop: '1em', marginLeft: '10em' }} />
                    <p className="privacy">Privacy Policy . Terms & Conditions . Beware of Fraudsters</p>
                    <p className="copy">Copyright © 2023 codezo.in | All Rights Reserved</p>
                    <div className="icons">
                        <FaTwitter />
                        <BsInstagram />
                        <AiFillLinkedin />
                        <CiMail />
                    </div>
                </div>
            <div className="links">
                <img className="play" src="https://codezo.s3.amazonaws.com/static/img/google-play-download.png" />
            </div>
            </div>
    </div>
  );
}

export default ViewJob;
