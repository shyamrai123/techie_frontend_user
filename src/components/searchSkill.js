import React, { useEffect, useState } from "react";
import Header from "./header";
import "../styles/searchSkill.scss";
import {
  getAllJobs,
  getSearchJobs,
  lastSkillStored,
} from "../redux/slices/dataSlice";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowRight } from "react-icons/bs";

function SearchSkill() {
  const { skill } = useParams();
  const dispatch = useDispatch();
  const [skiName, setSkillName] = useState("");
  const [ski, setSki] = useState([]);
  const allJobs = useSelector((state) => state.User.value.jobData);

  // useEffect(() => {
  //   setSki(skill);
  //   dispatch(lastSkillStored(skill))
  //   // if (ski !== lastSkill) {
  //   //   setSki(ski);
  //   //   dispatch(lastSkillStored(ski));
  //   //   dispatch(
  //   //     getSearchJobs({
  //   //       searchedInput:
  //   //         skill.split("")[0].toUpperCase() + skill.slice(1).toLowerCase(),
  //   //     })
  //   //   )else if(){

  //   //   }

  //   //   }
  //   dispatch(
  //     getSearchJobs({
  //       searchedInput:
  //         skill.split("")[0].toUpperCase() + skill.slice(1).toLowerCase(),
  //     })
  //   )
  // }, [ski]);

  useEffect(() => {
    dispatch(getAllJobs());
    if (skill) {
      setSkillName(skill);
    }
    if (allJobs) {
      setSki(allJobs.filter((e) => e.skills.includes(skill)));
    }
  }, [skill]);
  console.log(ski);
  return (
    <div className="home-container"  >
      <Header />
      <div className="jobs-container-main  container">
          <div className="jobs-container-inner">
            <div className="jobs-container">
              {ski &&
                ski.map((e) => {
                  return (
                    <Link to={"/viewJOb/" + e._id} className="link" style={{textDecoration:'solid',color:'black'}}>
                    <div className="jobs-single shadow border container ">
                      <div>
                        {" "}
                        <div className="card-1">
                          <div>
                            <h5 className="title">{e.title}</h5>
                            <h5 className=" h5 text-secondary">
                              {e.company_name}
                            </h5>
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

                          <div>
                            <label className="h6">Skills :</label>
                            <div
                              className="skills container"
                              
                            >
                              {e.skills &&
                                e.skills.split(",").map((i) => {
                                  return (
                                    <div>
                                      <Link to={"/searchSkill/" + i} style={{textDecoration:'solid'}}>
                                        <span className="skills-text bg-secondary">
                                          {i}
                                        </span>
                                      </Link>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                         <label className="h6">Hirings :</label>

                          <div className="d-flex flex-wrap gap-1 container   hirings">
                            <div>
                              <span
                                className=" hiring-01 bg-secondary text-white rounded-pill p-1"
                              >
                                {e.experience}
                              </span>
                            </div>
                            <div>
                              <span
                              
                                className="hiring-01"
                              >
                                {e.salary && e.salary == "" ? (
                                  <span className="bg-white"></span>
                                ) : (
                                  <span className="bg-secondary text-white rounded-pill p-1">
                                 
                                    {e.salary}
                                  </span>
                                )}
                              </span>
                            </div>
                            <div>
                              <span
                              
                                className=" hiring-01 bg-secondary text-white rounded-pill p-1"
                              >
                                {e.openings}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-2">
                        <Link
                          className="view-job-link"
                          to={"/viewJOb/" + e._id}
                        >
                          {" "}
                          <div className="viewjob">
                            View Job <BsArrowRight />
                          </div>
                        </Link>
                      </div>
                      <p
                        className="random"
                        style={{
                          backgroundColor:
                            "#" +
                            Math.floor(Math.random() * 16777215).toString(16),
                          color: "white",
                        }}
                      >
                        {e.company_name.slice(0, 2).toUpperCase()}
                      </p>
                    </div>
</Link>
                  );
                })}
            </div>
          </div>
        </div>
    </div>
  );
}

export default SearchSkill;
