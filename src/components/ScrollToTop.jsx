import { useEffect } from "react";
import { useNavigationType, useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Solo hace scroll cuando se navega (no en el retroceso del navegador)
    if (navigationType !== "POP") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return null;
}
