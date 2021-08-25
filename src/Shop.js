import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

const Shop = () => {
  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([])
  const fetchItems = async () => {
    await fetch('https://fortnite-api.theapinetwork.com/upcoming/get')
      .then(response => response.json())
      .then(data => {
        const list = data.data.splice(0, 20)
        console.log(list)
        setItems(list)
      })
  }
  return (
    <div>
      {items.map(i =>
        <h1 key={i.itemId}>
          <Link to={`/shop/${i.itemId}`}>{i.item.name}</Link>
        </h1>
      )}
    </div>
  );
}

export default Shop;
