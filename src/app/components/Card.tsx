import React, { useState, useEffect } from "react";

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
      country: number;
      position: string;
      club: number;
    };
    image: number;
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
  const [playerImageSrc, setPlayerImageSrc] = useState<string>("");
  const [playerClubSrc, setPlayerClubSrc] = useState<string>("");
  const [playerNationSrc, setPlayerNationSrc] = useState<string>("");

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string;

  useEffect(() => {
    const fetchImage = async (id: number, imageType: string) => {
      const headers: HeadersInit = {
        "X-AUTH-TOKEN": API_KEY // replace with your actual auth token
      };
      try {
        const response = await fetch(
          `https://futdb.app/api/${imageType}/${id}/image`,
          {
            headers: headers
          }
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        if (imageType === "players") {
          setPlayerImageSrc(imageUrl);
        } else if (imageType === "clubs") {
          setPlayerClubSrc(imageUrl);
        } else {
          setPlayerNationSrc(imageUrl);
        }
      } catch (error) {
        console.error("Error fetching the image:", error);
      }
    };

    fetchImage(playerData.id, "players");
    fetchImage(playerData.facts.club, "clubs");
    fetchImage(playerData.facts.country, "nations");

    // Clean up the object URL when the component is unmounted
    return () => {
      if (playerImageSrc) {
        URL.revokeObjectURL(playerImageSrc);
        URL.revokeObjectURL(playerClubSrc);
        URL.revokeObjectURL(playerNationSrc);
      }
    };
  }, []);

  //127.0.0.1:5501/f71c5480-ee00-4b36-a691-27ecdd2dd68f

  http: return (
    <div className="grid gap-4 bg-slate-300 p-4 m-4 rounded-lg max-w-80">
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
