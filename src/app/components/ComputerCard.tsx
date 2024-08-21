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
    setComputerImageSrc("/avatar.jpg");
  }, [playerData]);

  return (
    <div
      className="grid gap-4 bg-slate-300 p-4 m-4 rounded-lg max-w-40 max-h-48 m-auto"
      id="pcCard"
    >
      <div>
        <div id="playerNameAndPos" className="hidden">
          <h1 className="text-xl">{playerData.name}</h1>
          <p className="text-xl">{playerData.facts.position}</p>
        </div>
        <div className="flex w-full justify-center ">
          <img id="playerIMG" src={computerImageSrc} className="h-30 w-30"></img>
        </div>
      </div>
    </div>
  );
};

export default ComputerCard;
