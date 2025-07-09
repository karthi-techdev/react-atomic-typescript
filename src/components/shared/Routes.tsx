import { lazy } from 'react';
const Signin = lazy(() => import('../pages/auth/SignIn'));
const SignUp = lazy(() => import('../pages/auth/SignUp'));
const ResetPassword = lazy(() => import('../pages/auth/ResetPassword'));

export const routesData = () => {
    const Routes = [
        {
            path: "/",
            pageTitle: "SignUp",
            component: <SignUp />
        },
        {
            path: "/signin",
            pageTitle: "SignIn",
            component: <Signin />
        },
        {
            path: "/resetpassword",
            pageTitle: "Reset Password",
            component: <ResetPassword />
        },
    ];

    return Routes;
}