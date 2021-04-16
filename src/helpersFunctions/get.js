import { config,auth, db } from "../firebase";

export const getProductsOptions=async(setOptions)=>{
  let options=["non"];
  let docRef=db.collection("products_types");
  let newOptions=await docRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.exists) {
          options.push(doc.data().nom)
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      return options  
    });
      console.log(newOptions)
      setOptions(options)
};
export const getDefaultProductValues=async (setProduct,id)=>{
  let docRef=db.collection("products_types").doc(id);
  let PI;
  let getProductInfos=await docRef.get().then((doc) => {
    let data=doc.data();
    if (doc.exists) {
        console.log("Document data:", doc.data());
        console.log("Document data:", doc.data());
        PI={minimum:data.minimum,name:data.nom, img_url:`https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${data.default_image_url}?alt=media`, type_de_vente: data.vente, prix_au_kilo:data.prix_au_kilo}
      setProduct(PI);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  })
  console.log(PI)
  
};

export const getOrder = (setOrder,orderUID) => {
  db.collection("orders")
    .doc(orderUID).collection('products')
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          let obj = doc.data();
          setOrder({ ...obj });
          console.log(obj)
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });
      
  })
    ;
};

export const getUserInfos = setUserInfos => {
  db.collection("users")
    .doc(auth.currentUser.uid)
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        let obj = doc.data();
        setUserInfos({ ...obj });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};



