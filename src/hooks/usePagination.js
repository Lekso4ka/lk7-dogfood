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

    const pageData = () => {
        const start = (page - 1) * cnt; // 0-n
        /*
            page 1 (4)  start = 0
            page 2      start = 4
            page 3      start = 8
        */
        const end = start + cnt;
        return data.slice(start, end);
    }
    return {next, prev, change, maxPage, page, pageData}; // {next: function() {...}}
}
