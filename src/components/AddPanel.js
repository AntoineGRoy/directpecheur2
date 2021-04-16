import React, { useRef, useEffect, useState, useCallback } from "react";
import {addProductToFirestore} from "../helpersFunctions/set";
import {getDefaultProductValues, getProductsOptions} from "../helpersFunctions/get";
import ImageUpload from "./imageUpload";
import "../css/orderContainer.css";

const AddPanel=({setShowAddPanel})=>{
  const [message,setMessage]=useState('');
  const [detailsAreShown,setDetailsAreShown]=useState(true);
  const [product, setProduct]=useState({poids_de_la_piece:0,minimum:500,quantite_totale:0,type_de_vente:'a_la_piece',id:'',name:'',img_url:'',part_value:'',prix_au_kilo:'', quantity:''});
  const [myOptions, setOptions]=useState(['non']);
  const [myOption,setMyOption]=useState({value:'non'})
  
  const getoptions=useCallback(()=> getProductsOptions(setOptions));
  useEffect(getoptions,[]);
  /***Handle Click and Submit***/
  //selecting a default
  function onMySelect(event){
    if(event.target.value!=="default"){
      console.log(event.target.value)
      getDefaultProductValues(setProduct,event.target.value);
      setMyOption({value:event.target.value})
    }
  }
  //select type_de_vente
  function onMyVenteSelect(event){
      console.log(event.target.value)
      setProduct({...product,type_de_vente:event.target.value})
  }
  //all other fields
  function handleChange(event) {
    if(event.target.type==='number'){
      let num=parseInt(event.target.value);
      setProduct({
        ...product,
        [event.target.name]: num
      });
    }else{
      setProduct({
        ...product,
        [event.target.name]: event.target.value
      });
    }
    
  }
  //submission, adding to order in firestore
  const handleSubmit = e => {
    console.log(product);
    e.preventDefault();
    addProductToFirestore(setDetailsAreShown, setProduct, product);
    setShowAddPanel(false);
  };
  
  const handleCancel = () => {
    setShowAddPanel(false);
  };
  

  return (
    <>
    <div
      className={`product-container ${
        detailsAreShown ? "product-container-expanded" : undefined
        }`} style={{maxWidth:300}}
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

      <div className="input-button-container">
      <label style={{padding:"16px",fontSize:16, color:"white"}}>Choisir</label>
          <select id="list" name="poissons" onChange={onMySelect} value={myOption.value}> 
          {myOptions.length>0&&myOptions.map(option=>{
               let myoption=option.toString();
               return  <option key={myoption} value={myoption}>{myoption}</option>
             })}
          </select>
          <div style={{display:"flex", justifyContent:"center"}}>{product.img_url!=undefined&&<img style={{width:"80%",marginTop:24}} src={product.img_url}/>}
        </div>
         <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column" }}>
        <label style={{padding:"16px",fontSize:16, color:"white"}}>Nom</label>
          <input
          type="text" 
            name="name"
            label="Nom"
            style={{ fontSize: 18, textAlign:"right" }}
            className="product-input"
            value={product.name}
            onChange={handleChange}
          />
          <label style={{padding:"16px",fontSize:16, color:"white"}}>Type de Vente</label>
          <select id="list2" selected value={product.type_de_vente} name="vente" onChange={onMyVenteSelect} value={myOption.value}>
           <option  value=''>Choisir</option>
            <option  value='a_la_piece'>A la Pièce</option>
            <option  value='au_poids'>Au poids</option>
          </select>  
          <label style={{padding:"16px",fontSize:16, color:"white"}}>Prix/Kilo</label>
       
          <input
          type="number" min="0" step="1"
            name="prix_au_kilo"
            label="Prix au Kilo"
            style={{ fontSize: 18, textAlign:"right" }}
            className="product-input"
            value={product.prix_au_kilo}
            onChange={handleChange}
          />

          {product.type_de_vente==='au_poids'&&<><label style={{padding:"16px",fontSize:16, color:"white"}}>Minimum en G</label>
          <input
          type="number" min="0" step="1"
            name="part_value"
            label="Une Part ="
            style={{ fontSize: 18, textAlign:"right" }}
            className="product-input"
            value={product.minimum}
            onChange={handleChange}
          />
           <label style={{padding:"16px",fontSize:16, color:"white"}}>Quantité Totale en G</label>
           <input
          type="number" min="0" step="1"
            name="quantity"
            label="Quantité disponible"
            style={{ fontSize: 18, textAlign:"right" }}
            className="product-input"
            value={product.quantity}
            onChange={handleChange}
          />
          </>}
          {product.type_de_vente==='a_la_piece'&&<><label style={{padding:"16px",fontSize:16, color:"white"}}>Poids de la Pièce</label>
          <input
          type="number" min="0" step="1"
            name="poids_de_la_piece"
            label="Poids de la piece"
            style={{ fontSize: 18, textAlign:"right" }}
            className="product-input"
            value={product.poids_de_la_piece}
            onChange={handleChange}
          /></>}
       
         
          <div>
          <div style={{textAlign:"center", display:"flex",justifyContent:"center", alignItems:"center"}}>
            <button style={{color:"black", padding:16, marginBottom:16, marginRight:16}}  type="submit">
            POSTER
          </button>
          <button className="input-button" style={{color:"black", padding:16, marginBottom:16, marginLeft:16}} onClick={handleCancel}>
            Annuler
          </button></div>
          
         
          </div>
        </form>
      </div>
    </div>
 </> );
}

export default AddPanel;
