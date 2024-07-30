import React from "react";

interface Props {
  statTitle1: string;
  statTitle2: string;
  statTitle3: string;
  statTitle4: string;
  statTitle5: string;
  statTitle6: string;
  statTitle7: string;
  playerData: {
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
  playerData,
}) => {
  return (
    <div className="grid gap-4 bg-slate-300 p-4 m-4 rounded-lg">
      <div className="flex gap-4">
        <h1 className="flex-1 text-2xl">{playerData.name}</h1>
        <p className="text-2xl">{playerData.facts.position}</p>
        <p className="text-2xl">{playerData.facts.age}</p>
      </div>
      <div className="relative h-64 w-full">
        <img src={playerData.image} className="h-full w-full"></img>
        <div className="absolute bottom-0 right-0 flex gap-4 m-2">
          <p className="">{playerData.facts.club}</p>
          <p>{playerData.facts.country}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button className="flex justify-between bg-slate-50 p-2 rounded">
          <p>Overall</p>
          <p>{playerData.rating}</p>
        </button>
        <button className="flex justify-between bg-slate-50 p-2 rounded">
          <p>{statTitle1}</p>
          <p>{playerData.attributes.stat1}</p>
        </button>
        <button className="flex justify-between bg-slate-50 p-2 rounded">
          <p>{statTitle2}</p>
          <p>{playerData.attributes.stat2}</p>
        </button>
        <button className="flex justify-between bg-slate-50 p-2 rounded">
          <p>{statTitle3}</p>
          <p>{playerData.attributes.stat3}</p>
        </button>
        <button className="flex justify-between bg-slate-50 p-2 rounded">
          <p>{statTitle4}</p>
          <p>{playerData.attributes.stat4}</p>
        </button>
        <button className="flex justify-between bg-slate-50 p-2 rounded">
          <p>{statTitle5}</p>
          <p>{playerData.attributes.stat5}</p>
        </button>
        <button className="flex justify-between bg-slate-50 p-2 rounded">
          <p>{statTitle6}</p>
          <p>{playerData.attributes.stat6}</p>
        </button>
        <button className="flex justify-between bg-slate-50 p-2 rounded">
          <p>{statTitle7}</p>
          <p>{playerData.attributes.stat7}</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
