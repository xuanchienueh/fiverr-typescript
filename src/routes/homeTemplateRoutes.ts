import React, { lazy } from "react";
type homeTemplateRoute = {
  path: string;
  Element: React.FC;
};

const Home = lazy(() => import("pages/home/Home"));
const Login = lazy(() => import("pages/login/Login"));
const Register = lazy(() => import("pages/register/Register"));
const Profile = lazy(() => import("pages/profile/profile"));

export const homeTemplateRoutes: homeTemplateRoute[] = [
  { path: "", Element: Home },
  { path: "login", Element: Login },
  { path: "register", Element: Register },
  { path: "profile", Element: Profile },
];
