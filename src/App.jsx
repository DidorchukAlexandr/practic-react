import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import UserRoutes from "UserRoutes";
import Navbar from "components/modules/Navbar/Navbar";
import { Provider } from "react-redux";
import AuthLayout from "components/modules/AuthLayout/AuthLayout";
import { store, persistor } from "./redux/store";
import "./shared/styles/styles.scss";
 const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
           <BrowserRouter>
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
       </AuthLayout>
      </PersistGate>
    </Provider>
   
  )
}

export default App;