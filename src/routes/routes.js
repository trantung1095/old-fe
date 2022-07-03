import React from 'react';
import config from "@/config";

const Home = React.lazy(() => import('@/pages/Home'))
const Login = React.lazy(() => import('@/pages/Login'))
const Register = React.lazy(() => import('@/pages/Register'))

const publicRoutes = [
    { path: config.routes.home, component: Home},
    { path: config.routes.login, component: Login},
    { path: config.routes.register, component: Register}
]

const privateRoutes = []

export { publicRoutes, privateRoutes}