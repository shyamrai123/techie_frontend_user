import React, { useEffect } from 'react'
 import { getSaveJob } from '../redux/slices/dataSlice'
import { useDispatch, useSelector } from 'react-redux'


const SaveJob = () => {

  const saveJobState = useSelector((state)=>state.User.value.getsaveJob);
  const dispatch = useDispatch();
  console.log(saveJobState);
   
  useEffect(()=>{
    dispatch(getSaveJob())
  },[])
  return (
    <div>SaveJob</div>
  )
}

export default SaveJob