import { useEffect, useState } from "react";
import "../styles/home.scss";
import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllJobs } from "../redux/slices/dataSlice";
import Header from "./header";

export default function Home() {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [roles, setRoles] = useState({});
  const jobData = useSelector((state) => state.User.value.jobData);
  const [filtJobs, setFiltJobs] = useState([]);
  const [filterInp, setFilterInp] = useState("");
  const navigate = useNavigate();

  const filter = () => {
    const temp = jobData.map((e) => e.role.trim());
    const temp1 = new Set(temp);

    setRoles({ rolesArr: Array.from(temp1) });
    console.log(roles);
  };
  useEffect(() => {
    dispatch(getAllJobs());
    if (!token) {
      navigate("/login");
      window.location.reload();
    }
  }, [token]);
  return (
    <div className="" style={{ backgroundColor: "rgb(243,243,243)" }}>
      <Header />
      <div className=" filter " onClick={filter}>
        <div className="filter-select ">
          <div>Sort by :</div>
          <div>
            <select
              onChange={(e) => {
                if (e.target.value == "All") {
                  setFiltJobs(jobData.map((i) => i));
                  setOpen(true);
                } else {
                  setFiltJobs(jobData.filter((i) => i.role == e.target.value));
                  setOpen(true);
                }
              }}
            >
              <option value={"All"}>All</option>
              {roles.rolesArr &&
                roles.rolesArr.map((e) => {
                  return <option value={e}>{e}</option>;
                })}
            </select>
          </div>
        </div>
      </div>
      {open ? (
        <div className="card-container container">
          {filtJobs &&
            filtJobs.map((e) => {
              return (
                <div className="card shadow border container ">
                  <div>
                    <div className="card-1">
                      <div>
                        <h5 className="title">{e.title}</h5>
                        <h5 className=" h5 text-secondary">{e.company_name}</h5>
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
                        <div className="skills" style={{ columnGap: "0.1em" }}>
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
                    </div>
                  </div>
                  <div>
                    <div className="card-2">
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

                      <Link to={"/viewJOb/" + e._id}>
                        {" "}
                        <div className="viewjob">
                          View Job <BsArrowRight />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div className="card-container  container">
          {jobData &&
            jobData.map((e) => {
              return (
                <div className="card shadow border container ">
                  <div>
                    <div className="card-1">
                      <div>
                        <h5 className="title">{e.title}</h5>
                        <h5 className=" h5 text-secondary">{e.company_name}</h5>
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
                          style={{ columnGap: "0.1em" }}
                        >
                          {e.skills &&
                            e.skills.split(",").map((i) => {
                              return (
                                <div>
                                  <span className="skills-text bg-secondary">
                                    {i}
                                  </span>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      <div className="d-flex gap-1 container   ">
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
                    </div>
                  </div>
                  <div>
                    <div className="card-2">
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

                      <Link to={"/viewJOb/" + e._id}>
                        {" "}
                        <div className="viewjob">
                          View Job <BsArrowRight />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}

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
