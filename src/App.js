import logo from "./logo.svg";
import "./App.css";

import {Route, Routes} from "react-router-dom"
import {UserContextProvider} from "./component/UserContext";

import Post from "./component/Post";
import Header from "./component/Header";
import Layout from "./component/Layout";

import IndexPage from "./pages/index-page";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";

function App() {
  return (

    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<IndexPage />}/>
          <Route path={'/login'} element={ <LoginPage />} />  
          <Route path={'/register'} element={ <RegisterPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
    
  );
}

export default App;
