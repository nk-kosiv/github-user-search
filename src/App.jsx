import React from "react";
import "./index.scss";
import SearchBlock from "./components/SearchBlock";
import Header from "./components/Header";
import UserInfoBlock from "./components/UserInfoBlock";

const App = () => {
  return (
    <main className="mainContainer">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <SearchBlock />
        <UserInfoBlock />
      </div>
    </main>
  );
};

export default App;
