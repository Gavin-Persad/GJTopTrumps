import React from "react";
import Image from "next/image";

const Card = (props: {}) => {
  return (
    <div className="grid bg-slate-300 p-4">
      <div className="flex gap-4">
        <h2 className="flex-1">Name</h2>
        <p className="">Position</p>
        <p>Age</p>
      </div>
      <div className="h-80">
        <Image
          className="size-full"
          src="/avatar.jpg"
          alt="Player Image"
          width={200}
          height={200}
        />
        {/* <img src="/public/avatar.jpg"></img> */}
        <p>club badge</p>
        <p>nation badge</p>
      </div>
      <div className="grid grid-cols-4 gap-2 place-items-center">
        <p>Overall</p>
        <p>90</p>
        <p>Shooting</p>
        <p>78</p>
        <p>Passing</p>
        <p>67</p>
        <p>Defending</p>
        <p>78</p>
      </div>
    </div>
  );
};

export default Card;
