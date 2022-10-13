import React from "react";
import Navbar from "../../components/navbar/Navbar";
import TodoList from "../../components/todoList/TodoList";

import "./home.css";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <TodoList />
    </div>
  );
}

export default Home;
