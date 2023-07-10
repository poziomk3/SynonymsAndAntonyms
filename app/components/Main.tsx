"use client";
import Orbit from "./OrbitSection/Orbit";
import SearchSection from "./SearchSection/SearchSection";
import Image from "next/image";
import { useState } from "react";
import TopBar from "./TopBar/Topbar";
import BottomBar from "./BottomBar.tsx/BottomBar";
const Main = () => {
  const [data, setData] = useState([[""], [""]]);

  const handleSearch = (word: string) => {
    fetch("https://api.api-ninjas.com/v1/thesaurus?word=" + word, {
      method: "GET",
      headers: {
        "X-Api-Key": "API_KEY",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData([json.synonyms, json.antonyms]);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="min-h-screen  overflow-hidden">
      <div className="h-screen w-full fixed z-[-1] top-0 left-0 flex">
        <Image
          className="h-screen"
          objectFit="cover"
          src="/background/mainbg.jpg"
          alt=""
          layout="fill"
        />
      </div>
      <TopBar />

      <div className="relative">
        {" "}
        <SearchSection handleSearch={handleSearch} />
      </div>

      <div className="overflow-hidden">
        <div className=" md:absolute top-[50%] left-[25%] md:translate-y-[-50%] text-[0.8rem]">
          <Orbit data={data[0]} />
        </div>
        <div className="md:absolute top-[50%] left-[75%] md:translate-y-[-50%]  ">
          <Orbit data={data[1]} />
        </div>
      </div>

      <BottomBar />
    </div>
  );
};

export default Main;
