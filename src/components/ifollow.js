import React, { useEffect } from "react";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanies,getUserFollowedCompany } from "../redux/slices/dataSlice";
import { Link, useMatches, useParams } from "react-router-dom";
import "../styles/home.scss"
import { FaArrowRight } from "react-icons/fa";
import {BsInstagram} from "react-icons/bs"
import { FaArrowRightLong } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import "../styles/ifollow.scss"
function Ifollow() {
    const dispatch = useDispatch();
    const companyData = useSelector((state) => state.User.value.companyData);
    const getcompstate = useSelector((state)=>state.User.value.getfollowedcompany);
    console.log(getcompstate);

    const userId = localStorage.getItem("userId");

    useEffect(() => {
       dispatch(getAllCompanies())
       dispatch(getUserFollowedCompany({userId:userId}))
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
        <div style={{display : "grid",gridTemplateColumns: "repeat(2,1fr)" }} className=" container bg-light pt-2  gap-5"  >
          {
            getcompstate.length &&
            getcompstate.map((e)=>{
              return(
                <div className="  border p-2  shadow  mb-2 bg-body rounded ">
                <div className="d-flex justify-content-start ">
                <div style={{}}>
                    <p style={{backgroundColor:"#"+Math.floor(Math.random()*16777215).toString(16),
                    width:"3rem",height:"3rem",border:"1px solid", borderRadius:"50%"
                    , display:"flex",justifyContent:"center",alignItems:"center"
                    }}>
                      {e.value.company_name.slice(0, 2).toUpperCase()}
                      </p>
                  </div>
                  
                  <div >
                  <div className="ms-2"><b>{e.value.company_name}</b></div>
                 <div className="ms-2">{e.value.email}</div>
                  </div>
                </div>
                 <div style={{display:"flex",alignItems:"center",justifyContent:"end" ,}}>
                   <Link to={"/viewCompany/" + e.value._id } style={{color:"black"}} >
                     view Company <FaArrowRight />
                   </Link>
                 </div>
               </div>
              )
            })
          }
        </div>
        
        <div className="h3 pt-3 pb-2">Browse Companies</div>
        <div style={{display : "grid",gridTemplateColumns: "repeat(3,1fr)" }} className=" container bg-light pt-2  gap-2">
        {
              companyData && companyData.map((e)=>{
                return(
                  <div className="  border p-2  shadow  mb-3 bg-body rounded ">
                   <div className="d-flex justify-content-start ">
                   <div style={{}} className="card-profile pt-1 ">
                    <p style={{backgroundColor:"#"+Math.floor(Math.random()*16777215).toString(16),
                       width:"3rem",height:"3rem",border:"1px solid", borderRadius:"50%"
                       , display:"flex",justifyContent:"center",alignItems:"center"
                     }}>
                    {e.company_name.slice(0, 2).toUpperCase()}
                    </p>
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
      <div className="footter">
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
                <img className="playstore" src="https://codezo.s3.amazonaws.com/static/img/google-play-download.png" />
            </div>
            </div>
    </div>
  );
}

export default Ifollow;
