import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { AppContext } from "./contexts";
import { PrivateRoute, PublicRoute } from "./components";
import { useAppReducer } from "./reducers";
import ErrorBoundary from "./pages/ErrorBoundary";

const LoginPage = lazy(() => import("./pages/Login"));
const CreateVideoPage = lazy(() => import("./pages/CreateVideo"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

const App = () => {
  const [state, dispatch] = useAppReducer();
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AppContext.Provider value={{ ...state, dispatch }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<Navigate to="/login" />} />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/create-video"
                element={
                  <PrivateRoute>
                    <CreateVideoPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </AppContext.Provider>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
