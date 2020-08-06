import React, { useState } from 'react';
import './App.css';
import { authorise } from './api';
import { Login } from './Components/Login/Login';
import { MainArea } from './Components/MainArea/MainArea';


function App() {

    const [isAuthorised, setAuthorisation] = useState(true);
    const [userData, setUserData] = useState({
        id: 2,
        name: "Arnold",
        avatar: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3b22e58130541.5b29dea835a26.jpg",
        
    })

    const handleAuthorisation = (formValues) => {
  
        authorise().then(response => {
          const currentUser = response.find(user => {
            return formValues.email === user.loginData.email && formValues.password === user.loginData.password
          })
            if (currentUser) {                
                setUserData({
                  id: currentUser.id,
                  name: currentUser.name,
                  avatar: currentUser.avatar
                })
                setAuthorisation(true);
            } else {
                alert('Wrong email or password! Try again!')
            }
        })

    }

    return (
        <div className="App">
            {isAuthorised ? <MainArea userData={userData} logOut={() => {setAuthorisation(false)}}/> : <Login handleAuthorisation={handleAuthorisation} />}
        </div>
    );
}

export default App;


