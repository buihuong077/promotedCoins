const Header = () => {
  return (
    <div className="bg-[var(--primary-color)] text-[var(--text-color)] static z-[20] ">
      <div className="flex gap-1 mx-3">
        <span>
          <i className="fa-solid fa-bullhorn text-red-600 text-2xl"></i>
        </span>
        <marquee>
          <strong>#6 MOTHER 0.3335555</strong>
          <strong>#6 MOTHER 0.3335555</strong>
          <strong>#6 MOTHER 0.3335555</strong>
        </marquee>
      </div>
      <div className="flex flex-col border-y-[1px] border-[var(--button-color)] p-3 items-center">
        <div className="col-12 flex justify-between items-center w-full lg:w-[1000px]">
          {/* Input và nút search */}
          <div className="flex items-center gap-3 w-full sm:w-[350px] md:w-[354px] lg:w-[354px] h-10 border-none rounded-lg bg-[var(--button-color)] px-3">
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              className="w-full border-none bg-[var(--button-color)] focus:outline-none focus-visible:outline-none"
              type="text"
              placeholder="Search"
            />
          </div>

          {/* Biểu tượng và nút bên phải */}
          <div className="flex gap-2 justify-end ml-4">
            <div className="border-[1.5px] border-solid border-gray-600 w-6 h-6 rounded-xl relative">
              <span className="text-sm absolute right-[6px] bottom-[1px]">B</span>
            </div>
            <span>
              <i className="fa-brands fa-paypal"></i>
            </span>
          </div>
        </div>
      </div>
      <div
        style={{ scrollbarWidth: "none" }}
        className=" w-[100vw] overflow-auto pl-[30px] mx-auto mt-3 m-3 flex flex-nowrap gap-3 justify-center hide-scrollbar scrollable-content-no-padding"
      >
        <div className="min-w-[132px] flex justify-center items-center border-[1px] border-solid rounded-lg w-[120px] h-10 gap-1">
          <span>
            <i className="fa-solid fa-calendar-days"></i>
          </span>
          <span>Top Today</span>
        </div>
        <div className="min-w-[132px] flex justify-center items-center border-[1px] border-solid rounded-lg w-[120px] h-10 gap-1">
          <span>
            <i className="fa-solid fa-calendar-days"></i>
          </span>
          <span>Top Today</span>
        </div>
        <div className="min-w-[132px] flex justify-center items-center border-[1px] border-solid rounded-lg w-[120px] h-10 gap-1">
          <span>
            <i className="fa-solid fa-calendar-days"></i>
          </span>
          <span>Top Today</span>
        </div>
        <div className=" min-w-[132px] flex justify-center items-center border-[1px] border-solid rounded-lg w-[120px] h-10 gap-1">
          <span>
            <i className="fa-solid fa-calendar-days"></i>
          </span>
          <span>Top Today</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
