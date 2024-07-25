import React from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "src/app/contexts/auth-context";

export function Logout() {
  const navigate = useNavigate();
  const {setAuthData} = React.useContext(AuthContext)

  React.useEffect(() => {
    setAuthData(null)
    navigate('/login')
  }, [])

    return <section>Login out...</section>;
  }