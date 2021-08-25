import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';

const ItemDetail = () => {
  useEffect(() => {
    fetchItem()
  }, [])

  let {id} = useParams()
  const [item, setItem] = useState({
    images: {}
  })

  const fetchItem = async () => {
    const result = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`)
    const item = await result.json()
    const i = item.data.item
    console.log(i)
    setItem(i)
  }
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.information} alt='dfd'/>
      <h3>Description: {item.description}</h3>
    </div>
  );
}

export default ItemDetail;
