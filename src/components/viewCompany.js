import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyJobs, getOneCompany } from "../redux/slices/dataSlice";
import { Link, useMatches } from "react-router-dom";
import Header from "./header";
import "../styles/home.scss"
import { BsBookmark,BsArrowRight } from "react-icons/bs";
const ViewCompany = () => {
  const company = useSelector((state) => state.User.value.company);
  const companyJobs = useSelector((state) => state.User.value.companyJobs);
  const dispatch = useDispatch();
  const params = useMatches();
 
  useEffect(() => {
    dispatch(getOneCompany({ cid: params[0].params.cid }));
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="d-flex justify-content-between pt-3">
          <div>i-Follow / {company._id && company.company_name}</div>
          <div style={{ cursor: "pointer" }}>
            <BsBookmark />{" "}
            <span className="text-decoration-underline">Follow</span>
          </div>
        </div>
        <div className="h2">{company && company.company_name}</div>

        <h3>About Company</h3>
        <div className="card-profile">
          <p>
            {company.company_name &&
              company.company_name.slice(0, 2).toUpperCase()}
          </p>
          <div>{<div>{company && company.company_name}</div>}</div>
          <div>
            <span>View Company </span>
          </div>
        </div>
        <div
          style={{ backgroundColor: "rgb(244,179,74)" }}
          className="d-flex justify-content-evenly align-items p-2"
        >
          <div
            className=""
            style={{ fontSize: "1.1rem", fontWeight: "600", cursor: "pointer" }}
          >
            Home{" "}
          </div>
          <div
            style={{ fontSize: "1.1rem", fontWeight: "600", cursor: "pointer" }}
          >
            About
          </div>
          <div
            onClick={() =>
              dispatch(getCompanyJobs({ cid: params[0].params.cid }))
            }
            style={{ fontSize: "1.1rem", fontWeight: "600", cursor: "pointer" }}
          >
            Jobs
          </div>
        </div>
      </div>
      <div className="homePage-container">
         <div className="homePage-cards-container container">
            {companyJobs &&
              companyJobs.map((e) => {
                return (
                  <div className="card-container">
                    <div className="card-container-01">
                      <div>
                        <h5>{e.value.title}</h5>
                        <h5 className="text-secondary ">{e.value.company_name}</h5>
                        <div>
                          <label className="h6">Role :</label>
                          <span>{e.value.role}</span>
                        </div>
                        <div>
                          <label className="h6">Functional Area : </label>
                          <span>{e.value.functionalarea}</span>
                        </div>
                        <div>
                          <label className="h6">States/Cities :</label>
                          <span>{e.value.States}</span>
                        </div>
                        <div>
                          <label className="h6">Employment Type :</label>
                          <span>{e.value.employmenttype}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="h6">Skills :</label>
                      <div className="d-flex" style={{ columnGap: "0.3rem" }}>
                        {e.value.skills &&
                          e.value.skills.split(",").map((i) => {
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
                          {e.value.experience}
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: "0.7rem",
                            padding: "0 0.2rem 0 0.2rem",
                          }}
                        >
                          {e.value.salary && e.value.salary == "" ? (
                            <span className="bg-white"></span>
                          ) : (
                            <span className="bg-secondary text-white rounded-pill">
                              {" "}
                              {e.value.salary}
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
                      <p>{ e.value.company_name && e.value.company_name.slice(0, 2).toUpperCase()}</p>
                    </div>
                    <Link to={"/viewJOb/" + e._id}>
                      {" "}
                      <div className="viewjob">
                        view job <BsArrowRight />
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
      </div>
     
    </div>
  );
};

export default ViewCompany;
