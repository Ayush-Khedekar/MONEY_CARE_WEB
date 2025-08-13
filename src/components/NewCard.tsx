import React from "react";

interface CardProp {
  Icons: string;
  Title: string;
  Content: string;
}

const NewCard = ({ Content, Icons, Title }: CardProp) => {
  return (
    <>
      <div className="bg-[#b6e3dd] text-[#0f3e13] rounded-3xl p-6 shadow-md">
        <div className="w-8 h-8 bg-[black] rounded-full mb-4 ">{Icons}</div>
        <h3 className="text-xl font-semibold mb-1">{Title}</h3>
        <p className="text-sm">{Content}</p>
      </div>
    </>
  );
};

export default NewCard;
