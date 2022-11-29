import React, {useContext} from "react";
import Card from "../components/Card";
import { Context } from "../App";

export default ({goods, api, setFav}) => {
    const { searchText, products } = useContext(Context);
    return <div className="cards-container">
        {!searchText && goods.length > 0 &&
            goods.map((d, i) => <Card 
                key={i}
                {...d}
                api={api}
                setFav={setFav}
            />)
            // <p style={{gridColumnEnd: "span 4", textAlign: "center"}}>Для отображения данных необходимо войти в приложение</p>
        }
        {searchText && products.map((d, i) => <Card 
                key={i}
                {...d}
                api={api}
                setFav={setFav}
        />)}
    </div>
}