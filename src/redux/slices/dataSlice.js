import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/api";

const dataSlice = createSlice({
  name: "users",
  initialState: {
    value: {
      jobDetails: [],
      companyDetails : [],
      register: [],
      login: [],
      allUsers: [],
      jobData: [],
      companyData : [],
      deleteJob: [],
      deleteUser: [],
      deleteCompany: [],
      userDetails: {},
      update: {},
      upload: {},
      getJobDetails : {},
      company: {},
      companyJobs : [],
      postSaveJob :{},
      getSavedJob:[],
      followcompany:{} ,
      getfollowedcompany:[],
      searchData  : []
      
      
    },
  },

  reducers: {
     handleSearch  :(state,action)=>{
      state.value.searchData  = action.payload;
     }
  },

  extraReducers: (builder) => {
    builder.addCase(postData.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value.jobDetails = action.payload;
    });

    builder.addCase(postData.rejected, (state, action) => {
      state.error = action.error;
    });

    builder.addCase(getAllJobs.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value.jobData = action.payload;
    });

    builder.addCase(getAllJobs.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(RegisterUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value.register = action.payload;
    });

    builder.addCase(RegisterUser.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.value.login = action.payload;
      localStorage.clear();

      const loginDetails = action.payload;
      const keysArr = Object.keys(loginDetails);
      keysArr.forEach((e) => localStorage.setItem(e, loginDetails[e]));
    });

    builder.addCase(LoginUser.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.value.allUsers = action.payload;
    });

    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.value.userDetails = action.payload;
    });

    builder.addCase(getUser.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.value.update = action.payload;
    });

    builder.addCase(updateUser.rejected, (state, action) => {
      state.error = action.error;
    });

    builder.addCase(uploadImage.fulfilled, (state, action) => {
      state.value.upload = action.payload;
    });

    builder.addCase(uploadImage.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(deleteJob.fulfilled, (state, action) => {
      state.value.deleteJob = action.payload;
    });

    builder.addCase(deleteJob.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(getAllCompanies.fulfilled, (state, action) => {
      state.value.companyData = action.payload;
    });

    builder.addCase(getAllCompanies.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(deleteCompany.fulfilled, (state, action) => {
      state.value.deleteCompany = action.payload;
    });

    builder.addCase(deleteCompany.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(postCompany.fulfilled, (state, action) => {
      state.value.companyDetails = action.payload;
    });

    builder.addCase(postCompany.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(getJob.fulfilled, (state, action) => {
      state.value.getJobDetails = action.payload;
    });

    builder.addCase(getJob.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(getOneCompany.fulfilled, (state, action) => {
      state.value.company = action.payload;
    });

    builder.addCase(getOneCompany.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(getCompanyJobs.fulfilled, (state, action) => {
      state.value.companyJobs = action.payload;
    });

    builder.addCase(getCompanyJobs.rejected, (state, action) => {
      state.error = action.error;
    });

    builder.addCase(postSaveJob.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value.postSaveJob = action.payload;
    });

    builder.addCase(postSaveJob.rejected, (state, action) => {
      state.error = action.error;
    });

    builder.addCase(getSavedJob.fulfilled, (state, action) => {
    //  console.log(action.payload);
      state.value.getSavedJob = action.payload;
    });

    builder.addCase(getSavedJob.rejected, (state, action) => {
      state.error = action.error;
    });

    builder.addCase(followCompany.fulfilled, (state, action) => {
      console.log(action.payload);
       state.value.followcompany = action.payload;
     });
 
     builder.addCase(followCompany.rejected, (state, action) => {
       state.error = action.error;
     });

     
    builder.addCase(getUserFollowedCompany.fulfilled, (state, action) => {
      console.log(action.payload);
       state.value.getfollowedcompany = action.payload;
     });
 
     builder.addCase(getUserFollowedCompany.rejected, (state, action) => {
       state.error = action.error;
     });


         
    builder.addCase(serchAllJobs.fulfilled, (state, action) => {
      console.log(action.payload);
       state.value.searchData = action.payload;
     });
 
     builder.addCase(serchAllJobs.rejected, (state, action) => {
       state.error = action.error;
     });


  },
});


export const postSaveJob = createAsyncThunk("postSaveJob", async ({userId,jobId}) => {

  const data = await axios.post(baseUrl +`/jobs/savejob/${jobId}`,userId,{
    headers: {
      Authorization: "Bearer "+localStorage.getItem("token")
    }
  }) 
  return data;
    
}); 



export const getSavedJob = createAsyncThunk("getSavedJob", async ({userId}) => {  
  
  const {data} = await axios.get(baseUrl +"/jobs/savedJobs/All/" + userId,{
  }) 
  return data;
    
});



export const followCompany  = createAsyncThunk("followCompany", async ({userId,companyId}) => {

  const {data} = await axios.post(baseUrl +`/company/followcompany/${companyId}`,userId,{
    headers: {
      Authorization: "Bearer "+ localStorage.getItem("token")
    }
  }) 
  return data;
    
}); 


export const getUserFollowedCompany  = createAsyncThunk("getfollowedCompany", async ({userId}) => {

  const {data} = await axios.get(baseUrl + "/company/getfollowedcompany/"+ userId ,{

  }) 
  return data;
    
});





export const postData = createAsyncThunk("postData", async (arg) => {
  const token = localStorage.getItem("token");
  const { data } = await axios.post(baseUrl + "/jobs/add", arg, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
});
export const getAllJobs = createAsyncThunk("getAllJObs", async (args) => {
  const { data } = await axios.get(baseUrl + "/jobs/getAll");
  return data;
});


export const serchAllJobs = createAsyncThunk("searchAllJObs", async (args) => {
  const { data } = await axios.get(baseUrl + "/jobs/getAll");
  return data;
});


export const deleteJob = createAsyncThunk("deleteJob", async ({ jobId }) => {
  console.log(jobId);
  const token = localStorage.getItem("token");
  const { data } = await axios.delete(baseUrl + "/jobs/delete/" + jobId, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
});
export const RegisterUser = createAsyncThunk("register", async (e) => {
  const { data } = await axios.post(baseUrl + "/users/register", e);
  return data;
});

export const LoginUser = createAsyncThunk("login", async (e) => {
  const { data } = await axios.post(baseUrl + "/users/login", e);
  return data;
});

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  const { data } = await axios.get(baseUrl + "/users/getAll");
  return data;
});

export const getUser = createAsyncThunk("getUser", async ({ userId }) => {
  const token = localStorage.getItem("token");

  const { data } = await axios.get(baseUrl + "/users/getUser/" + userId, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
});

export const updateUser = createAsyncThunk("updateUser", async (arg) => {
  console.log(arg);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const { data } = await axios.patch(
    baseUrl + "/users/updateUser/" + userId,
    arg
    // {
    // headers: {
    //   Authorization : "Bearer " + token
    // }
    // }
  );
  return data;
});
export const deleteUser = createAsyncThunk("deleteUser", async ({ userId }) => {
  console.log(userId);
  const token = localStorage.getItem("token");
  const { data } = await axios.delete(baseUrl + "/users/delete/" + userId, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
});

export const deleteCompany = createAsyncThunk("deleteCompany", async ({ cid }) => {
  console.log(cid);
  const token = localStorage.getItem("token");
  const { data } = await axios.delete(baseUrl + "/company/delete/" + cid, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
});

export const getOneCompany = createAsyncThunk("getCOmpany", async ({ cid }) => {
 
  const { data } = await axios.get(baseUrl + "/company/getCompany/" + cid);
  return data;
});
export const uploadImage = createAsyncThunk("cloudinary", async (arg) => {
  
  const { data } = await axios.post(
    "https://api.cloudinary.com/v1_1/dzeek4uww/image/upload",
    arg
  );
  return data;
});

export const getAllCompanies = createAsyncThunk("getAllCompanies", async() => {
  const {data} = await axios.get(baseUrl + "/company/getall")
  return data
})

export const getJob = createAsyncThunk("getCompany", async({jobId}) => {
  const {data} = await axios.get(baseUrl + "/jobs/get/" + jobId)
  return data
})

export const getCompanyJobs  = createAsyncThunk("getCompanyJobs", async({cid}) => {
  const {data} = await axios.get(baseUrl + "/company/getCompanyJobs/" + cid)
  return data
})


export const postCompany = createAsyncThunk("postCompany", async (arg) => {
  const token = localStorage.getItem("token");
  const { data } = await axios.post(baseUrl + "/company/add", arg, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
});

export default dataSlice.reducer;
export const{saveJob,handleSearch } = dataSlice.actions;
