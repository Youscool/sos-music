"use client"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, auth } from "../../config/firebase"
import { useRouter } from "next/navigation";
import { FaGoogle, FaMusic } from "react-icons/fa";

export function SignInForm() {
 const router = useRouter()
 //Connexion via google Provider
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider.addScope("https://www.googleapis.com/auth/userinfo.email"));
      const user = result.user;
      // Enregistrer l'utilisateur dans Firestore
      const userDocRef = doc(db, "user", user.uid);
      const userSnap = await getDoc(userDocRef);
      if (!userSnap.exists()) {
        await setDoc(userDocRef, {
          email: user.email,
          uid: user.uid,
          img: user.photoURL,
          nom: user.displayName || "Anonyme",
          role: "user",
          createdAt: serverTimestamp(),
        });
        console.log('Utilisateur ajouté à firestore');
      }
      console.log('Utilisateur déja existant', userSnap.data());
      console.log("Connexion via Google réussie:", user);

      router.push("/");
    } catch (error) {
      console.error("Erreur lors de la connexion via Google :", error);
    }
  };

  return (
   
      <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card shadow-lg p-4 login-card">
        <div className="text-center mb-4">
          <FaMusic size={50} className="text-primary mb-2" />
          <h3 className="fw-bold">Music Studio</h3>
          <p className="text-muted">Connecte-toi pour accéder à ton univers musical</p>
        </div>

        <button
          className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center gap-2 py-2"
          onClick={signInWithGoogle}
        >
          <FaGoogle size={20} />
          Continuer avec Google
        </button>

        <p className="text-center text-muted mt-4 small">
          © 2026 Music Studio • Tous droits réservés
        </p>
      </div>
      </div>
  );
}