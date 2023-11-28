import React, { useEffect, useState } from 'react'
import { serchAllJobs } from '../redux/slices/dataSlice'
import { useDispatch, useSelector } from 'react-redux'

function Filter() {
    const filterJob = useSelector((state)=>state.User.value.searchData);
    const dispatch = useDispatch()
   
    const [filterData, setFilterData] = useState("");




    useEffect(()=>{
         dispatch(serchAllJobs());
    },[])

    const handlefilter = (res)=>{
        const filterjobData = filterJob.filter((job)=>{
            job.company_name && 
            job.company_name.toLowerCase().includes(res.toLowerCase());
       
            dispatch(setFilterData(filterjobData))
        })
    
    }

    console.log(filterData);

  return (
    <div>
        <div>
            <div>
                {
                <div>{filterData}</div>
                }
            </div>
            <input onChange={(e)=>setFilterData(e.target.value)}
              value={filterData}
            />
        </div>
          <button onClick={handlefilter}>
             search
          </button> 
    </div>
  )
}

export default Filter