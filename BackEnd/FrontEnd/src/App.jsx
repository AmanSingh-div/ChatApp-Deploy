import React from 'react'
import Left from './home/leftPart/left'
import Right from './home/rightPart/Right'
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from './context/AuthProvider'
import { Navigate, Route, Routes } from "react-router-dom"
import {Toaster} from "react-hot-toast"

function App() {
  const [authUser,setAuthUser]=useAuth()
    console.log(authUser);

  return (
    

    <>
    <Routes>
      <Route path='/'
      element={authUser ? 
        (<div className="flex h-screen"> 
          <Left/>
          <Right/>
        </div>)
        : (<Navigate to={"/login"}/>)
      }
      />
      <Route path='/signup' element={authUser ? <Navigate to="/"/>:<Signup/>}/>
      <Route path='/login' element={authUser ? <Navigate to="/"/>:<Login/>}/>
    </Routes>
    <Toaster/>
    </>

  )
}

export default App

