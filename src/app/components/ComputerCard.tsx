import React, { useEffect } from "react";
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
  const [computerImageSrc, setComputerImageSrc] = useState<string>("");
  const [computerClubSrc, setComputerClubSrc] = useState<string>("");
  const [computerNationSrc, setComputerNationSrc] = useState<string>("");

  useEffect(() => {
    setComputerClubSrc(`/clubImages/${playerData.facts.club}.png`);
    setComputerNationSrc(`/nationImages/${playerData.facts.country}.png`);
  setComputerImageSrc(`playerImages/${playerData.image}.png`);
  }, [playerData]);

  return (
    <div
      className="grid gap-4 bg-slate-300 p-4 m-4 rounded-lg max-w-40 max-h-48 m-auto"
      id="pcCard"
    >
      <div className="flex w-full justify-center ">
        <img id="playerIMG" src={computerImageSrc} className="h-30 w-30"></img>
      </div>
      {/* <div className="flex gap-4">
        <h1 className="flex-1 text-xl">{playerData.name}</h1>
        <p className="text-xl">{playerData.facts.position}</p>
        <p className="text-xl">{playerData.facts.age}</p>
      </div>
      <div className="flex w-full ">
        <img src={computerImageSrc} className="h-20 w-20"></img>
        <div className="grid flex-1 py-4">
          <div className="flex gap-2 justify-center items-center">
            <img src={computerClubSrc} className="w-16 h-16"></img>
            <img src={computerNationSrc} className="w-16 h-12"></img>
          </div>
          <div className="flex justify-center items-center gap-4">
            <p className="text-2xl">Overall</p>
            <p className="text-2xl">{playerData.rating}</p>
          </div>
        </div>
      </div> */}
      {/* <div className="grid grid-cols-6 gap-1">
        <button className="bg-slate-50 p-1 rounded col-span-2" value="stat1">
          {statTitle1}
        </button>
        <p className=" p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat1}
        </p>
        <button className="bg-slate-50 p-1 rounded col-span-2" value="stat2">
          {statTitle2}
        </button>
        <p className=" p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat2}
        </p>
        <button className="bg-slate-50 p-1 rounded col-span-2" value="stat3">
          {statTitle3}
        </button>
        <p className=" p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat3}
        </p>
        <button className="bg-slate-50 p-1 rounded col-span-2" value="stat4">
          {statTitle4}
        </button>
        <p className=" p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat4}
        </p>
        <button className="bg-slate-50 p-1 rounded col-span-2" value="stat5">
          {statTitle5}
        </button>
        <p className=" p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat5}
        </p>
        <button className="bg-slate-50 p-1 rounded col-span-2" value="stat6">
          {statTitle6}
        </button>
        <p className=" p-1 rounded bg-slate-50 text-center">
          {playerData.attributes.stat6}
        </p>
      </div> */}
    </div>
  );
};

export default ComputerCard;
