import {Outlet, Navigate, Route, Routes, useLocation} from 'react-router-dom'
import { useState } from 'react'
import {Navbar, Footer} from './components'
import {FindJobs,Companies,CompanyProfile, UploadJob, UserProfile, JobDetails, About, AuthPage} from './pages/index'


const Layout = () =>{
  const user = {};
  const location = useLocation();

  return user ? <Outlet/> : <Navigate to='user-auth' state={{from: location}} replace/>
}

const App=()=>{
  const user = {};
  return (
    <>
      <main>
        <Navbar/>
        <Routes>
          <Route element={<Layout/>}>
            <Route element={<Navigate to='/find-jobs' replace={true}/>}/>
            <Route path='/find-jobs' element={<FindJobs/>}/>
            <Route path='/companies' element={<Companies/>}/>
            <Route path={user?.user?.accountType === "seeker" ? "/user-profile":"/user-profile/:id"} element={<UserProfile/>} />
            <Route path='/company-profile' element={<CompanyProfile/>}/>
            <Route path='/company-profile/:id' element={<CompanyProfile/>}/>
            <Route path='/upload-job' element={<UploadJob/>}/>
            <Route path='/upload-job/:id' element={<JobDetails/>}/>

          </Route>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/user-auth' element={<AuthPage/>}/>
        </Routes>
        {user && <Footer/>}
      </main>
    </>
  )
}

export default App
