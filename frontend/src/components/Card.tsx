import { PencilSimpleLine, Trash } from "phosphor-react";
import { useState } from "react";

interface CardProps {
  id: number;
  description: string;
  value: number;
  positive: boolean;
}

const Card = (props: CardProps) => {
  const [isPositive, _setIsPositive] = useState(props.positive);

  return (
    <article className="w-full flex items-center justify-between bg-pers-200 px-4 py-2 mb-3 rounded-lg">
      <div className="flex gap-4 items-center max-w-2xl">
        <b>#{props.id}</b>
        <p className="text-justify">{props.description}</p>
      </div>
      <div className="flex max-w-xs  gap-10 items-center">
        <div>
          <span
            className={`${
              isPositive === true ? "text-green-400" : "text-red-600"
            }`}
          >
            R$ {props.value}
          </span>
        </div>
        <div className="flex gap-2">
          <PencilSimpleLine
            size={32}
            color="#ffffff"
            className="cursor-pointer rounded-full"
          />
          <Trash size={32} color="#ffffff" className="cursor-pointer" />
        </div>
      </div>
    </article>
  );
};

export default Card;
