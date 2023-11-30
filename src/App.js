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
import CreatePost from "./pages/create-post";
import PostPage from "./pages/post-page";

function App() {
  return (

    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<IndexPage />}/>
          <Route path={'/login'} element={ <LoginPage />} />  
          <Route path={'/register'} element={ <RegisterPage />} />
          <Route path={'/create'} element={ <CreatePost/>}/>
          <Route path={'/post/:id'} element={<PostPage/>} />
        </Route>
      </Routes>
    </UserContextProvider>
    
  );
}

export default App;
