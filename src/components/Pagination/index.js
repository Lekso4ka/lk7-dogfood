import React, {useEffect, useState} from "react";

export default ({hook}) => {
    const [pages, setPages] = useState([]);
    useEffect(() => {
        console.log
        const arr = []
        for (let i = 1; i <= hook.maxPage; i++) {
            arr.push(i);
        }
        setPages(arr);
    }, [hook])
    return <div className="pagination">
        <button 
            onClick={hook.prev}
        >&lt;</button>
        {pages.map(p => <button 
            key={p} 
            onClick={() => {hook.change(p)}}
        >{p}</button>)}
        {/* <button onClick={() => {hook.change(8)}}>8</button> */}
        <button 
            onClick={hook.next}
        >&gt;</button>
    </div>
}