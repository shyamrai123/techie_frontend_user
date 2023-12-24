import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followCompany,
  getCompanyJobs,
  getOneCompany,
} from "../redux/slices/dataSlice";
import { Link, useMatches, useNavigate, useParams } from "react-router-dom";

import Header from "./header";
import "../styles/home.scss";
import "../styles/viewCompany.scss";

import { BsBookmark, BsArrowRight } from "react-icons/bs";
import { verifyToken } from "../utils/utlis";
import Footer from "./footer";
import Navigationpanel from "./navigationpanel";
const ViewCompany = () => {
  const company = useSelector((state) => state.User.value.company);
  console.log(company);
  console.log(company.about?.split(",")[0]);
  const companyJobs = useSelector((state) => state.User.value.companyJobs);
  const [aboutCompanyArr, setAboutCompanyArr] = useState([]);
  const dispatch = useDispatch();
  const params = useMatches();
  const [open123, setOpen123] = useState({
    open1: true,
    open2: false,
    open3: false,
  });
  const params1 = useParams();

  const handleFollow = () => {
    dispatch(followCompany(params1));
  };
  const handleClick2 = () => {
    setOpen123({ ...open123, open2: true, open1: false, open3: false });
  };
  const handleClick3 = () => {
    dispatch(getCompanyJobs({ cid: params[0].params.cid }));
    const { about } = company;
    setAboutCompanyArr(about);
    setOpen123({ ...open123, open1: true, open2: false, open3: false });

    console.log(aboutCompanyArr);
    setOpen123({ ...open123, open2: false, open1: false, open3: true });
  };
  const handleClick4 = () => {
    setOpen123({ ...open123, open2: false, open1: true, open3: false });
  };
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    if (!verifyToken(email, userId, token)) {
      navigate("/login");
      window.location.reload();
    }
  }, [token]);

  useEffect(() => {
    dispatch(getOneCompany(params1));
  }, []);

  return (
    <div className="viewcompany">
      <Header />

      <div className="ifollowcomp-follow  container ">
        <div className="ifollowcomp-text  ">
          i-Follow / {company._id && company.company_name}
        </div>
        <div style={{ cursor: "pointer" }}>
          <BsBookmark />{" "}
          <span onClick={handleFollow} className="text-decoration-solid">
            Follow
          </span>
        </div>
      </div>

      <div className="company-name  container ">
        {company && company.company_name} , {company && company.location}
      </div>

        <div className="viewcompany-details-outer">
        <div className="viewcompany-details  container  borde shadow ">
        <div className="viewcompany-profile">
          <div>
            <p
              className="random"
              style={{
                backgroundColor:
                  "#" + Math.floor(Math.random() * 16777215).toString(16),
              }}
            >
              {company.company_name &&
                company.company_name.slice(0, 2).toUpperCase()}
            </p>
          </div>
          <div>
            <div className="compname">
              <b>{company && company.company_name}</b>
            </div>
            <div className="companyloc">{company && company.location}</div>
          </div>
        </div>
      </div>
        </div>

        <div className="viewcompany-deatils-btn-outer">
        <div className="viewcompany-deatils-btn  border shadow container ">
        <div className="viewcompany-deatils-btn-inner">
          <div className="hom" onClick={handleClick4}>
            Home
          </div>
          <div className="abt" onClick={handleClick3}>
            About
          </div>
          <div className="jobss" onClick={handleClick2}>
            Jobs
          </div>
        </div>
      </div>
        </div>

      <div className=" viewcompany-home  container ">
        {" "}
        {open123.open1 && <p>No posts published by the company!</p>}
      </div>
      <div className="jobs-container-main  container">
        <div className=" jobs-container-inner">
          <div className="jobs-container">
            {open123.open2 &&
              companyJobs &&
              companyJobs?.map((e) => {
                console.log(e?.value);
                return (
                  <div className="jobs-single shadow border container ">
                    <div>
                      {" "}
                      <div className="card-1">
                        <div>
                          <h5 className="title">{e?.title}</h5>
                          <h5 className=" h5 text-secondary">
                            {e?.company_name}
                          </h5>
                          <div>
                            <label className="h6">Role :</label>
                            <span>{e?.role}</span>
                          </div>
                          <div>
                            <label className="h6">Functional Area : </label>
                            <span>{e?.functionalarea}</span>
                          </div>
                          <div>
                            <label className="h6">States/Cities :</label>
                            <span>{e?.States}</span>
                          </div>
                          <div>
                            <label className="h6">Employment Type :</label>
                            <span>{e?.employmenttype}</span>
                          </div>
                        </div>

                        <div>
                          <label className="h6">Skills :</label>
                          <div className="skills container">
                            {e?.skills &&
                              e?.skills.split(",").map((i) => {
                                return (
                                  <div>
                                    <Link to={"/searchSkill/" + i}>
                                      <span className="skills-text bg-secondary">
                                        {i}
                                      </span>
                                    </Link>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                        <div className="d-flex flex-wrap gap-1 container   hirings">
                          <div>
                            <span className="hiring-01 text-success border border-success rounded-pill">
                              HIRING
                            </span>
                          </div>
                          <div>
                            <span className=" hiring-01 bg-secondary text-white rounded-pill">
                              {e?.experience}
                            </span>
                          </div>
                          <div>
                            <span className="hiring-01">
                              {e?.salary && e?.salary == "" ? (
                                <span className="bg-white"></span>
                              ) : (
                                <span className="bg-secondary text-white rounded-pill">
                                  {e?.salary}
                                </span>
                              )}
                            </span>
                          </div>
                          <div>
                            <span className=" hiring-01 bg-secondary text-white rounded-pill">
                              {e?.openings}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-2">
                      <Link className="view-job-link" to={"/viewJOb/" + e?._id}>
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
                      {e?.company_name.slice(0, 2).toUpperCase()}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div>
        <div>
          {open123.open3 && (
            <div className="viewcompany-about container ">
              <div className=" viewcompany-about-inner container border shadow">
                <div>
                  <p>{aboutCompanyArr}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <Navigationpanel />
    </div>
  );
};

export default ViewCompany;
