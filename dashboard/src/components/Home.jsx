import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const backendPort = import.meta.env.VITE_BACKEND_PORT;
  const frontendPort = import.meta.env.VITE_FRONTEND_PORT;
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("ZU");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        // NOTE: Redirecting to a different application on a different port (from 3001 to 3000).
        // We must use window.location.href for this, not the react-router navigate function.
        window.location.href = `${backendPort}/login`;
        return;
      }
      try {
        // The axios call correctly points to your backend server at http://localhost:3002.
        const { data } = await axios.post(
          `${backendPort}`,
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        setUsername(user);

        if (!status) {
          removeCookie("token");
          // NOTE: If verification fails, redirect to the login page on the frontend application.
          window.location.href = `${backendPort}/login`;
        } else {
            toast(`Hello ${user}`, {
                position: "top-right",
            });
        }
      } catch (error) {
          removeCookie("token");
          // NOTE: If there's an error, redirect to the login page on the frontend application.
          window.location.href = `${backendPort}/login`;
      }
    };
    verifyCookie();
    // NOTE: navigate is removed from the dependency array.
  }, [cookies, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    // NOTE: On logout, redirect to the signup page on the frontend application (port 3000).
    window.location.href = `${frontendPort}/signup`;
  };
  if(username === undefined) {
    setUsername("ZU");
  }
  return (
    <>
      <TopBar onClickLogout={Logout} userName={username} />
      <Dashboard userName={username}/>
    </>
  );
}

