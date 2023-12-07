import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getAllJobs } from '../redux/slices/dataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Input ,FormGroup, Col, Link } from 'reactstrap'
import {BsArrowRight} from "react-icons/bs"
import { baseUrl } from '../utils/api'



const FilterRole = () => {


  const jobDetails = useSelector((state)=>state.User.value.jobData)
  console.log(jobDetails);
  const dispatch = useDispatch()

   const [jobData,setJObData] = useState([]);
   const [filtetApi, setFilterApi] = useState([]); 
  const [filter,setFilter] = useState("");

 
 const fetchData = async ()=>{
      const {data} = await axios.get(baseUrl+"/jobs/getAll");
      setJObData(data);
      // setFilterApi(data);
    
 }

 console.log(jobData);
 //  console.log(filtetApi);

 useEffect(()=>{
      fetchData();
      // dispatch(getAllJobs())
 },[]);


 
//  const filterchange = (e)=>{
//      const role = e.target.value;
//      const filterData = jobData.filter((job)=>job.role.toLowerCase().include(role.toLowerCase()));
//      setJObData(filterData);
//      setFilter(role)

//  }


  const filterchange = (e)=>{
       e.preventDefault();
     const role= e.target.value
    

    
    if(role == ""){
      setJObData(filtetApi);
    }

    else{
      const filterRole = jobData.filter((job)=>  job.role.toLowerCase().includes(role));     
      setJObData(filterRole)

    }
    setFilter(role);
  }

    
  return (
    <div>
          <div>
            <div style={{display:"flex",justifyContent:"center"}} >
            <input 
               onChange={(e)=>filterchange(e)}
               value={filter}
             
             />
   
            </div>
        

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
                  <p
                    style={{
                      backgroundColor:
                        "#" + Math.floor(Math.random() * 16777215).toString(16),
                      color: "white",
                    }}
                  >
                    {e.company_name.slice(0, 2).toUpperCase()}
                  </p>
                </div>
                {/* <Link >
                  {" "}
                  <div className="viewjob" style={{ color: "black" }}>
                    view job <BsArrowRight />
                  </div>
                </Link> */}
              </div>
            );
          })}
      </div>
          </div>

    </div>
  )
}

export default FilterRole
