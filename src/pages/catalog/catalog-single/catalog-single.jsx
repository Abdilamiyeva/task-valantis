import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../../../utils/requests";
import { LiaRubleSignSolid } from "react-icons/lia";
import { SkeletonCard } from "../components/skeleton/components/skeleton-card";

const CatalogSinglePage = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    getItems([id], (data) => setProductDetails(data));
  }, [id]);

  console.log(productDetails);
  return (
    <div className="container w-full my-[120px] pt-20">
      {productDetails ? (
        <>
          {productDetails.map((item, idx) => (
            <div className="flex justify-between gap-32" key={idx}>
              <img
                className="w-[300px] object-cover"
                src="/jewelry-img-2.jpg"
                alt="jewelry image"
              />
              <div>
                <h3 className="text-4xl leading-7 mb-5 font-bold">
                  {item.product}
                </h3>
                <p className="text-3xl font-semibold leading-10 flex items-center">
                  {item.price} <LiaRubleSignSolid />
                </p>

                <p className="text-xl font-semibold mb-3"> {item.brand}</p>
                <h4 className="text-2xl font-medium">Описание</h4>
                <p className="font-base leading-normal">
                  Свадебное кольцо по мотивам 16 века. На золотом обруче
                  изображен распятый Иисус в окружении различных пыточных
                  инструментов, которые использовались при его казни. Венчает
                  украшение натуральный гранат. Материал: Жёлтое золото 585
                  пробы Примерный вес: 9,00 г Вставка: Гранат (природный) (1 шт,
                  0.5 карат)
                </p>
                <h4 className="text-2xl font-medium mt-7 mb-3">Гарантия</h4>
                <p className="font-base leading-normal">
                  Валантис предоставляет все необходимые документы и чеки
                  согласно законодательству РФ. Украшения сопровождаются
                  фирменной упаковкой и конвертом для хранения документов и
                  чеков:
                </p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <SkeletonCard />
      )}
    </div>
  );
};

export default CatalogSinglePage;
