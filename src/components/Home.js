import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return <div>{user?.email && <span>Welcome {user.email}</span>}</div>;
};

export default Home;
