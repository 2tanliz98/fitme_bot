export {};

declare global {
  interface Window {
    Telegram: TelegramWebApp;
  }
}

interface TelegramWebApp {
  WebApp: {
    initDataUnsafe: {
      id?: number;
      first_name?: string;
      last_name?: string;
      username?: string;
      photo_url?: string;
      auth_date?: number;
      hash?: string;
    };
    ready: () => void;
  };
}
