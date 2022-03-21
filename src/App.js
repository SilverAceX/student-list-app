import "./App.css";
import React, { useState } from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import { StudentList } from "./StudentList/StudentList";
import { StudentPosts } from "./StudentPosts/StudentPosts";

export function App() {
  console.log("App rendered");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="App">
      <LoginForm
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        setIsAdmin={setIsAdmin}
      />

      <StudentList/>
      
      <StudentPosts isAdmin={isAdmin}/>
    </div>
  );
}
