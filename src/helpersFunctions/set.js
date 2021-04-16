import { auth, db } from "../firebase";
import firebase from "firebase";



export const addProductToFirestore=(setDetailsAreShown, setProduct, product)=>{
  let docId;
  let newProduct;
  if(product.type_de_vente==='a_la_piece'){
    newProduct={...product, quantity:product.poids_de_la_piece,minimum:product.poids_de_la_piece};
  }else{newProduct=product}
  db.collection('products').add(newProduct).then((doc)=>{
    docId=doc.id;
    db.collection("products").doc(doc.id).set({id:doc.id, isAvailable:true},{merge:true})
  }).then(()=>{
    setProduct({...newProduct,id:docId, isAvailable:true});
    setDetailsAreShown(false);
  }).catch(function(error) {
    console.error("Error adding document: ", error);
});
};

export const setFirestoreProductNewQuantity = async (productUID, value, operator) => {
  //operator gives us 'plus' or minus'
  let numberValue=parseInt(value,10);
  if(operator==='minus'){numberValue=-Math.abs(numberValue)}
  console.log("VALUE****************"+numberValue)
  //getting real time total quantity from firestore
  let numberQuantity= await db.collection("products")
    .doc(productUID).get().then((doc) => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          return doc.data().quantity
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
      return "ERROR"
  });
  //calculating new quantity
  const newValue=numberQuantity+numberValue;
  console.log('newValue= '+ newValue)
  console.log("VALUE****************"+newValue)
    //setting new Q in product
 db.collection("products")
    .doc(productUID)
    .update({ quantity:newValue })
    .then(function() {
      console.log("Quantity Value for my product successfully updated!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
};

export const addProductToOrder = async (orderUID, product,username,userUID,price,quantity) => {
  //setting a time for the product
  const sec = Math.round(Date.now() / 1000)
  let newProductInOrder = {
    orderUID:orderUID,
    name:product.name,
    quantity:quantity,
    price:price,
    type_de_vente:product.type_de_vente,
    productUID:product.id,
    postedAt: sec,
    sentBy: username,
    userUID:userUID,
  };
  db.collection("orders")
    .doc(orderUID
      )
    .collection("products")
    .add(newProductInOrder).then(async (doc)=>{
      let docId=doc.id;
    await db.collection("orders").doc(orderUID).collection('products').doc(docId).update({id:docId, isAvailable:true})
      console.log("product added to "+orderUID + ' '+ docId);
      //update product quantity
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
};

export const removeProductFromOrder = async (productId, orderUID) => {
  console.log("REMOVE FROM ORDER")
  if(orderUID){
  //delete order
  console.log("REMOVE PRODUCT FROM ORDER")
  await db.collection("orders")
  .doc(orderUID)
  .collection("products")
  .doc(productId).delete().then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
});}else{
  console.log("error removing product from order")
  console.log(orderUID, productId)
}
};

export const confirmOrder= (setOrderConfirmed, orderUID, username, deliveryAddress, phone, deliveryTime, totalPrice)=>{
  let today=new Date()
  let infos={id:orderUID, date:today.toDateString(),status:"confirmed", username:username, address: deliveryAddress, phone:phone, time:deliveryTime, price:totalPrice}
db.collection("orders").doc(orderUID).set({...infos},{merge:true}).then(()=>{
  setOrderConfirmed(true);
})
}




export const addContact = (contactUID, userUID) => {
  db.collection("users")
    .doc(userUID)
    .update({
      contacts: firebase.firestore.FieldValue.arrayUnion(contactUID)
    })
    .then(() => {
      console.log("friend ADDED");
    });
};

