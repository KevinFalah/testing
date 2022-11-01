import Cookies from "js-cookie";
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import HomeDua from "./HomeDua";
import Layout from "./Layout";

function App() {
  const PrivateRoute = ({ isLogged }) => {
    return isLogged ? <Outlet /> : <Navigate to="/home" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <Layout>
              <HomeDua />
            </Layout>
          }
        />

        <Route element={<PrivateRoute isLogged={Cookies.get('token') !== undefined} />}>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
