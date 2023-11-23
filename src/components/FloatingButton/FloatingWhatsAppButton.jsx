import { useState, useEffect } from "react";
//O useState controla se o botão deve ser visível ou não.
//O useEffect é usado para definir um temporizador que definirá isVisible como true após 2 segundos.

import { SiWhatsapp } from "react-icons/si";
import { FloatingButton } from "./styles";

function FloatingWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null; // Retorna null se o botão não for visível
  }

  return (
    <>
      <FloatingButton
        href="https://api.whatsapp.com/send?phone="
        target="_blank"
      >
        <SiWhatsapp className="WhatsAppIcon" />
      </FloatingButton>
    </>
  );
}

export default FloatingWhatsAppButton;
