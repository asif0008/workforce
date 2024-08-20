import React from "react";
import Aside from "../../components/layout/aside/Aside";
import Header from "../../components/layout/header/Header";
import Main from "../../components/layout/main/Main";

const User = () => {
  return (
    <section className="w-full relative user-dashboard p-4 h-screen overflow-x-hidden overflow-y-scroll bg-[#f5f7fb] z-[0]">
      <div className="flex flex-col-2 gap-4">
        <div className="hidden xl:block">
          <Aside />
        </div>
        <div className="w-[100%]">
          <Header />
          <Main />
        </div>
      </div>
    </section>
  );
};

export default User;
