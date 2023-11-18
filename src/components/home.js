import { useEffect, useState } from "react";
import "../styles/home.scss";
import {BsArrowRight} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../redux/slices/dataSlice";
import Header from "./header";

export default function Home() {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const jobData = useSelector((state) => state.User.value.jobData);
  const navigate = useNavigate();
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
  return (
    <div className="homePage-container">
     <Header/>
      <div className="homePage-cards-container container bg-light  ">
        {jobData &&
          jobData.map((e) => {
            return (
              <div className="card-container  shadow p-1 mb-2 bg-body rounded ">
                <div className="card-container-01 ">
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
                  <div className="d-flex" style={{ columnGap: "0.3rem" }}>
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
                    <p>{e.company_name.slice(0, 2).toUpperCase()}</p>
                  </div>
                 <Link to={"/viewJOb/" + e._id}> <div className="viewjob">view job <BsArrowRight/></div></Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
