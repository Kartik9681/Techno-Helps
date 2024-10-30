import React from 'react'

import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useTokenContext } from '../context/TokenContext';

const Logout = () => {
  const { LogoutUser } = useTokenContext();
  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);

  return <Navigate to="/login" />;
};

export default Logout
