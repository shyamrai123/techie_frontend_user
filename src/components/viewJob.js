import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useMatches, useNavigate,Link } from "react-router-dom";
import { getJob , saveJob } from "../redux/slices/dataSlice";
import {BsInstagram} from "react-icons/bs"
import { FaArrowRightLong } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import Header from "./header";
import { BsBookmark } from "react-icons/bs";
import { verifyToken } from "../utils/utlis";
import "../styles/viewJob.scss";

function ViewJob() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const userId = localStorage.getItem("userId")


  const getJobDetails = useSelector((state) => state.User.value.getJobDetails);
  const params = useMatches();
  
  const handleSaveJob = () => {
    dispatch(saveJob({ jobId: params[0].params.jobId }))
  }
  useEffect(() => {
    dispatch(getJob({ jobId: params[0].params.jobId }));
  }, []);


  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  useEffect(() => {
    if (!verifyToken(email,userId,token)) {
      navigate("/login");
      window.location.reload();
    }
  }, [token]);
  return (
    <div className="job-container w-100%" 
    style={{backgroundColor:'rgb(243,243,243)'}}
    >
      <Header />
      <div className="viewhome container "  >
          <div>
            Home / JobId : {getJobDetails._id && getJobDetails._id.slice(0,3)}
          </div>
          <div style={{ cursor: "pointer" }}>
            <BsBookmark />{" "}
            <span onClick={handleSaveJob}className="text-decoration-underline">
                    Save Job
                    </span>
          </div>
        </div>
        <div className="h2 container ">{getJobDetails.title}</div>
        <div className="">
          <div className="hiring-div container">
            <div
              className=" hirings"
            >
              HIRING
            </div>
            <div
              
              className="openings"
            >
              {getJobDetails.openings}
            </div>
          
          <div
            style={{ cursor: "pointer" }}
            className=" container sharejob"
          >
            SHARE JOB
          </div>
        </div>
        </div>
      
        <hr className="container"/>
      <div className="data">
       
        {/* diplay job details */}
        <div className=" viewjobsDetails-main  shadow border container w-90% ">
        <div className=" viewjobsDetails container">
          <div className="viewjobsDetails-1">
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
          <div className="viewjobsDetails-2">
            <div>
              <label>SKILLS</label>
              <div >
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

        {/* <div className="description">
          <label>JOB DESCRIPTION</label>
          <h6>
            Thought Minds - is a global leader in providing solutions on LLM and
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
        </div> */}
        <div className="h6">
          Location : {getJobDetails && getJobDetails.States}
        </div>
      </div>

     
      </div>
      
        <div> <div className="aboutcomp container ">About Company</div></div>
        <div className="container">
        <div className="  card-company shadow border ">
         <div className="randoms" >
             <p   style={{backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16), width:"3em", height:"3em", borderRadius:"50%",
              display:"flex",alignItems:"center", justifyContent:"center", marginLeft:"1em", position:"absolute", top:"0.8em"
            }}>
            {getJobDetails.company_name &&
              getJobDetails.company_name.slice(0, 2).toUpperCase()}
          </p>
         </div>
          <div className="locationcomp container">
            <div>
            {
              <div><b>{getJobDetails && getJobDetails.company_name}</b></div>
            }
            </div>
            <div>
            {
              <div>{getJobDetails && getJobDetails.States}</div>
              }
              
              </div> 
          </div>
          <div className="view">
            <span >View Company <FaArrowRightLong /></span>
          </div>
        </div>
      </div>

      <div className="container verify ">
         <button  className="btn-verify">Verify Account to Apply</button>
      </div>

         {/* ///footer// */}

     

         <div className="foter container">
               <div className="techie-div">
                              <div>
                                  <img className="techie-logo" src="https://res.cloudinary.com/cliqtick/image/upload/v1692600339/icons/logo-techie-_IE_uqk1bc.png"/>
                              </div>
                              <div className="sm-div">
                                 <div><img className="sm-img" src="https://res.cloudinary.com/cliqtick/image/upload/v1686120164/techei_panda_website_images/Facebook-Icon_orvpxl.png" /></div>
                                 <div><img className="sm-img" src="https://res.cloudinary.com/cliqtick/image/upload/v1686120165/techei_panda_website_images/LinkedIn-Icon_zcra9f.png" /></div>
                                 <div> <img className="sm-img" src="https://res.cloudinary.com/cliqtick/image/upload/v1686120164/techei_panda_website_images/Instagram-Icon_ijchts.png" /></div>
                              </div>
                              <div className="" > https://techiepanda.in/</div>
                              <div> +91 720 740 1718</div>
               </div>
               <div >
                  <div className="resources" >Site Map</div>
                  <div  className="resources">Resources</div>
                  <div  className="resources">Blog</div>
                  <div>FAQ</div>
               </div>
               <div className="techie-about">
                   <div>Techie Panda</div>
                   <div>About Us</div>
                   <div>Meet Techie Panda</div>
                   <div>Job Assistance</div>
                   <div>Refund Policy</div>
                   <div>Privacy and Cookie Policy</div>
                   <div>Terms and Conditions</div>
               </div>
               <div className="techie-map">
                   <div><iframe  className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.0386556256476!2d83.23167277586289!3d17.74281769246731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3967274842f4df%3A0x9711e68b73419d51!2sTechiepanda!5e0!3m2!1sen!2sin!4v1696832682466!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/></div>
               </div>
      </div>
    </div>
  );
}

export default ViewJob;
