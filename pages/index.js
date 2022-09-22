import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineHashtag, HiBell } from "react-icons/hi";
import { FaEnvelope, FaBookmark, FaSearch } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import Image from "next/image";
import Axios from "axios";
import { useEffect, useState } from "react";
import News from "../Components/News";

const leftClass =
  "hover:bg-bg hover:text-lightgray  text-[#fde68a] my-3 mx-2 hover:rounded-lg ease-in-out duration-500 flex justify-start pl-7 pr-6 items-center h-12 w-auto";

export default function Home() {
  const [newsFeed, setNewsFeed] = useState([]);
  const [newsCount, setNewsCount] = useState(5);

  useEffect(() => {
    Axios.request(
      "http://api.mediastack.com/v1/news?access_key=a80a324829a8ea2d87fbf2488eac830d&languages=en"
    )
      .then(function (response) {
        const newsData = response.data.data.slice(0, newsCount);
        console.log(newsFeed);
        setNewsFeed(newsData);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const incrementNewsCount = () => {
      if (window.scrollY >= 100) {
        setNewsCount(newsCount + 5);
        console.log(newsCount);
      }
    };
    window.addEventListener("scroll", incrementNewsCount);
  }, []);

  return (
    <>
      <div className="h-auto w-full px-3 z-10 fixed flex justify-end bg-bg ">
        <div className="m-3 my-5 flex w-auto rounded-full px-2 py-1 text-pr bg-white">
          <input
            className=" bg-transparent w-44 focus:outline-none"
            type="text"
            placeholder="Search..."
          />
          <button className="text-[#64748b]">
            <FaSearch size={20} />
          </button>
        </div>
      </div>
      {/* -----------------CONTENT----------------- */}
      <div className="grid mx-6 grid-rows-10 absolute top-[100px] grid-cols-6 gap-3 h-screen">
        <div className=" flex flex-col justify-center row-start-1 bg-pr rounded-lg">
          <div className={leftClass}>
            <AiOutlineHome size={25} /> <h1 className="mx-2 ">Home</h1>
          </div>
          <div className={leftClass}>
            <HiOutlineHashtag size={25} />
            <h1 className="mx-2">Explore</h1>
          </div>
          <div className={leftClass}>
            <MdOutlinePeopleAlt size={25} />
            <h1 className="mx-2">Communities</h1>
          </div>
          <div className={leftClass}>
            <HiBell size={25} />
            <h1 className="mx-2">Notifications</h1>
          </div>
          <div className={leftClass}>
            <FaEnvelope size={25} />
            <h1 className="mx-2">Messages</h1>
          </div>
          <div className={leftClass}>
            <FaBookmark size={25} />
            <h1 className="mx-2">Bookmarks</h1>
          </div>
          <div className={leftClass}>
            <BsPersonCircle size={25} />
            <h1 className="mx-2">Profile</h1>
          </div>
        </div>

        {/* ---------------------FEED------------------------ */}
        <div className="row-span-6 col-span-4 bg-pr rounded-lg"></div>
        {/* ----------------------RIGHT BAR---------------------- */}
        <div className="row-span-6  divide-y divide-gray  justify-center flex-col col-span-1 bg-pr rounded-lg">
          <h1 className="font-bold text-[#f87171] text-5xl p-3">NEWS</h1>
          {newsFeed.map((news) => {
            return (
              <div className=" text-xs hover:text-white ease-in-out duration-300 mx-2 text-[#fde68a]">
                <News title={news.title} url={news.url} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
