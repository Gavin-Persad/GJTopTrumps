import React from "react";
import Image from "next/image";

interface Props {
  statTitle1: string;
  statTitle2: string;
  statTitle3: string;
  statTitle4: string;
  statTitle5: string;
  statTitle6: string;
  statTitle7: string;
  footballPlayerData: {
    id: number;
    name: string;
    facts: {
      age: number;
      country: string;
      position: string;
      club: string;
    };
    image: string;
    rating: number;
    attributes: {
      stat1: number;
      stat2: number;
      stat3: number;
      stat4: number;
      stat5: number;
      stat6: number;
      stat7: number;
    };
  };
}

const Card: React.FC<Props> = ({
  statTitle1,
  statTitle2,
  statTitle3,
  statTitle4,
  statTitle5,
  statTitle6,
  statTitle7,
  footballPlayerData,
}) => {
  return (
    <div className="grid gap-4 bg-slate-300 p-4 m-4 rounded-lg">
      <div className="flex gap-4">
        <h1 className="flex-1 text-2xl">{footballPlayerData.name}</h1>
        <p className="text-2xl">{footballPlayerData.facts.position}</p>
        <p className="text-2xl">{footballPlayerData.facts.age}</p>
      </div>
      <div className="relative h-64 w-full">
        <img src={footballPlayerData.image} className="h-full w-full"></img>
        <div className="absolute bottom-0 right-0 flex gap-4 m-2">
          <p className="">{footballPlayerData.facts.club}</p>
          <p>{footballPlayerData.facts.country}</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 place-items-center">
        <p>Overall</p>
        <p>{footballPlayerData.rating}</p>
        <p>{statTitle1}</p>
        <p>{footballPlayerData.attributes.stat1}</p>
        <p>{statTitle2}</p>
        <p>{footballPlayerData.attributes.stat2}</p>
        <p>{statTitle3}</p>
        <p>{footballPlayerData.attributes.stat3}</p>
        <p>{statTitle4}</p>
        <p>{footballPlayerData.attributes.stat4}</p>
        <p>{statTitle5}</p>
        <p>{footballPlayerData.attributes.stat5}</p>
        <p>{statTitle6}</p>
        <p>{footballPlayerData.attributes.stat6}</p>
        <p>{statTitle7}</p>
        <p>{footballPlayerData.attributes.stat7}</p>
      </div>
    </div>
  );
};

export default Card;
