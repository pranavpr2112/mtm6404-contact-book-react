import { db } from "./db";
import {
  collection, getDocs, getDoc, addDoc,
  updateDoc, deleteDoc, doc, query, orderBy
} from "firebase/firestore";

const col = collection(db, "contacts");

export async function listContacts() {
  const q = query(col, orderBy("lastName"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getContact(id) {
  const snap = await getDoc(doc(db, "contacts", id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

export async function createContact(data) {
  const ref = await addDoc(col, data);
  return ref.id;
}

export async function updateContact(id, data) {
  await updateDoc(doc(db, "contacts", id), data);
}

export async function deleteContact(id) {
  await deleteDoc(doc(db, "contacts", id));
}
