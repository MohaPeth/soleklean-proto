
import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "221781125353"; // Numéro sans espaces ni caractères spéciaux
    const message = encodeURIComponent("Bonjour, je souhaite obtenir plus d'informations sur vos services de nettoyage.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};
