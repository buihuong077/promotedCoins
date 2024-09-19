import ItemTable from "./ItemTable";
const Home = () => {
  return (
    <div className=" w-fit ml-[15px] md:ml-0 md:w-full flex justify-center flex-col items-center  h-full bg-[var(--primary-color)] text-[var(--text-color)]">
      <div className="py-4 flex justify-start">Promoted Coins</div>
      <div>
        <table className="bg-[var(--primary-color)] text-[var(--text-color)] min-w-[1000px]">
          <caption>List of users</caption>
          <thead>
            <tr className="w-full bg-[var(--primary-color)] text-[var(--text-color)]">
              <span>
                <i className="fa-regular fa-star"></i>
              </span>
              <th scope="col" className="w-[5%]">
                #
              </th>
              <th scope="col" className="w-[8%] text-center">
                Asset
              </th>
              <th scope="col" className="w-[10%]"></th>
              <th scope="col" className="w-[8%]">
                Price
              </th>
              <th scope="col" className="w-[8%]">
                %1h
              </th>
              <th scope="col" className="w-[8%]">
                %6h
              </th>
              <th scope="col" className="w-[8%]">
                %6h
              </th>
              <th scope="col" className="w-[8%]">
                %24h
              </th>
              <th scope="col" className="w-[8%]">
                Market Cap
              </th>
              <th scope="col" className="w-[8%]">
                FDV
              </th>
              <th scope="col" className="w-[8%]">
                24h Volume
              </th>
              <th scope="col" className="w-[8%]">
                <span>
                  <i className="fa-solid fa-arrow-down"></i>
                </span>
                <span>Votes</span>
              </th>
            </tr>
          </thead>
          <ItemTable />
          <ItemTable />
          <ItemTable />
        </table>
      </div>
    </div>
  );
};
export default Home;
