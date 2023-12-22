import React from "react";

const Maps = () => {
  return (
    <div className="w-[99%] mx-auto rounded-lg bg-green-400 relative -top-20 flex">
      <div className="w-1/2">
        <div>Pendik Doğal Sağlık</div>
        <div>
          Adres : Bahçelievler, Adnan Menderes Blv. No:10 /A, 34893
          Pendik/İstanbul
        </div>
      </div>
      <iframe
        title="Google Harita"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.520377043683!2d29.23202547603424!3d40.882398671368456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caddec7f12a2b9%3A0x222f9da7bdab0127!2zS2liYXJsxLEgUGFuYXggw7xyw7xubGVyaQ!5e0!3m2!1str!2str!4v1703255539573!5m2!1str!2str"
        width="50%"
        height="400"
        loading="lazy"
        className="rounded-r-lg rounded-tr-lg"
      ></iframe>
    </div>
  );
};

export default Maps;
