import React from "react";
import { Provider} from "react-redux";
import store  from "./redux/store";
import {Route, Routes} from "react-router-dom"
import ResultsPresenter from "./presenter/ResultsPresenter";
import StartPresenter from "./presenter/StartPresenter";
import LoginPresenter from "./presenter/LoginPresenter";
import ProtectedRoute from "./components/ProtectedRoute";

  
  const App = () => {
    return (
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<StartPresenter />} />
          <Route path="/results" element={<ProtectedRoute><ResultsPresenter /></ProtectedRoute>} />
          <Route path="/login" element={<LoginPresenter />} />
        </Routes>
      </Provider>
    );
  };
  
  export default App;