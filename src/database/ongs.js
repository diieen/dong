import { getDocs, collection } from "firebase/firestore";

import db from "../services/firebase.configs";

const userCollectionRef = collection(db, "ongs");

const getOngs = async () => {
  const data = await getDocs(userCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
};

export default getOngs();