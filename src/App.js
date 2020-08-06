import React, { useState } from 'react';
import './App.css';
import { authorise } from './api';
import { Login } from './Components/Login/Login';
import { MainArea } from './Components/MainArea/MainArea';


function App() {

    const [isAuthorised, setAuthorisation] = useState(false);
    const [userData, setUserData] = useState({})

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


