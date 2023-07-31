import Home from "../components/Home";
import Login from "../components/Login";
import { useAuth } from "../contexts/auth";

export default function startcode() {

  const {user} = useAuth();
  return (
    <>
      {user ? <Home /> : <Login />}
    </>
  );
}
