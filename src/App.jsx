import { BrowserRouter } from "react-router-dom";
import "./shared/styles/styles.scss";
import UserRoutes from "UserRoutes";
import Navbar from "components/modules/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";


 const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
    </Provider>
   
  )
}

export default App;