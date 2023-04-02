import "./Pagnition.scss";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

export default function Pagnition({
  pagCount,
  setPagCount,
  pagitemCount,
  pagNextHandler,
}) {
  const obj = useSelector((state) => state.employ);
  const [pagCountArr, setPagCountArr] = useState([]);

  const paginationHandler = () => {
    let a = [];
    for (let i = 1; i <= Math.ceil(obj.length / pagitemCount); i++) {
      a.push(i);
      setPagCountArr(a);
    }
  };

  useEffect(() => {
    pagNextHandler();
  }, [pagCount]);

  useEffect(() => {
    setPagCount(1);
    pagNextHandler();
    paginationHandler();
  }, [obj]);

  return (
    <>
      <section className="pagnition">
        {obj.length !== 0 ? (
          <div
            className={`pagnition__manag-main-pagnition ${
              pagCountArr.length <= 5 ? "zzz" : ""
            }`}
          >
            {pagCountArr.length <= 5 ? (
              ""
            ) : (
              <button
                className={`${pagCount !== 1 ? "" : "disabled"}`}
                onClick={() => setPagCount(pagCount > 1 ? pagCount - 1 : 1)}
              >
                <BiChevronLeft />
              </button>
            )}

            {pagCountArr.length !== 1 ? (
              <div
                className={`pagnition__pag-list-box ${
                  pagCountArr.length <= 5 ? "zzz" : ""
                }`}
              >
                <ul
                  className="pagnition__pag-list"
                  style={{
                    transform: `translateX(-${
                      pagCountArr.length - 4 < pagCount
                        ? pagCountArr.length * 80 - 400
                        : pagCount <= 3
                        ? 0
                        : pagCount * 80 - 240
                    }px)`,
                  }}
                >
                  {pagCountArr.map((item, inx) => (
                    <li
                      key={inx + 1}
                      className={`pagnition__pag-item ${
                        item === pagCount ? "actPag" : ""
                      }`}
                      onClick={() => (setPagCount(item), window.scrollTo(0, 0))}
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <ul
                  className="pagnition__pag-list-two-respons"
                  style={{
                    transform: `translateX(-${
                      pagCountArr.length - 3 < pagCount
                        ? pagCountArr.length * 50 - 250
                        : pagCount <= 3
                        ? 0
                        : pagCount * 50 - 150
                    }px)`,
                  }}
                >
                  {pagCountArr.map((item, inx) => (
                    <li
                      key={inx + 1}
                      className={`pagnition__pag-item ${
                        item === pagCount ? "actPag" : ""
                      }`}
                      onClick={() => (setPagCount(item), window.scrollTo(0, 0))}
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}

            {pagCountArr.length <= 5 ? (
              ""
            ) : (
              <button
                className={`${
                  pagCount <= pagCountArr.length - 1 ? "" : "disabled"
                }`}
                onClick={() =>
                  setPagCount(
                    pagCount <= pagCountArr.length - 1
                      ? pagCount + 1
                      : pagCountArr.length
                  )
                }
              >
                <BiChevronRight />
              </button>
            )}
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
