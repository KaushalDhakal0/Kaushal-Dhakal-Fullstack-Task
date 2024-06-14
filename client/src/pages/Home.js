import React, { useState } from 'react';
import LoginPage from '../components/Login';
import HomePage from '../components/HomePage';

const Home = () => {
    const [isloggedIn, setIsloggedIn] = useState(false);
    return ( 
        <div>
            {
                isloggedIn? <HomePage /> : <LoginPage />
            }
        </div>
     );
}
 
export default Home;