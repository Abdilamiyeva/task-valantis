import { LiaRubleSignSolid } from "react-icons/lia";
import { jewelryImages } from "../mock/catalog-images";
import { Link } from "react-router-dom";

export const CatalogCard = ({ id, product, price, brand }) => {
  return (
    <Link to={`/catalog/${id}`}>
      <div className="border w-[260px] text-center mb-6 p-5 transition-all shadow-lg  hover:shadow-blue-500/30  rounded-lg duration-300 cursor-pointer">
        <div className="w-[220px] h-[200px] ">
          <img
            className="w-full object-cover h-full"
            src={
              jewelryImages[Math.floor(Math.random() * jewelryImages.length)]
            }
            alt="jewelry image"
          />
        </div>
        <p className="text-sm leading-normal font-semibold">{product}</p>
        <p className="flex justify-center items-center mt-3 text-[#a52838]">
          <span>{price}</span>
          <LiaRubleSignSolid />
        </p>
        <p className="text-sm">{brand}</p>
      </div>
    </Link>
  );
};
