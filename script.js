// Importamos Firebase (usa siempre "type=module" en HTML)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// ⚙️ Configuración de tu proyecto Firebase (reemplazá estos datos con los tuyos)
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_BUCKET.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔹 Ejemplo: guardar datos desde un formulario
const form = document.getElementById("formulario");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;

    try {
      await addDoc(collection(db, "contactos"), {
        nombre,
        mensaje,
        fecha: new Date().toISOString()
      });
      alert("✅ Mensaje guardado correctamente");
      form.reset();
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("❌ Ocurrió un error al guardar los datos");
    }
  });
}
