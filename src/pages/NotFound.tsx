import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center px-6">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Página no encontrada</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary">
          <a href="/#/" className="underline hover:text-primary/90">
            Volver al inicio
          </a>
          <a href="/#/politica-privacidad" className="underline hover:text-primary/90">
            Política de privacidad
          </a>
          <a href="/#/peliculas-arquitectonicas" className="underline hover:text-primary/90">
            Películas arquitectónicas
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
