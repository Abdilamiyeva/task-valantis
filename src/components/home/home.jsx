import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-[#d4e5f8] pt-5 h-full">
      <div className="container mt-[100px] flex justify-between">
        <div>
          <li className="font-normal text-[#8d8e8f] leading-6 text-base">
            ЮВЕЛИРНАЯ МАСТЕРСКАЯ — VALANTIS
          </li>
          <h1 className="font-medium mt-5 leading-10 text-[#20232e] text-4xl max-w-[477px]">
            Ремонт и изготовление ювелирных украшений на заказ в Москве
          </h1>
          <p className="mt-7 leading-6 text-[#20232e] text-lg max-w-[500px]">
            Мастерская использует самое современное оборудование, а все работы
            выполняют ювелиры с опытом более 10 лет. Украшения доставляются в
            фирменной упаковке. Доставим в любой город России.
          </p>
          <div className="flex items-center mt-14 ">
            <button className="bg-[#a52838] text-white py-4 px-8 rounded-full cursor-pointer hover:bg-[#b53b3b] transition-all">
              Оставить заявку
            </button>
            <Link to={"/catalog"}>
              <button className="flex gap-2 items-center font-semibold py-4 px-8 hover:gap-4 transition-all">
                <span className="text-base text-[#515458] leading-6">
                  Смотреть каталог
                </span>
                <HiOutlineArrowNarrowRight className="text-2xl pt-1" />
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[450px]">
          <img className="w-full" src="/home__img.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
};
