import React, { useState } from "react";

import AdminProduct from "./AdminProduct";
import AddPanel from "./AddPanel";


const AdminProductsList = ({ products }) => {
  console.log(products);
  const [showAddPanel, setShowAddPanel]= useState(false);
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
          products.map((p,index) => <AdminProduct product={p} key={p +index+ "key"}
          />)}
        {!products && <p>loading...</p>}
        {showAddPanel===false&&<button style={{cursor:"pointer",marginTop:36,minWidth:120,border:0,background:"orange", color:"white", fontWeight:"bold", padding:".5rem", borderRadius:8}} onClick={()=>{setShowAddPanel(true)}}>Ajouter</button>}
          {showAddPanel===true&&<AddPanel setShowAddPanel={setShowAddPanel}/>}
      </div>
      </div>
  );
};
export default AdminProductsList;
