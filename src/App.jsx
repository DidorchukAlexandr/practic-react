import { BrowserRouter } from "react-router-dom";
import "./shared/styles/styles.scss";
import UserRoutes from "UserRoutes";
import Navbar from "components/modules/Navbar/Navbar";




// import Vote from "./modules/Vote/Vote";
//import Timer from "./modules/Timer/Timer"; 
// import PostsSearch from "./modules/PostsSearch/PostsSearch";
// import Posts from "./modules/PostsSearch/Posts/Posts";



export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
   
  );
};
