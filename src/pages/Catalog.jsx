import React, {useContext} from "react";
import Card from "../components/Card";
import { Context } from "../App";
import Pagination from "../components/Pagination";

import usePagination from "../hooks/usePagination";
import { useEffect } from "react";

export default ({setFav}) => {
    const { searchText, products, goods} = useContext(Context);
    const paginate = usePagination(products, 8);
    return <>
        <div className="cards-container">
            {!searchText && products.length > 0 &&
                paginate.pageData().map((d, i) => <Card 
                    key={i}
                    {...d}
                    setFav={setFav}
                />)
            }
            {searchText && <div style={{gridColumnEnd: "span 4"}}>
                {products.length 
                    ? <>По запросу <b>{searchText}</b> найдено {products.length} позиций</>
                    : <> По запросу <b>{searchText}</b> товаров не найдено</>
                }
            </div>}
            {searchText && paginate.pageData().map((d, i) => <Card 
                key={i}
                {...d}
                setFav={setFav}
            />)}
        </div>
        <Pagination hook={paginate}/>
    </>
}