// External dependencies
import React from "react";

// Internal dependencies
import { useSelector } from "react-redux";
import SearchBlock from "./components/SearchBlock";
import Header from "./components/Header";
import UserInfoBlock from "./components/UserInfoBlock";
import "./index.scss";

const App = () => {
  const isInfoBlockOpen = useSelector((state) => state.infoModal.isOpen);
  return (
    <main className="mainContainer">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <SearchBlock />
        {isInfoBlockOpen && <UserInfoBlock />}
      </div>
    </main>
  );
};

export default App;
