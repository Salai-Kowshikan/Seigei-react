import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Landing from './pages/Landing/Landing.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from './pages/Signin/Signin.jsx'
import UploadPage from './pages/Interpreter/Upload.jsx'
import DownloadPage from './pages/Interpreter/Download.jsx'
import ChatPage from './pages/Meet/vchat.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Signin' element={<SignIn />} />
        <Route path='/Upload' element={<UploadPage />} />
        <Route path='/Download' element={<DownloadPage />} />
        <Route path='/Chat' element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
