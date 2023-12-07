import React from 'react';
import Header from './header';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { getAllJobs } from "../redux/slices/dataSlice";

import "../styles/allJobs.scss"
import { Input} from 'reactstrap';
function AllJobs() {

    const jobData = useSelector((state) => state.User.value.jobData);
    return (
        <div>
            <div className="allJobs-container" style={{ backgroundColor: 'rgb(243,243,243)' }}>

                <Header />

                <div className="homePage-cards-container container">
                    {jobData &&
                        jobData.map((e) => {
                            return (
                                <div className="card-container bg-white">
                                    <div className="card-container-01">
                                        <div>
                                            <h5>{e.title}</h5>
                                            <h5 className="text-secondary ">{e.company_name}</h5>
                                            <div>
                                                <label className="h6">Role :</label>
                                                <span>{e.role}</span>
                                            </div>
                                            <div>
                                                <label className="h6">Functional Area : </label>
                                                <span>{e.functionalarea}</span>
                                            </div>
                                            <div>
                                                <label className="h6">States/Cities :</label>
                                                <span>{e.States}</span>
                                            </div>
                                            <div>
                                                <label className="h6">Employment Type :</label>
                                                <span>{e.employmenttype}</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <label className="h6">Skills :</label>
                                        <div className="d-flex" style={{ columnGap: "0.1em" }}>
                                            {e.skills &&
                                                e.skills.split(",").map((i) => {
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
                                    <div className="d-flex gap-1 ">
                                        <div>
                                            <span
                                                style={{
                                                    fontSize: "0.7rem",
                                                    padding: "0 0.2rem 0 0.3rem",
                                                }}
                                                className=" text-success border border-success rounded-pill"
                                            >
                                                HIRING
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    fontSize: "0.7rem",
                                                    padding: "0 0.2rem 0 0.2rem",
                                                }}
                                                className="bg-secondary text-white rounded-pill"
                                            >
                                                {e.experience}
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    fontSize: "0.7rem",
                                                    padding: "0 0.2rem 0 0.2rem",
                                                }}
                                            >
                                                {e.salary && e.salary == "" ? (
                                                    <span className="bg-white"></span>
                                                ) : (
                                                    <span className="bg-secondary text-white rounded-pill">
                                                        {" "}
                                                        {e.salary}
                                                    </span>
                                                )}
                                            </span>
                                        </div>
                                        <div>
                                            <span
                                                style={{
                                                    fontSize: "0.7rem",
                                                    padding: "0 0.2rem 0 0.2rem",
                                                }}
                                                className="bg-secondary text-white rounded-pill"
                                            >
                                                {e.openings}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card-profile">
                                        <p style={{ backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16) ,color:'white'}}>{e.company_name.slice(0, 2).toUpperCase()}</p>
                                    </div>
                                    <Link to={"/viewJOb/" + e._id}> <div className="viewjob">View Job <BsArrowRight /></div></Link>
                                </div>
                            );
                        })}
                </div>


            </div>

            <div className='sideBox shadow border rounded bg-light'>
                <p style={{ fontSize: '0.7em', marginTop: '1em', marginRight: '8em' }}><b>Search Filters</b></p>
                <hr />
                <p className='apply'>Apply Filters</p>
                <p className='clear'>Clear Filters</p>
                <hr />
                <div className="d-flex justify-content-evenly align-items-center mb-2">
                    <p className="text-dark smaller font-weight-bold mb-0" style={{ fontSize: '0.7em' }}><b>Min. Experience</b></p>
                    <p className="ml-auto smaller mb-0" style={{ fontSize: '0.8em' }}><span id="minExpVal">0</span> Years</p>
                </div>
                <input type="range" name="min_experience" className="form-control-range form-control-range-secondary w-75" value="0" step="1" min="0" max="50" id="id_min_experience" oninput="$('#minExpVal').html($(this).val())"></input>
                <br />
                <div className="d-flex justify-content-evenly align-items-center mb-2">
                    <p className="text-dark smaller font-weight-bold mb-0" style={{ fontSize: '0.7em' }}><b>Max. Experience</b></p>
                    <p className="ml-auto smaller mb-0" style={{ fontSize: '0.8em' }}><span id="minExpVal">50</span> Years</p>
                </div>
                <input type="range" name="max_experience" className="form-control-range w-75" value="50" step="1" min="0" max="50" id="id_max_experience" oninput="$('#maxExpVal').html($(this).val())"></input>
                <br />
                <hr />
                <b style={{ fontSize: '0.7em', marginRight: '10em' }}>Location</b>

                <Input className='w-75 ms-4 mt-2'
                    id='location'
                    name="location"
                    type='location'
                    placeholder='Select 1 or more Location(s)' style={{ fontSize: '0.65em', paddingTop: '0em', height: '6vh' }}
                >
                </Input>
                <hr />

                <b style={{ fontSize: '0.7em', marginRight: '11em' }}>Skills</b>

                <Input className='w-75 ms-4 mt-2'
                    id='location'
                    name="location"
                    type='location'
                    placeholder='Select 1 or more Skill(s)' style={{ fontSize: '0.65em', paddingTop: '0em', height: '6vh' }}
                >
                </Input>
                <hr />

                <b style={{ fontSize: '0.7em', marginRight: '9em' }}>Education</b>

                <Input className='w-75 ms-4 mt-2'
                    id='location'
                    name="location"
                    type='location'
                    placeholder='Select 1 or more Education(s)' style={{ fontSize: '0.65em', paddingTop: '0em', height: '6vh' }}
                >
                </Input>
                <hr />

                <p style={{ fontSize: '0.7em', marginRight: '8em', width: '15em' }}><b>Cost to Company (CTC)</b></p>
                <div className="d-flex justify-content-evenly align-items-center mb-2" >
                    <p className="text-dark smaller font-weight-bold mb-0" style={{ fontSize: '0.7em' }}><b>Min. CTC</b></p>
                    <p className="ml-auto smaller mb-0" style={{ fontSize: '0.8em' }}><span id="minExpVal">0</span> LPA</p>
                </div>
                <input type="range" name="min_experience" className="form-control-range form-control-range-secondary w-75" value="0" step="1" min="0" max="50" id="id_min_experience" oninput="$('#minExpVal').html($(this).val())"></input>
                <br />
                <div className="d-flex justify-content-evenly align-items-center mb-2">
                    <p className="text-dark smaller font-weight-bold mb-0" style={{ fontSize: '0.7em' }}><b>Max. CTC</b></p>
                    <p className="ml-auto smaller mb-0" style={{ fontSize: '0.8em' }}><span id="minExpVal">500</span> LPA</p>
                </div>
                <input type="range" name="max_experience" className="form-control-range w-75" value="50" step="1" min="0" max="50" id="id_max_experience" oninput="$('#maxExpVal').html($(this).val())"></input>
                <br />
                <hr />

                <b style={{ fontSize: '0.7em', marginRight: '6em' }}>Employment Type</b>

                <Input className='w-75 ms-4 mt-2'
                    id='location'
                    name="location"
                    type='location'
                    placeholder='Select 1 or more Employment 
                Type(s)' style={{ fontSize: '0.65em', paddingTop: '0em', height: '7vh' }}
                >
                </Input>
                <hr />

                <p style={{ fontSize: '0.7em', marginRight: '9em' }}><b>Job Status</b></p>
                <FaChevronDown style={{position:'absolute',top:'57.7em',left:'9em'}}/>
                <select name="job_open" className="form-control w-75 ms-4" >

                    <option value="" selected="">Any  </option>
                    <option value="True">Hiring</option>
                    <option value="False">Closed</option>

                </select>
                <hr/>
                <p className='apply'>Apply Filters</p>
                <p className='clear'>Clear Filters</p>
            </div>
            <div className="fotter">
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
                <img className="playlink" src="https://codezo.s3.amazonaws.com/static/img/google-play-download.png" />
            </div>
            </div>
        </div>
    )
}

export default AllJobs