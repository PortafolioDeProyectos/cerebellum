import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
    this.db = app.firestore();
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
