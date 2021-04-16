import React, { useContext, useEffect, useState } from "react";
import { getUserInfos, listenForProductDetails, getOrder } from "../helpersFunctions/get.js";
import { UserContext } from "../usercontext";
import ProductsList from "../components/ProductsList";
import PanierList from "../components/PanierList";
import ActionNav from "../components/ActionNav";
import bluehook from "../img/bluehook.svg";
import "../css/etal.css";
import { auth, db } from "../firebase";
import firebase from "firebase";
import Admin from "../components/Admin"
//Main User Page - Setting Up userContext
const Etal = () => {
  const { userInfos, setUserInfos } = useContext(UserContext);
  const [products,setProducts] = useState([]);
  const [order, setOrder]=useState([]);
  const [orderUID,setOrderUID]= useState('initial');
  const [totalPrice, setTotalPrice]= useState(0);
  const [newOrderAlert, setNewOrderAlert]=useState(0);
  useEffect(() => {
    getUserInfos(setUserInfos);
  }, []);

  console.log(userInfos)
  useEffect(() => {
    let mounted=true;
    const unsubscribe = db.collection('products')
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          let newProducts=[...products];
           snapshot.forEach((p)=>{
             newProducts.push(p.data());
            console.log("PRODUCTS SNAPSHOT IN ETAL")
            console.log(products)
           });
          if(mounted=true) setProducts(newProducts);
        } else{
          console.log("EMPTY SNAPSHOT IN ETAL")
          console.log(products)
        }
      })

  return () => {
      unsubscribe();
      let mounted=false;
    }
  }, [firebase])
  useEffect(()=>{
    let mounted=true;
    let unsubscribe=()=>{};
    if(orderUID!==''){
        unsubscribe=db.collection("orders")
        .doc(orderUID).collection('products')
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              let obj = doc.data();
              console.log(obj)
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          });
          
      })
        ;
      }
    return ()=>{
      unsubscribe();
      mounted=false;
    }
  },[firebase])
  useEffect(() => {
    //checking for orders
    let mounted=true;
    console.log("ORDERCYCLE STARTS");
    if(orderUID==='initial'&&userInfos.username!==""){
      let newOrderUID=userInfos.username.toString()+Math.floor(Math.random()*10000)
      setOrderUID(newOrderUID.toString());
    }else{console.log("WAITING FOR USERINFOS IN PANIERLIST")}
  return () => {
      mounted=false
    }
  },[userInfos])
  
  return (
    <div className="etal-container">
      <div className="etal-header">
        <img src={bluehook} style={{ height: "2rem", marginRight: "1rem" }} />
        <h2>{userInfos.username}</h2>
      </div>
      {userInfos.admin===true&&<Admin/>}
      <div style={{display:"flex", justifyContent:"flex-end"}}><ActionNav userInfos={userInfos}/></div>
      <h2 className="etal-intro">Produits du Jour</h2>
      {userInfos && products.length>0 &&<ProductsList setNewOrderAlert={setNewOrderAlert} setTotalPrice={setTotalPrice} userInfos={userInfos} products={products} order={order} setOrder={setOrder} orderUID={orderUID} setOrderUID={setOrderUID}/>|| <p style={{margin:36}}>Pas de Produits pour l'instant</p>}
      <h2 className="etal-intro">Votre Panier</h2>
      {orderUID!==null&&console.log("ORDERUID IN ETAL: "+orderUID.toString())}
      {userInfos.username!==''&&order!==[] && <PanierList newOrderAlert={newOrderAlert} setOrderUID={setOrderUID} userInfos={userInfos} setTotalPrice={setTotalPrice} totalPrice={totalPrice} orderUID={orderUID} order={order} setOrder={setOrder} />}
    </div>
  );
};

export default Etal;
