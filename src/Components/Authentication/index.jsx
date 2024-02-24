import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const checkAuthentication = async () => {
        const username = localStorage.getItem('username');
        if (!username) {
          navigate('/login');
          return;
        }

        try {
          const response = await axios.post('https://seigei-api.onrender.com/check-auth', { username });
          setIsAuthenticated(response.data.isAuthenticated);
        } catch (error) {
          console.error(error);
        }
      };

      checkAuthentication();
    }, [navigate]);

    if (isAuthenticated === null) {
      return <div>Loading...</div>;  // Or your custom loading component
    }

    if (!isAuthenticated) {
      navigate('/login');
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;