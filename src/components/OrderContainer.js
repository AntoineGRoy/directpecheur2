import React, { useRef, useEffect, useState } from "react";

import bluehook from "../img/bluehook.svg";
import { setFirestoreProductNewQuantity, addProductToOrder } from "../helpersFunctions/set";
import "../css/orderContainer.css"

const OrderContainer=({
  setNewOrderAlert,
  setTotalPrice,
  product,
  productTotalQuantity,
  setOrderUID,
  orderUID,
  order,
  setOrder,
  userInfos,
  detailsAreShown,
  setDetailsAreShown,
  containerIsShown,
  setContainerIsShown
})=>{
  const [message,setMessage]=useState('')
  useEffect(()=>{
    if(product.poids_de_la_piece>0){
      setlocalQuantity(product.poids_de_la_piece)
    }
  },[product])
  console.log(orderUID)
  console.log(userInfos.username)
  const [localQuantity, setlocalQuantity] = useState(500);
  /***Handle Click and Submit***/
  const handleSubmit = e => {
    console.log(localQuantity);
    e.preventDefault();
      let price=product.prix_au_kilo/1000*localQuantity;
      addProductToOrder(orderUID, product,userInfos.username,userInfos.id,price,localQuantity);
      setFirestoreProductNewQuantity(product.id, localQuantity, 'minus');
      setDetailsAreShown(false);
      setContainerIsShown(false);
      setNewOrderAlert(p=>p+1);
      setTotalPrice(p=>p+price);
  };
  
  const handleCancel = () => {
    setDetailsAreShown(false);
    setContainerIsShown(false);
    setlocalQuantity(0);
  };
  

  return (
    <div
      style={{zIndex:999}}
      className={`product-container ${
        detailsAreShown ? "product-container-expanded" : undefined
        }`}
    >
      <div
        className="name-container"
        style={{
          width: "100%",
          background:"navy",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ color: "white", margin:"16px 32px" }}>{product.name}</h3>
        <div className="close-x" onClick={handleCancel}>
          X
        </div>
      </div>
      <div style={{color:"white"}}>
        <div className="img-container">
          <img
            alt={`avatar-${product.name}`}
            style={{ cursor: "pointer" }}
            src={product.img_url}
            className='avatar'
          />
        </div>
      <ul>
      <li>
        Prix au kilo: {product.prix_au_kilo}&euro;{"    "}
      </li>
      
      {product.type_de_vente==='au_poids'&&<li style={{paddingBottom:"16px"}}>
        Qantité minimum : {product.minimum}g
      </li>}</ul>
      
      </div>
      <div className="input-button-container">
      {product.type_de_vente==='au_poids'&& <>
      <label style={{padding:"16px",fontSize:16, color:"white"}}>Quantité désirée en grammes</label><span style={{color:"red",padding:message&&8,background:"white"}}>{message}</span>
        <form onSubmit={handleSubmit}> 
       <input
          type="number" min={product.minimum} max={product.total_quantity} step="200"
            label="Quantité désirée en grammes"
            style={{ fontSize: 18, textAlign:"right" }}
            className="product-input"
            value={localQuantity}
            onChange={e => {
              setlocalQuantity(e.target.value);
            }}
          />
          <button className="input-button" type="submit">
            <img style={{ height: "2.5rem", width: "2.5rem" }} src={bluehook} />
          </button>
          <button className="input-button" style={{color:"white"}} onClick={handleCancel}>
            Annuler
          </button>
        </form></>}
        {product.type_de_vente==='a_la_piece'&&<><p style={{width:"100%", color:"white", fontSize:16, textAlign:"center"}}>Poids de la Pièce: {product.poids_de_la_piece}</p>
        <div className="input-button" style={{cursor:'pointer',background:'transparent', border:0, borderColor:'transparent', width:'100%',textAlign:'center'}} onClick={handleSubmit}>
          <img style={{ height: "2.5rem", width: "2.5rem" }} src={bluehook} />
          <p style={{width:"100%", color:"white", fontSize:16, textAlign:"center"}}>Confirmer</p>
         
          </div></>}
      </div>
    </div>
  );
}

export default OrderContainer;
