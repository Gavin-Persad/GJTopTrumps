import React, { useState, useEffect } from "react";
import { Attributes, playerCard } from "../helpers";

interface Props {
  statTitle1: string;
  statTitle2: string;
  statTitle3: string;
  statTitle4: string;
  statTitle5: string;
  statTitle6: string;
  playerData: {
    id: number;
    name: string;
    facts: {
      age: number;
      country: number;
      position: string;
      club: number;
    };
    image: number;
    rating: number;
    attributes: Attributes;
  };
  setStatClicked: (stat: string) => void;
}

const Card: React.FC<Props> = ({
  statTitle1,
  statTitle2,
  statTitle3,
  statTitle4,
  statTitle5,
  statTitle6,
  playerData,
  setStatClicked,
}) => {
  const [playerImageSrc, setPlayerImageSrc] = useState<string>("");
  const [playerClubSrc, setPlayerClubSrc] = useState<string>("");
  const [playerNationSrc, setPlayerNationSrc] = useState<string>("");

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string;

  useEffect(() => {
    // const fetchImage = async (id: number, imageType: string) => {
    //   const headers: HeadersInit = {
    //     "X-AUTH-TOKEN": API_KEY, // replace with your actual auth token
    //   };
    //   try {
    //     const response = await fetch(
    //       `https://futdb.app/api/${imageType}/${id}/image`,
    //       {
    //         headers: headers,
    //       }
    //     ); // Replace with your API endpoint
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     const blob = await response.blob();
    //     const imageUrl = URL.createObjectURL(blob);
    //     if (imageType === "players") {
    //       setPlayerImageSrc(imageUrl);
    //     } else if (imageType === "clubs") {
    //       setPlayerClubSrc(imageUrl);
    //     } else {
    //       setPlayerNationSrc(imageUrl);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching the image:", error);
    //   }
    // };
    setPlayerClubSrc(`/clubImages/${playerData.facts.club}.png`);
    setPlayerNationSrc(`/nationImages/${playerData.facts.country}.png`);
    setPlayerImageSrc(`playerImages/${playerData.image}.png`);
    // fetchImage(playerData.id, "players");
    // fetchImage(playerData.facts.club, "clubs");
    // fetchImage(playerData.facts.country, "nations");

    // Clean up the object URL when the component is unmounted
    return () => {
      // if (playerImageSrc) {
      //   URL.revokeObjectURL(playerImageSrc);
      //   URL.revokeObjectURL(playerClubSrc);
      //   URL.revokeObjectURL(playerNationSrc);
      // }
    };
  }, [playerData]);

  //127.0.0.1:5501/f71c5480-ee00-4b36-a691-27ecdd2dd68f
  // set timeout here delays the game slightly
  const handleStatClick = (e: any) => {
    setStatClicked(e.target.value);

    // console.log(e.target.value);
  };

  // onClick={handleCompare('stat1')}>Compare {footballPlayerData[0][0].statTitle1}

  http: return (
    <div className="grid gap-4 bg-slate-300 p-4 m-4 rounded-lg max-w-90 max-h-96">
      <div className="flex gap-4">
        <h1 className="flex-1 text-xl">{playerData.name}</h1>
        <p className="text-xl">{playerData.facts.position}</p>
        <p className="text-xl">{playerData.facts.age}</p>
      </div>
      <div className="flex w-full ">
        <img src={playerImageSrc} className="h-40 w-40"></img>
        <div className="grid flex-1 py-4">
          <div className="flex gap-2 justify-center items-center">
            <img src={playerClubSrc} className="w-16 h-16"></img>
            <img src={playerNationSrc} className="w-16 h-12"></img>
          </div>
          <div className="flex justify-center items-center gap-4">
            <p className="text-2xl">Overall</p>
            <p className="text-2xl">{playerData.rating}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-1">
        <button
          className="bg-slate-50 p-1 rounded col-span-2"
          value="stat1"
          onClick={handleStatClick}
        >
          {statTitle1}
        </button>
        <p className=" p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat1}
        </p>
        <button
          className="bg-slate-50 p-1 rounded col-span-2"
          value="stat2"
          onClick={handleStatClick}
        >
          {statTitle2}
        </button>
        <p className=" p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat2}
        </p>
        <button
          className="bg-slate-50 p-1 rounded col-span-2"
          value="stat3"
          onClick={handleStatClick}
        >
          {statTitle3}
        </button>
        <p className=" p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat3}
        </p>
        <button
          className="bg-slate-50 p-1 rounded col-span-2"
          value="stat4"
          onClick={handleStatClick}
        >
          {statTitle4}
        </button>
        <p className=" p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat4}
        </p>
        <button
          className="bg-slate-50 p-1 rounded col-span-2"
          value="stat5"
          onClick={handleStatClick}
        >
          {statTitle5}
        </button>
        <p className=" p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat5}
        </p>
        <button
          className="bg-slate-50 p-1 rounded col-span-2"
          value="stat6"
          onClick={handleStatClick}
        >
          {statTitle6}
        </button>
        <p className=" p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat6}
        </p>
      </div>
    </div>
  );
};

export default Card;
