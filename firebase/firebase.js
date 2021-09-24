import * as app from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseConfig from "./config";
import { getFirestore } from "firebase/firestore";

class Firebase {
  constructor() {
    if (!app.getApps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = getAuth();
    this.db = getFirestore();
  }

  //Registra un usuario

  async registrar(nombre, email, password) {
    const nuevoUsuario = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    return await updateProfile(nuevoUsuario.user, {
      displayName: nombre,
    });
  }
  //Inicia la sesion de un usuario
  async login(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  //Cierra la Sesion del Usuario

  async cerrarSesion() {
    await this.auth.signOut();
  }
}
const firebase = new Firebase();
export default firebase;
