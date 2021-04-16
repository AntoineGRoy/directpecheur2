import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../usercontext";
import "../css/orderContainer.css";
import { removeProductFromOrder, setFirestoreProductNewQuantity } from "../helpersFunctions/set";
import done from "../img/done.svg";
import { auth, db } from "../firebase";



export const Order = ({ index, product, orderUID, setTotalPrice, setOrder }) => {
  console.log(product)
  console.log(orderUID)
  //checking for new messages
  const { userInfos, setUserInfos } = useContext(UserContext);
  const [fs, setFs] = useState(null);
  const [reqAccepted, setReqAccepted] = useState(false);
  const [productTotalQuantity,setProductTotalQuantity]=useState(null)
  //accepting friend requesg
  /*function handleRemove(){
    removeProductFromOrder(orderUID,productUID) 
  }*/
  console.log(product)
  
  useEffect(() => {
    console.log("PROD IN ORDER")
    console.log(product)
    if (product.name) {
      if (product.name.length > 12) {
        setFs(300 / product.name.length);
        setTotalPrice(p=>p+product.price);
      } else {
        setFs(22);
      }
    }
  }, [product]);
  
  return (
    <div>
      <div>
          {product.type_de_vente==='a_la_piece'?<h3>1 {product.name} de {product.quantity}g --- {product.price} &euro;</h3>:<h3>{product.orderQuantity}g de {product.name} <b>{product.price}&euro;</b></h3>}
        <span style={{border:"2px solid orange",marginTop:14,padding:4,cursor:"pointer", pointerEvents:"auto", fontWeight:"bold"}} onClick={()=>{
          removeProductFromOrder(product.id,orderUID)
          console.log(product.productUID)
          setFirestoreProductNewQuantity(product.productUID,
            product.quantity, 'plus')
          setTotalPrice(p=>(p-product.price));
          setOrder(p=>p.splice(index,1))
        console.log("click")
      }}>X retirer</span>
      </div>
    </div>
  );
};
