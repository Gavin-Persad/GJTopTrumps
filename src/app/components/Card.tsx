import React from "react";
import Image from "next/image";

const Card = (props: {}) => {
  return (
    <div className="grid gap-4 bg-slate-300 p-4 m-4 rounded-lg">
      <div className="flex gap-4">
        <h1 className="flex-1 text-2xl">Harry Kane</h1>
        <p className="text-2xl">ST</p>
        <p className="text-2xl">31</p>
      </div>
      <div className="relative">
        <Image
          className="h-full w-full"
          src="/avatar.jpg"
          alt="Player Image"
          width={200}
          height={200}
        />
        {/* <img src="/public/avatar.jpg"></img> */}
        <div className="absolute bottom-0 right-0 flex gap-4 m-2">
          <p className="">club badge</p>
          <p>nation badge</p>
        </div>
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
        <p>Dribbling</p>
        <p>90</p>
        <p>Tackling</p>
        <p>78</p>
        <p>Heading</p>
        <p>67</p>
        <p>Pace</p>
        <p>78</p>
      </div>
    </div>
  );
};

export default Card;
