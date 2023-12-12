import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Landing from './Landing.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from './Signin.jsx'
import UploadPage from './Upload.jsx'
import DownloadPage from './Download.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Signin' element={<SignIn />} />
        <Route path='/Upload' element={<UploadPage />} />
        <Route path='/Download' element={<DownloadPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
