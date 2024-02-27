import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "sonner";

const LoginCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [opacity, setOpacity] = useState(1);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            let response;
            if (isSignUp) {
                response = await axios.post('https://seigei-api.onrender.com/register', { name, email, password });
                if (response.data.success){
                    toast("Registration Successful! Please log in to continue.")
                    setIsSignUp(false);
                    setError('')
                } else {
                    toast(response.data.message)
                }
            } else {
                response = await axios.post('https://seigei-api.onrender.com/login', { email, password });
                if (response.data.success) {
                    toast("Login Successful!")
                    sessionStorage.setItem('username', response.data.primary_key);
                    navigate('/')
                } else {
                    toast(response.data.message)
                }
            }

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleToggleClick = () => {
        setOpacity(0);
        setTimeout(() => {
            setIsSignUp(!isSignUp);
            setName('');
            setConfirmPassword('');
            setOpacity(1);
        }, 200);
    };

    const handlePasswordBlur = () => {
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters');
        } else {
            setPasswordError('');
        }
    };

    const handleConfirmPasswordBlur = () => {
        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
        } else {
            setConfirmPasswordError('');
        }
    };

    return (
        <>
            <div className="login-card bg-accent rounded-lg mx-auto h-full flex flex-col max-w-md min-h-[60vh]" style={{ transition: 'opacity 200ms', opacity: opacity }}>
                <h2 className="bg-textc text-white my-0 rounded-t-lg py-6 text-center font-inter font-bold">{isSignUp ? 'Sign Up' : 'Log-In'}</h2>
                <form onSubmit={handleSubmit} className=' flex flex-col justify-around flex-grow'>
                    {isSignUp && (
                        <div className="pt-4 font-inter text-white font-bold px-6">
                            <label htmlFor="name" className='pr-4 pb-2'>Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                className='w-full bg-white text-textc border-none rounded-lg p-2'
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                    )}

                    <div className="rounded-lg p-2 pt-4 font-inter text-white font-bold px-6">
                        <label htmlFor="email" className='pr-4 pb-2'>Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            className='w-full bg-white text-textc border-none rounded-lg p-2'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="rounded-lg p-2 pt-4 font-inter text-white font-bold px-6">
                        <label htmlFor="password" className='pr-4 pb-2'>Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className='w-full bg-white text-textc border-none rounded-lg p-2'
                            onBlur={handlePasswordBlur}
                        />
                        {passwordError && <p>{passwordError}</p>}
                    </div>

                    {isSignUp && (
                        <div className="rounded-lg p-2 pt-4 font-inter text-white font-bold px-6">
                            <label htmlFor="confirmPassword" className='pr-4 pb-2'>Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                className='w-full bg-white text-textc border-none rounded-lg p-2'
                                onBlur={handleConfirmPasswordBlur}
                            />
                            {confirmPasswordError && <p>{confirmPasswordError}</p>}
                        </div>
                    )}

                    <div className="rounded-lg p-2 flex justify-center">
                        <button type="submit" className='border-none bg-textc rounded-lg w-[80%] text-white font-inter font-bold py-2 cursor-pointer'>{isSignUp ? 'Sign Up' : 'Log in'}</button>
                    </div>

                    <div className="rounded-lg p-2 flex justify-center">
                        <button type="button" onClick={handleToggleClick} className='border-none bg-textc rounded-lg w-[80%] text-white font-inter font-bold py-2 cursor-pointer'>
                            {isSignUp ? 'Already a user? Log in' : 'Sign Up for a New Account'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginCard;