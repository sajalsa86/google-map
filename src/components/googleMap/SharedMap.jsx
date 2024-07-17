import "./SharedMap.css";
const SharedMap = () => {
  return (
    <div className="responsive-map mt-10 w-1/2 mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.788076025825!2d89.06137267504987!3d24.63098805440205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc699af786ce2d%3A0x6c9978c58c119a42!2z4Kam4KeN4Kas4KeA4Kaq4KeH4KawIOCmrOCmvuCmnOCmvuCmsA!5e0!3m2!1sen!2sbd!4v1721238656645!5m2!1sen!2sbd"
        width="600"
        height="450"
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default SharedMap;
