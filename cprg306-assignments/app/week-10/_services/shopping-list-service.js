import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export async function getItems(userId) {
  try {
      const items = [];
      const querySnapshot = await getDocs(collection(db, `users/${userId}/items`));

      querySnapshot.forEach((doc) => {
          const data = doc.data();
          items.push({
              id: doc.id,
              name: data.name,
              quantity: data.quantity,
              category: data.category
          });
      });

      return items;
  } catch (error) {
      console.error("Error getting items:", error);
      return [];
  }
}

export async function addItem(userId, item) {
    try {
      const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
      return docRef.id;
    } catch (error) {
      console.error("Error adding item:", error);
      return null;
    }
  }