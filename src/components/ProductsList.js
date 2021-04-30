import React, { lazy, useState, useEffect } from "react";

const Product = lazy(() => import('./Product'));
const ProductsList = ({ setNewOrderAlert, setTotalPrice, userInfos, products, order, setOrder, orderUID, setOrderUID }) => {
  console.log(products);
  const[detailsAreShown, setDetailsAreShown]= useState(false);
  return (
    <div key="product-list">
      <div
        style={{
          display: "flex",
          width: "auto",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        {products &&
          products[0] !== null &&
          products.map((p,index) => <Product setNewOrderAlert={setNewOrderAlert} username={userInfos.username} userUID={userInfos.userUID} detailsAreShown={detailsAreShown} setDetailsAreShown={setDetailsAreShown} setTotalPrice={setTotalPrice} userInfos={userInfos} product={p} order={order} setOrder={setOrder} orderUID={orderUID} setOrderUID={setOrderUID} key={p +index+ "key"}
            contactUID={p}
          />)}
        {!products && <p>loading...</p>}
      </div>
    </div>
  );
};
export default ProductsList;
