import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Landing from './Landing.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from './Signin.jsx'
import UploadPage from './Upload.jsx'
import DownloadPage from './Download.jsx'
import ChatPage from './vchat.jsx'
import MeetPage from './Meet.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Signin' element={<SignIn />} />
        <Route path='/Upload' element={<UploadPage />} />
        <Route path='/Download' element={<DownloadPage />} />
        <Route path='/Chat' element={<ChatPage />} />
        <Route path='/Meet' element={<MeetPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
