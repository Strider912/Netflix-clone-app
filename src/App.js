import React, { useEffect } from 'react'
import Login from './Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  Homescreen  from './Homescreen'
import  Profile from './Profile'
import  { auth }  from './Firebase'
import { useDispatch, useSelector } from 'react-redux'
import { logout,login, selectuser } from './features/counter/userSlice'

const App = () => {

  const dispatch = useDispatch()
  const user = useSelector(selectuser)
  useEffect(() => {

     const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email,
        }))

      }else{
        dispatch(logout())
      }
    })
    return unsubscribe
  }, [])

  return (

  <Router>
  { 
    !user ? ( <Login /> ) :
    (
   
    <Switch>
      <Route exact path="/" >
      <Homescreen  />
      </Route>
      <Route exact path="/profile" >
      <Profile />
      </Route>
    </Switch>
    )}
  </Router>


  )
}

export default App


