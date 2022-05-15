import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { AppContext } from "./contexts";
import { PrivateRoute, PublicRoute } from "./components";
import { useAppReducer } from "./reducers";
import { useLocalStorage } from "./hooks";
import ErrorBoundary from "./pages/ErrorBoundary";
import { appInitialState } from "./reducers/AppReducer";
import { Loader } from "./components";

// Public routes
const LoginPage = lazy(() => import("./pages/Login"));
const SignupPage = lazy(() => import("./pages/Signup"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

// Private routes
const CreateVideoPage = lazy(() => import("./pages/CreateVideo"));
const SavedVideosPage = lazy(() => import("./pages/SavedVideos"));
const ProfilePage = lazy(() => import("./pages/Profile"));
const BillingPage = lazy(() => import("./pages/Billing"));
const MyPlanPage = lazy(() => import("./pages/MyPlan"));

const App = () => {
  const [user] = useLocalStorage("loggedinUser") || {};
  const [state, dispatch] = useAppReducer({
    ...appInitialState,
    user,
    isLoggedIn: !!user,
  });
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AppContext.Provider value={{ ...state, dispatch }}>
          <Suspense fallback={<Loader />}>
            <Routes>
              {/* Public Routes - START */}
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
                path="/signup"
                element={
                  <PublicRoute>
                    <SignupPage />
                  </PublicRoute>
                }
              />
              {/* Public Routes - START */}

              {/* Private Routes - START */}
              <Route
                path="/create-video"
                element={
                  <PrivateRoute>
                    <CreateVideoPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/saved-videos"
                element={
                  <PrivateRoute>
                    <SavedVideosPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <ProfilePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/billing"
                element={
                  <PrivateRoute>
                    <BillingPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/my-plan"
                element={
                  <PrivateRoute>
                    <MyPlanPage />
                  </PrivateRoute>
                }
              />
              {/* Public Routes - START */}
            </Routes>
          </Suspense>
        </AppContext.Provider>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
