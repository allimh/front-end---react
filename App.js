// Adjust the path if necessary
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Header from './AboutPage/Header';
import AboutPage from './AboutPage/AboutPage';
import RecipePage from './RecipePage/RecipePage'; 
import Dashboard from './Home';
import Profile from './Profile';
import Home from './Dashboard';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignOut = () => {
    // Sign out logic here
    setIsLoggedIn(false);
  };

  // Example sign-in logic that sets isLoggedIn to true
  // This should be replaced with the actual sign-in mechanism
  const handleSignIn = () => {
    // Sign in logic here
    setIsLoggedIn(true);
  };

  // These need to be replaced 
  const recipeName = "my recipe!!";
  const ingredients = ['2 eggs', '1 cup sugar', '1 cup flour', '1 tsp baking powder'];

// 3 components:
// Header - just need to create login and sign out comps
// RecipePage - good to go - pass the props - css updates
// AboutPage - good to go - css updates


  return (
    <Router>
      <div className="App">
      <Header isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} />
        <Routes> 
          // Must handle correct path name - might be different
          <Route path ="/profile" element = {<Profile></Profile>}/>
          <Route path ="/dashboard" element = {<Dashboard></Dashboard>}/>
          <Route path="/home" element= {<Home/>}/>
          <Route path="/about" element= {<AboutPage/>}/>
          <Route path="/recipe" element = {<RecipePage recipeName = {recipeName} ingredients={ingredients}/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

/*
Code to nagigate to a path:


Redirect component:
Home button:
    const history = useHistory();
    const navigateHome = () => {
      history.push('/path');
    };
    return {
      <button className="home-button" onClick={navigateHome}>Home</button>
    };
*/

export default App;
