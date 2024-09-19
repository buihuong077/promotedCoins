import { useState } from "react";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const [hoverwidth, setHoverWidth] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });

  const handleMourseEnter = () => {
    setHoverWidth(true);
  };
  const handleMourseLeave = () => {
    setHoverWidth(false);
  };
  return (
    <div className="row">
      <div
        style={{ width: hoverwidth ? "250px" : "80px" }} // Thay đổi chiều rộng bằng giá trị width từ state
        className="col-12 hidden lg:flex  h-[100vh] bg-[#262b3c] border-[1px] border-[var(--button-color)] text-[var(--text-color)] fixed top-0 left-0  flex-col hover:items-start items-center z-[100] p-4 shadow-lg transition-all duration-300 ease-in-out" // Thêm transition cho mượt
        onMouseEnter={handleMourseEnter}
        onMouseLeave={handleMourseLeave}
      >
        <div className={`w-full flex mb-7 gap-2 items-center px-2.5 py-1.5 ${hoverwidth ? "" : "justify-center"}`}>
          <span>
            <i className="fa-brands fa-discord text-2xl"></i>
          </span>
          {hoverwidth ? <span>CoinMun</span> : null}
        </div>
        <div className={`w-full flex flex-col gap-2 mb-3  ${hoverwidth ? "" : "items-center"}`}>
          <div
            className={`flex justify-between items-center border-none px-2.5 py-1.5 rounded-lg hover:bg-[var(--button-color)]`}
          >
            <div className="flex items-center gap-2">
              <span>
                <i className="fa-solid fa-coins text-2xl"></i>
              </span>
              {hoverwidth ? <span>Coin</span> : null}
            </div>
            {hoverwidth ? (
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            ) : null}
          </div>
          <div className="flex gap-2 items-center border-none px-2.5 py-1.5 rounded-lg hover:bg-[var(--button-color)]">
            <span>
              <i className="fa-regular fa-star text-2xl"></i>
            </span>
            {hoverwidth ? <span>Watchlist</span> : null}
          </div>

          <div className="flex gap-2 items-center border-none px-2.5 py-1.5 rounded-lg hover:bg-[var(--button-color)]">
            <span>
              <i className="fa-solid fa-border-none text-2xl"></i>
            </span>
            {hoverwidth ? <span>Categories</span> : null}
          </div>

          <div className="flex gap-2 items-center border-none px-2.5 py-1.5 rounded-lg hover:bg-[var(--button-color)]">
            <span>
              <i className="fa-solid fa-plus text-2xl"></i>
            </span>
            {hoverwidth ? <span>Add Coin</span> : null}
          </div>
          <div className="flex gap-2 items-center border-none px-2.5 py-1.5 rounded-lg hover:bg-[var(--button-color)]">
            <span>
              <i className="fa-solid fa-ticket text-2xl"></i>
            </span>
            {hoverwidth ? <span>Advertise</span> : null}
          </div>
        </div>
        <hr className="text-[var(--text-color)] h-2 w-full" />

        <div className={`w-full flex flex-col gap-2 mb-3  ${hoverwidth ? "" : "items-center"}`}>
          <div className="flex gap-2 items-center border-none px-2.5 py-1.5 rounded-lg hover:bg-[var(--button-color)]">
            <span>
              <i className="fa-brands fa-x-twitter text-2xl"></i>
            </span>
            {hoverwidth ? <span>Follow us on X</span> : null}
          </div>

          <div className="flex gap-2 items-center border-none px-2.5 py-1.5 rounded-lg hover:bg-[var(--button-color)]">
            <span>
              <i className="fa-brands fa-telegram text-2xl"></i>
            </span>
            {hoverwidth ? <span>Join Telegram</span> : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
