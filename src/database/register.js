import { collection, addDoc } from "firebase/firestore";

import db from "../services/firebase.configs";

const userCollectionRef = collection(db, "users");

const registerUser = (data) => {
    return addDoc(userCollectionRef, data);
};

export default registerUser;