import React from "react";
import "./index.scss";
import SearchBlock from "./components/SearchBlock";
import Header from "./components/Header";
import UserInfoBlock from "./components/UserInfoBlock";

const App = () => {
  return (
    <main className="mainContainer">
      <Header />
      <SearchBlock />
      <UserInfoBlock />
    </main>
  );
};

export default App;
