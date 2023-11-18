import React, { useEffect } from "react";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanies } from "../redux/slices/dataSlice";
import { Link } from "react-router-dom";
import "../styles/home.scss"
import { FaArrowRight } from "react-icons/fa";

function Ifollow() {
    const dispatch = useDispatch();
    const companyData = useSelector((state) => state.User.value.companyData)
    useEffect(() => {
       dispatch(getAllCompanies())
    },[])
  return (
    <div>
      <Header />
      <div className="container">
        <div className="h2 pt-4 pb-2">i-Follow</div>
        <div style={{width:"100%"}} className="">
            <input className="w-100 p-2 " type="text"/>
        </div>
        <div className="h2 pt-4 pb-2">Companies Followed</div>
        
        <div className="h3 pt-4 pb-2">Browse Companies</div>
        <div style={{display : "grid",gridTemplateColumns: "repeat(3,1fr)" }} className=" container bg-light pt-3  gap-3">
        {
              companyData && companyData.map((e)=>{
                return(
                  <div className="  border p-4  shadow  mb-3 bg-body rounded ">
                   <div className="d-flex justify-content-start ">
                   <div 
                    style={{width:"2rem",height:"2rem", border:"1px solid red",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"0.5rem",backgroundColor:"blue"}}>
                    {e.company_name[0]}
                     </div>
                     <div >
                     <div className="ms-2"><b>{e.company_name}</b></div>
                    <div className="ms-2">{e.email}</div>
                     </div>
                   </div>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"end" ,}}>
                      <Link to={"/viewCompany/" + e._id } style={{color:"black"}} >
                        view Company <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                  
                )
              })
             }
        </div>
      </div>
    </div>
  );
}

export default Ifollow;
