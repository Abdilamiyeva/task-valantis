/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import {
  getFields,
  getFilteredData,
  getIds,
  getItems,
} from "./../../utils/requests";
import { Slider } from "./components/slider";
import { IoSearch } from "react-icons/io5";
import { CatalogCard } from "./components/catalog-card";
import { Skeleton } from "./components/skeleton";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { LiaRubleSignSolid } from "react-icons/lia";

export const Catalog = () => {
  const [productIds, setProductIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [itemsPerPage] = useState(50);
  const [loading, setLoading] = useState(false);
  const [productIdsWithBrands, setProductIdsWithBrands] = useState([]);
  const [cache, setCache] = useState(null);
  const [isSelectedOption, setIsSelectedOption] = useState(false);
  const [allProductPrices, setAllProductPrices] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [searchInputValue, setSearchInputValue] = useState(null);
  const timerRef = useRef(null);

  const handleBrandFilter = (selectedBrand) => {
    if (selectedBrand === "All") {
      window.location.reload();
    }
    setIsSelectedOption(true);
    setLoading(true);
    getFilteredData("brand", selectedBrand, (filteredProducts) => {
      setProductIds(filteredProducts);
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    getIds(currentPage, itemsPerPage, (ids) => {
      setProductIds(Array.from(new Set(ids)));
    });
  }, [currentPage]);

  useEffect(() => {
    if (productIds.length) {
      const uniqueKey = JSON.stringify(productIds);

      if (cache && cache[uniqueKey]) {
        setProducts(cache[uniqueKey]);
        setLoading(false);
      } else {
        getItems(productIds, (data) => {
          setProducts(data);
          setLoading(false);
          setCache((prev) => ({ ...prev, [uniqueKey]: data }));
        });
      }
    }
  }, [productIds]);

  useEffect(() => {
    getFields("brand", 1, 1000, (brandList) =>
      setProductIdsWithBrands(brandList)
    );

    getFields("price", 1, 1000, (priceList) =>
      setAllProductPrices(Array.from(new Set(priceList.sort((a, b) => a - b))))
    );
  }, []);

  useEffect(() => {
    getFilteredData("product", searchInputValue, setProductIds);
  }, [searchInputValue]);

  useEffect(() => {
    if (currentPrice) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        getFilteredData("price", currentPrice, setProductIds);
      }, 60);
    }
    return () => clearTimeout(timerRef.current);
  }, [currentPrice, setProductIds]);

  return (
    <div className="pt-20">
      <div className="container mb-5 h-full">
        <h2 className="text-center text-3xl font-medium leading-6 my-8">
          Каталог ювелирных украшений
        </h2>
        <div className="border-2 flex justify-between items-center border-gray-400 p-3 rounded-lg my-4 ">
          <input
            type="text"
            placeholder="Search product name"
            className="border-none text-xl outline-none"
            value={searchInputValue || ""}
            onChange={(e) => setSearchInputValue(e.target.value)}
          />
          <IoSearch className="text-2xl text-gray-500" />
        </div>
        <div className="flex justify-between items-center mb-3">
          <button
            onClick={() => setCurrentPage((prev) => prev - 50)}
            className="text-white p-3 cursor-pointer rounded-md"
            disabled={currentPage === 1}
          >
            <GrPrevious className="text-2xl text-red-600" />
          </button>
          <h1 className="text-base font-medium">
            Cтраница:&nbsp;
            {Math.ceil(currentPage / 50)}
          </h1>
          <button
            disabled={isSelectedOption}
            onClick={() => setCurrentPage((prev) => prev + 50)}
            className="p-3 cursor-pointer rounded-md"
          >
            <GrNext className="text-2xl text-red-600" />
          </button>
        </div>
        <div className="mt-6 flex items-start  justify-between">
          <div className="w-[600px]">
            <div className="">
              <p className="text-xl mb-7 font-semibold">Цена</p>
              <Slider data={allProductPrices} onChange={setCurrentPrice} />
              <p className="flex items-center">
                <span className="text-xl">{currentPrice || 0} </span>
                <LiaRubleSignSolid className="text-xl mt-1" />
              </p>
            </div>
            <div>
              <div className="flex items-center h-full w-full">
                <div className="relative mb-2 flex items-center after:w-[10px] after:h-[10px] after:border-red-500 after:border-b after:border-r after:transform after:rotate-45 after:absolute after:right-3">
                  <select
                    required
                    onChange={(e) => handleBrandFilter(e.target.value)}
                    className="text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-red-500 border border-gray-200 rounded-lg outline-red-500 appearance-none invalid:text-black/30 w-64"
                  >
                    <option value="All">All Brands</option>
                    {Array.from(new Set(productIdsWithBrands)).map(
                      (brand, index) =>
                        brand !== null && (
                          <option key={index} value={brand}>
                            {brand}
                          </option>
                        )
                    )}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-flow-row grid-cols-3">
            {loading ? (
              <Skeleton />
            ) : (
              <>
                {products.map((item, idx) => (
                  <CatalogCard
                    key={idx}
                    product={item.product}
                    price={item.price}
                    brand={item.brand}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
