import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/logo/logo.png";
import { pages } from "./pages";
import ChevronIcon from "../../../assets/svgs/pagesIcons/ChevronIcon";
import { Link, useLocation } from "react-router-dom";
import LogoutIcon from "../../../assets/svgs/pagesIcons/LogoutIcon";

const Aside = () => {
  const [subPagesIsActive, setSubPagesIsActive] = useState("");
  const location = useLocation();
  const url = location.pathname;

  useEffect(() => {
    pages.forEach((page) => {
      if (page.subPages) {
        page.subPages.forEach((subPage) => {
          if (subPage.link === url) {
            setSubPagesIsActive(page.title);
          }
        });
      }
    });
  }, [url]);

  const handleSubpages = (subpage) => {
    setSubPagesIsActive((prev) => (prev === subpage ? null : subpage));
  };

  return (
    <nav className="w-[250px] sm:w-[300px] bg-primary rounded-[16px] p-4 md:p-6 nav h-full overflow-y-scroll">
      <div className="flex flex-col justify-between h-[93vh] nav overflow-y-scroll">
        <div>
          <div className="flex items-center justify-center gap-2">
            <img src={logo} alt="logo" className="w-[50px]" />
            <h2 className="text-lg font-semibold text-white">Workforce Ease</h2>
          </div>
          <div className="flex justify-center py-6 w-full">
            <div className="flex flex-col">
              {pages.map((page, i) => {
                return (
                  <>
                    {page.link ? (
                      <Link
                        to={page.link}
                        className={`flex items-center gap-2 my-1 py-2 px-4 rounded-[10px] ${
                          page.link === url ? "bg-secondary" : "bg-transparent"
                        }`}
                        key={i}
                      >
                        <div> {page.icon} </div>
                        <div className="text-white text-base text-[19px]">
                          {page.title}
                        </div>
                      </Link>
                    ) : (
                      <div
                        className="flex items-center gap-2 cursor-pointer px-4 py-2"
                        key={i}
                        onClick={() => handleSubpages(page.title)}
                      >
                        <div> {page.icon} </div>
                        <div className="text-white text-base text-[19px]">
                          {page.title}
                        </div>
                        <div
                          className={`trasnform transition-transform duration-300 ${
                            subPagesIsActive === page.title
                              ? "rotate-0"
                              : "rotate-180"
                          }`}
                        >
                          <ChevronIcon />
                        </div>
                      </div>
                    )}
                    {page.subPages && (
                      <div
                        className={`${
                          subPagesIsActive === page.title
                            ? "max-h-[280px] opacity-100 my-2"
                            : "max-h-0 opacity-0 my-0"
                        } transition-all duration-500 overflow-hidden flex flex-col gap-2`}
                      >
                        {page.subPages.map((subPage, index) => (
                          <Link
                            to={subPage.link}
                            key={index}
                            className={`flex items-center gap-3 ml-2 px-4 py-2 rounded-[10px] ${
                              subPage.link === url
                                ? "bg-secondary"
                                : "bg-transparent"
                            }`}
                          >
                            <div className="w-[5px] h-[5px] rounded-full block bg-white"></div>
                            <div className="text-white text-base">
                              {subPage.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <button className="bg-[#f9d8d5] w-full flex items-center justify-center py-4 gap-1 h-[50px] text-[#000] text-base md:text-[20px] rounded-[16px]">
          <LogoutIcon />
          logout
        </button>
      </div>
    </nav>
  );
};

export default Aside;