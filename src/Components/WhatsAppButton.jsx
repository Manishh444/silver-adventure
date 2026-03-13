import whatsappIcon from "../assets/whatsapp-icon.webp";
// import InstaIcon from "../assets/insta.jpg";
/**
 * WhatsApp Floating Button Component
 * Provides a floating action button that opens WhatsApp chat
 */
const WhatsAppButton = () => {
  // WhatsApp phone number (replace with actual business number)
  const whatsappNumber = "+919900064128"; // Replace with actual number
  const message = 'Hi! I would like to know more about your services.';
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // const openInsta = () => {
  //   const url = `https://www.instagram.com/googlesynergy?igsh=MXNvMnA3YXU5azdjMg==`;
  //   window.open(url, "_blank");
  // };

  return (
    <>
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contact us on WhatsApp">
        <img src={whatsappIcon} alt="WhatsApp" className="w-16 h-16" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
        </span>
      </button>
      {/* <button
        onClick={openInsta}
        className="fixed bottom-28 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contact us on WhatsApp">
        <img src={InstaIcon} alt="WhatsApp" className="w-16 h-16 rounded-2xl" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on Instagram
        </span>
      </button> */}
    </>
  );
};

export default WhatsAppButton;