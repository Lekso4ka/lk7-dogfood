import React, {useState} from "react";
/*
    goods
    cnt - количесвто товаров на одной странице

    pages = Math.ceil(goods.length / cnt)
    25 / 10 => 3

    page 1
    data[0 - cnt]
    page[cnt*page - cnt*page+cnt]
*/
export default (data, cnt) => {
    const [page, setPage] = useState(1);
    const maxPage = Math.ceil(data.length / cnt);

    const next = () => {
        let newPage = Math.min(page + 1, maxPage); 
        setPage(newPage);
        console.log(newPage);
    }

    const prev = () => {
        let newPage = Math.max(1, page - 1);
        setPage(newPage);
        console.log(newPage);
    }

    const change = (p) => {
        /* 
            p = 8 => 7 Math.min(p, maxPage)
            p = 0 => 1 Math.max(1, p);
        */
        setPage(Math.max(1, Math.min(p, maxPage)));
        console.log(Math.max(1, Math.min(p, maxPage)))
    }
    return {next, prev, change, maxPage}; // {next: function() {...}}
}
