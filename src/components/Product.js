import React, { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../css/orderContainer.css"
import OrderContainer from "./OrderContainer"
import {AddProductToOrder} from "../helpersFunctions/set"

export const Product = ({ 
  setNewOrderAlert,
  username,
  userUID,
  detailsAreShown, 
  setDetailsAreShown, 
  setTotalPrice, 
  userInfos, 
  order, 
  setOrder, 
  orderUID, 
  setOrderUID, 
  product }) => {

  const [fontSize, setFontSize] = useState(null);
  const [containerIsShown, setContainerIsShown]=useState(false);
  function handleClick() {
    setDetailsAreShown(!detailsAreShown);
    setContainerIsShown(!containerIsShown);
  }
//Set the fontsize depending on name length
  const setFontSizes = useCallback(() => {
    if (product.name) {
      if (product.name.length > 12) {
        setFontSize(300 / product.name.length);
      } else {
        setFontSize(22);
      }
    }
  }, [product.name])


  useEffect(setFontSizes, [product.name]);
  ////checking if some products have stayed in panier too long
  //['taken']:{['username']:{time_last_modified:sec, quantityTaken:localQuantity,orderUID:orderUID}} }
           
  return (
    <div>
      <div
        onClick={handleClick}
        className="order-container"
        style={{
          zIndex:0,
          pointerEvents:product.quantity<1?'none':'auto',
          backgroundColor: product.quantity>0?'white':'lightgrey',
          border:product.type_de_vente==='a_la_piece'?'2px solid darkseagreen':'2px solid skyblue',
        }}
      >
       <div className="img-container">
         <div style={{
           display:"block",
           position:'absolute', 
           top:0}}>{product.type_de_vente==='a_la_piece'?<h3 style={{background:"honeydew"}}>A la Pièce</h3>:<h3 style={{background:'skyblue'}}>Au Poids</h3>}</div>
          <img
            alt={`avatar-${product.name}`}
            style={{ cursor: "pointer", filter:product.quantity>0?'none':'grayscale(100%)',}}
            src={product.img_url}
            className={detailsAreShown?'avatar avatar-reduced':'avatar'}
          />
        </div>
        <h2
          style={{ fontSize: fontSize }}
          className="name"
        >
          {product.name}
        </h2>
        <h2
          style={{ fontSize: fontSize }}
          className="name"
        >
          {product.prix_au_kilo}&euro;/Kg
        </h2>
       {product.type_de_vente==='a_la_piece'?<h2
          style={{ fontSize: fontSize }}
          className="name"
        >
         {product.name} de {product.poids_de_la_piece/1000}Kg
        </h2>:<h2
          style={{ fontSize: fontSize }}
          className="name"
        >
          {product.quantity/1000}Kg disponibles!
        </h2>}
      </div>
      {containerIsShown && (
        <AnimatePresence>
          <motion.div
            key={product.id}
            initial={{
              height: 0,
              width: 0,
              position: "absolute",
              top: 0,
              left: 0,
              transform: "translate(0,0)",
              opacity:1
            }}
            animate={{
              height: "auto",
              width: "auto",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              opacity:1
            }}
            exit={{
              height: 0,
              width: 0,
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translate(0,0)",
              opacity:1
            }}
            style={{zIndex:999}}
          >
            <OrderContainer
            setNewOrderAlert={setNewOrderAlert}
              product={product}
              productTotalQuantity={product.quantity}
              order={order} setOrder={setOrder} orderUID={orderUID} setOrderUID={setOrderUID}
              userInfos={userInfos}
              detailsAreShown={detailsAreShown}
              setDetailsAreShown={setDetailsAreShown}
              setContainerIsShown={setContainerIsShown}
              containerIsShown={containerIsShown}
              setTotalPrice={setTotalPrice}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
export default Product