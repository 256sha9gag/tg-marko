const tg = window.Telegram.WebApp;

export function useTelegram() {
  return {tg, queryId: tg.initDataUnsafe?.query_id,};
};

