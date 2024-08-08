import React from "react";
import { useState } from "react";
import { Attributes } from "../helpers";

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
}

const ComputerCard: React.FC<Props> = ({
  statTitle1,
  statTitle2,
  statTitle3,
  statTitle4,
  statTitle5,
  statTitle6,
  playerData,
}) => {
  const [playerImageSrc, setPlayerImageSrc] = useState<string>("");
  const [playerClubSrc, setPlayerClubSrc] = useState<string>("");
  const [playerNationSrc, setPlayerNationSrc] = useState<string>("");

  return (
    <div className="grid gap-4 bg-slate-300 p-4 m-4 rounded-lg max-w-90">
      <div className="flex gap-4">
        <h1 className="flex-1 text-2xl">{playerData.name}</h1>
        <p className="text-2xl">{playerData.facts.position}</p>
        <p className="text-2xl">{playerData.facts.age}</p>
      </div>
      <div className="relative h-64 w-full">
        <img src={playerImageSrc} className="h-full w-full"></img>
        <div className="absolute top-0 -right-2 flex flex-col gap-4 m-2 w-12">
          <img src={playerClubSrc} className=""></img>
          <img src={playerNationSrc} className=""></img>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-2">
        <div className="flex justify-between bg-slate-50 p-2 rounded col-span-6">
          <p>Overall</p>
          <p>{playerData.rating}</p>
        </div>
        <button className="bg-slate-50 p-1 rounded col-span-4" value="stat1">
          {statTitle1}
        </button>
        <p className="col-span-2 p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat1}
        </p>
        <button className="bg-slate-50 p-1 rounded col-span-4" value="stat2">
          {statTitle2}
        </button>
        <p className="col-span-2 p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat2}
        </p>
        <button className="bg-slate-50 p-1 rounded col-span-4" value="stat3">
          {statTitle3}
        </button>
        <p className="col-span-2 p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat3}
        </p>
        <button className="bg-slate-50 p-1 rounded col-span-4" value="stat4">
          {statTitle4}
        </button>
        <p className="col-span-2 p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat4}
        </p>
        <button className="bg-slate-50 p-1 rounded col-span-4" value="stat5">
          {statTitle5}
        </button>
        <p className="col-span-2 p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat5}
        </p>
        <button className="bg-slate-50 p-1 rounded col-span-4" value="stat6">
          {statTitle6}
        </button>
        <p className="col-span-2 p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat6}
        </p>
      </div>
    </div>
  );
};

export default ComputerCard;
