export const getDesignTokens = (mode: "dark" | "light") => ({
  mode,
  palette: {
    ...(mode === "light"
      ? {
          primary: { main: "#523634" },
          secondary: { main: "#DDC5A2" },
          info: { main: "#B6452C" },
          brigth: { main: "##f54545" },
        }
      : {
          primary: { main: "#DDC5A2" },
          secondary: { main: "#523634" },
          info: { main: "#B6452C" },
          brigth: { main: "##f54545" },
        }),
  },
});

// #301B28
// Какао
// #DDC5A2
// Глазурь
// #B6452C - кнопки
// Тоффи
// #523634
// Шоколад
