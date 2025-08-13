import type { ReactNode } from "react";

export interface NewCard {
  Icons: ReactNode;
  Title: string;
  Description: string;
}

const Icon_Component = ({ CardProp }: { CardProp: NewCard }) => {
  return (
    <div className="flex gap-4 group">
      <div className="w-[20%] sm:w-fit flex items-center justify-center">
        <div className=" w-13 h-12 border-2 border-[#026300] rounded-full flex items-center justify-center text-green-500 text-xl group-hover:bg-green-500 group-hover:text-white">
          {CardProp.Icons}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#026300]">
          {CardProp.Title}
        </h3>
        <p className="text-gray-600">{CardProp.Description}</p>
      </div>
    </div>
  );
};

export default Icon_Component;
