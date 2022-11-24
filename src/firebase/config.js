import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyBGy647VG-u8ypdnKF6EimkYLMw7VIf31I",
  authDomain: "tasks-rkt.firebaseapp.com",
  projectId: "tasks-rkt",
  storageBucket: "tasks-rkt.appspot.com",
  messagingSenderId: "419709744767",
  appId: "1:419709744767:web:44fd642b5cb313e8a2b14a"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file){
 const storageRef =  ref(storage, v4())
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}