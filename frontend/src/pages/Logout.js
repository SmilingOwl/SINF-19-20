import React from 'react';
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

function Logout() {
    const { setAuthTokens } = useAuth();

    setAuthTokens(null);

    return <Redirect to="/" />;
}

export default Logout;