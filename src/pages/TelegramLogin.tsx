import { useEffect, useState } from "react";
import axios from "axios";

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
}


const TelegramAuth = () => {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  const handleAuth = async () => {
    const userData = window.Telegram?.WebApp?.initDataUnsafe;

    if (!userData || !userData.id) {
      console.error("Error en la autenticación");
      return;
    }

    const response = await axios.post(
      "http://127.0.0.1:8000/telegram/login",
      userData
    );

    if (response.data.status === "success") {
      setUser(response.data.user); 
      alert("Autenticación exitosa");
    } else {
      alert("Error de autenticación");
    }
  };

  return (
    <div>
      <h2>Iniciar sesión con Telegram</h2>
      <button onClick={handleAuth}>Autenticarse</button>

      {user && (
        <div>
          <h3>Bienvenido, {user.first_name}</h3>
        </div>
      )}
    </div>
  );
};

export default TelegramAuth;
