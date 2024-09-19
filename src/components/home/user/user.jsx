const UserItem = () => {
  return (
    <div className=" bg-[var(--primary-color)] text-[var(--text-color)] flex justify-center row justify-items-center w-[1376px] mx-auto mt-8">
      <div class="col-12 col-lg-8 flex  flex-col">
        <div className="col-12 col-lg-12 flex flex-wrap items-center ">
          <div className="col-12 col-md-6 flex gap-2 items-center">
            <img
              className="w-[64px] h-[64px]"
              src="https://coinmun.com/_next/image?url=https%3A%2F%2Fcdn.coinmun.com%2Fimages%2Fmochi.png&w=96&q=75"
              alt=""
            />
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <span className="text-[30px] font-bold">Mochi</span>
                <span>
                  <i class="fa-regular fa-star"></i>
                </span>
                <span>146</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[17px] text-[#9ca3af]">MOCHI</span>
                <span>
                  <i className="fa-solid fa-circle-half-stroke"></i>
                </span>
                <span>#44</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 flex justify-end flex-col mt-4 items-start md:items-end">
            <div className="flex gap-2 items-center">
              <div className="border-none rounded-lg bg-red-600 border-red-600 flex justify-center h-7 px-2">
                <span>-13.98%</span>
              </div>
              <div className="flex">
                <span className="text-[30px] font-bold">$0.</span>
                <div className="flex items-end text-[19px] font-bold">
                  <span>0x</span>
                  <span>5</span>
                </div>
                <span className="text-[30px] font-bold">8145</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex gap-1">
                <span className="text-[#9ca3af] font-medium">Vol</span>
                <span>$18.804</span>
              </div>
              <div className="flex gap-1">
                <span className="text-[#9ca3af] font-medium">MC</span>
                <span>$8.18 M</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-[30px]">
          <div className="flex gap-2">
            <div className="flex gap-2 border-none justify-center items-center rounded-3xl bg-[#242744] px-2">
              <span>
                <i class="fa-regular fa-face-smile"></i>
              </span>
              <span>0xf6e...02e50</span>
              <span className="border-none bg-[#424691] rounded-xl w-[27px] relative h-[27px]">
                <i class="fa-regular fa-copy absolute right-[6px] bottom-[6.5px]"></i>
              </span>
            </div>
            <div className="flex gap-2 justify-center items-center border-none rounded-3xl bg-[#242744] px-2">
              <span>
                <i class="fa-regular fa-face-smile text-[20px]"></i>
              </span>
              <span>0xf6e...02e50</span>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="border-1 border-[#424691] text-[#424691] rounded-lg w-[40px] relative h-[40px]">
              <i class="fa-regular fa-flag absolute right-[11px] bottom-[11px]"></i>
            </div>
            <div className="border-1 border-[#424691] text-[#424691] rounded-lg w-[40px] relative h-[40px]">
              <i class="fa-regular fa-share-from-square absolute right-[8px] bottom-[11px]"></i>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-[30px]">
          <div className="flex gap-3">
            <div className="border-1 bg-[#0891b2] rounded-2xl w-[35px] relative h-[35px]">
              <i class="fa-regular fa-copy absolute right-[8px] bottom-[9px]"></i>
            </div>
            <div className="border-1 bg-[#0891b2] rounded-2xl w-[35px] relative h-[35px]">
              <i class="fa-regular fa-copy absolute right-[8px] bottom-[9px]"></i>
            </div>
            <div className="border-1 bg-[#0891b2] rounded-2xl w-[35px] relative h-[35px]">
              <i class="fa-regular fa-copy absolute right-[8px] bottom-[9px]"></i>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="border-1 bg-[#0891b2] rounded-2xl w-[35px] relative h-[35px]">
              <i class="fa-regular fa-copy absolute right-[8px] bottom-[9px]"></i>
            </div>
            <div className="border-1 bg-[#0891b2] rounded-2xl w-[35px] relative h-[35px]">
              <i class="fa-regular fa-copy absolute right-[8px] bottom-[9px]"></i>
            </div>
            <div className="border-1 bg-[#0891b2] rounded-2xl w-[35px] relative h-[35px]">
              <i class="fa-regular fa-copy absolute right-[8px] bottom-[9px]"></i>
            </div>
          </div>
        </div>

        <div className="mt-[40px]">
          <img
            className="w-[1000px] h-[600px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVQUj5WS_d7640hRq4lV3TTp1ogEIf6K5_rg&s"
            alt=""
          />
        </div>
        <div className="mt-5">
          <h3 class="text-[23px]">Mochi Live Updates</h3>
          <div className=" mt-3 text-base font-normal text-gray-500 space-y-2">
            <p>Today's live data for Mochi (MOCHI) on the Base blockchain is as follows:</p>
            <p>
              The current price is approximately $0.000008226 USD. It has a 24-hour trading volume of $21,032.67 USD.
              The current market cap is $8,225,999.994 USD. The current fully diluted valuation is $8,225,999.994 USD.
              The total supply is 1,000,000,000,000 MOCHI tokens. It has a burned amount of 703.56 tokens. Mochi price
              has increased by 0.59% in the last hour. Mochi price has increased by 1.60% in the last 6 hours. Mochi
              price has decreased by 11.14% in the last 24 hours. The volume to market cap ratio is 0.003.
            </p>
            <p>
              Currently ranked #44 on CoinMun (based on total community votes), Mochi has accumulated a total of 978
              votes and received 76 votes in the last 24 hours.
            </p>
            <p>Mochi is listed on CoinMarketCap but not listed yet on CoinGecko.</p>
            <p>
              Find more information about Mochi (MOCHI) by checking the official website, socials, and other relevant
              links provided on this page.{" "}
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 mt-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Categories</h2>
            <div className="mb-4 flex gap-2">
              <button className="bg-[var(--button-color)] px-2 py-1 border-none rounded-md">Base Ecosystem</button>
              <button className="bg-[var(--button-color)] px-2 py-1 border-none rounded-md">Memes</button>
            </div>
            <div>
              <span className="text-lg font-semibold">Mochi Live Price & FAQs</span>
              <div className="flex gap-2 items-center text-sm pt-3">
                <i class="fa-solid fa-chevron-right"></i>
                <span>What is the current price of 1 MOCHI token?</span>
              </div>
              <div className="flex gap-2 items-center text-sm pt-3">
                <i class="fa-solid fa-chevron-right"></i>
                <span>You can purchase approximately 12,187,690.43 MOCHI tokens with $100 USD.</span>
              </div>
              <div className="flex gap-2 items-center text-sm pt-3">
                <i class="fa-solid fa-chevron-right"></i>
                <span>What is the market cap of Mochi coin?</span>
              </div>
              <div className="flex gap-2 items-center text-sm pt-3">
                <i class="fa-solid fa-chevron-right"></i>
                <span>What is the fully diluted valuation (FDV) of Mochi coin?</span>
              </div>
              <div className="flex gap-2 items-center text-sm pt-3">
                <i class="fa-solid fa-chevron-right"></i>
                <span>What is the contract address for Mochi (MOCHI) on Base?</span>
              </div>
            </div>
          </div>
          <p className="w-full text-xs font-light text-gray-400 my-4">
            Notice: If you encounter any information on this page that appears to be incorrect or outdated, we encourage
            you to contact our support team or use the flag option on this page to report it.
          </p>
          <h3 className="text-xl font-bold tracking-tight">Promoted Coins</h3>
          <div className="block w-full">
            <div className="swiper swiper-initialized swiper-horizontal">
              <div
                className="swiper-wrapper"
                style={{
                  transitionDuration: "0ms",
                  transform: "translate3d(-231px, 0px, 0px)",
                  transitionDelay: "0ms",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="col-12 col-lg-4 col-span-1 ml-[13px] mr-[10px] md:ml-0 md:mr-0 ">
        <div className="flex flex-col  gap-2.5 rounded-xl border border-gray-200 p-3 dark:border-dark-925">
          <div className="grid w-full  grid-cols-2">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold tracking-tighter dark:text-white">978</div>
              <span className="flex flex-nowrap items-center gap-1 text-sm font-medium text-gray-500">Votes</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold tracking-tighter dark:text-white">76</div>
              <span className="flex flex-nowrap items-center gap-1 text-sm font-medium text-gray-500">
                <div className="relative">
                  <i class="fa-solid fa-calendar-days"></i>
                </div>
                <span>24h</span>
              </span>
            </div>
          </div>
          <div className="col-span-full flex flex-col items-end justify-center">
            <button className="select-none rounded-lg flex bg-indigo-700 h-[46px] items-center place-content-center text-md font-normal text-white hover:bg-indigo-600 w-full justify-center ">
              <span className="w-10 text-xl">🚀</span>
              Vote for MOCHI
            </button>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-6 mt-10">
          <div className="w-full space-y-2 rounded-xl border border-gray-200 p-3 dark:border-dark-925">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col items-center bg-[#242744] py-2 border-none rounded-md">
                <span>$8.18 M</span>
                <span>Market Cap</span>
              </div>
              <div className="flex flex-col items-center bg-[#242744] py-2 border-none rounded-md">
                <span>$8.18 M</span>
                <span>FDV</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col items-center bg-[#242744] py-2 border-none rounded-md">
                <span>0.17%</span>
                <span>1h Change</span>
              </div>
              <div className="flex flex-col items-center bg-[#242744] py-2 border-none rounded-md">
                <span>1.17%</span>
                <span>6h Change</span>
              </div>
            </div>
            <div className="flex flex-col items-center bg-[#242744] py-2 border-none rounded-md">
              <span>1.17%</span>
              <span>6h Change</span>
            </div>
            <div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Total Supply</span>
                <span className="font-semibold text-gray-900 dark:text-white">1 T</span>
              </div>
              <hr className="w-full h-2 !bg-red-700 text-red-700 my-[20px]" />
              <div className="flex justify-between py-2">
                <div className="mt-[10px] flex flex-col">
                  <span className="text-xs text-gray-500">Circ. Supply 100.00%</span>
                  <span>1 T</span>
                </div>
                <div className="mt-[10px] flex flex-col justify-end items-end">
                  <div className=" flex gap-2">
                    <span className="text-xs text-gray-500">Burned</span>
                    <span className="text-xs text-orange-600">0.00%</span>
                  </div>
                  <span>703.56</span>
                </div>
              </div>
              <div className="tracking-thight flex flex-nowrap justify-between py-1.5 text-base font-normal text-gray-500 border-y-[1px] ">
                <span className="text-sm text-gray-500">24h Volume</span>
                <span className="font-semibold text-gray-900 dark:text-white">$16.643</span>
              </div>
              <div className="tracking-thight flex flex-nowrap justify-between py-1.5 text-base font-normal text-gray-500  ">
                <span className="text-sm text-gray-500">Volume / MC</span>
                <span className="font-semibold text-gray-900 dark:text-white">0.002</span>
              </div>
              <div className="tracking-thight flex flex-nowrap justify-between py-1.5 text-base font-normal text-gray-500 border-t-[1px] ">
                <span className="text-sm text-gray-500">Total Liquidity</span>
                <span className="font-semibold text-gray-900 dark:text-white">$455,675</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[500px] w-full rounded-xl border border-gray-200 p-3 dark:border-dark-925 mt-4">
          <div className="h-full overflow-y-scroll">
            <div>
              <div
                class="twitter-timeline twitter-timeline-rendered"
                style={{ display: "flex", maxWidth: "100%", marginTop: "0px", marginBottom: "0px" }}
              >
                <iframe
                  id="twitter-widget-0"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  allowFullScreen="true"
                  class
                  title="Twitter Timeline"
                  src="https://syndication.twitter.com/srv/timeline-profile/screen-name/mochi_token?dnt=true&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideBorder=true&hideFooter=true&hideHeader=false&hideScrollBar=true&lang=en&limit=10&origin=https%3A%2F%2Fcoinmun.com%2Fcoins%2Fmochi&sessionId=ebeb2b06f0cad9ce8fc6ddaca54b533802aab137&showHeader=true&showReplies=false&theme=dark&transparent=true&widgetsVersion=2615f7e52b7e0%3A1702314776716"
                  style={{
                    position: "static",
                    visibility: "visible",
                    width: "412px",
                    height: "7506px",
                    display: "block",
                    flexGrow: "1",
                  }}
                >
                  {/* <div className="flex justify-between items-center">
                    <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3">Posts from @mochi_token</span>
                    <button className="bg-white text-black px-4 font-bold py-1  border-none rounded-xl">Follow</button>
                  </div>
                  <div className="mt-4 col-lg-8 col-lg-4 ">
                    <span>MOCHI on BASE</span>
                    <span>MOCHI on BASE</span>
                  </div> */}
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserItem;
