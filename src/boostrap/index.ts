import app from "./app";

const PORT = process.env.PORT || 3000;

export const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Application started on PORT: ${PORT}`);
  });
};
