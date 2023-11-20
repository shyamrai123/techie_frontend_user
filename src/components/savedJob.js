import React, { useEffect } from 'react'
 import { getSavedJob } from '../redux/slices/dataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import Header from './header';
import {BsArrowRight} from "react-icons/bs"



const SavedJob = () => {

  const saveJobState = useSelector((state)=>state.User.value.getSavedJob);
  const dispatch = useDispatch();
  const params = useParams();
  console.log(saveJobState);

  console.log(params);
   
  useEffect(()=>{
    dispatch(getSavedJob(params))
  },[])
  return (
    <div className="homePage-container">
    <Header/>
     <div className="homePage-cards-container container bg-light  ">
       {saveJobState.length &&
         saveJobState.map((e) => {
          console.log(e);
           return (
             <div className="card-container  shadow p-1 mb-2 bg-body rounded ">
               <div className="card-container-01 ">
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
                     {e.value.openings}
                   </span>
                 </div>
               </div>
               <div className="card-profile">
                   <p>{e.value.company_name.slice(0, 2).toUpperCase()}</p>
                 </div>
                <Link to={"/viewJOb/" + e.value._id}> <div className="viewjob">view job <BsArrowRight/></div></Link>
             </div>
           );
         })}
     </div>
   </div>  
  )
}

export default SavedJob