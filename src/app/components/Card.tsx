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

  // const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string;

  // change/set player images when playerData changes
  useEffect(() => {
    setPlayerClubSrc(`/clubImages/${playerData.facts.club}.png`);
    setPlayerNationSrc(`/nationImages/${playerData.facts.country}.png`);
    setPlayerImageSrc(`playerImages/${playerData.image}.png`);
    return () => {};
  }, [playerData]);

  // handle the stat click
  const handleStatClick = (e: any) => {
    setStatClicked(e.target.value);
  };

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
