import React from "react";

const Contact = () => {
  return (
    <div className="w-[98%] mx-auto rounded-lg bg-green-500 relative -mt-16 mb-5 flex flex-col justify-center items-center py-5 px-2 gap-3 z-10 overflow-hidden">
      <div className="text-center text-3xl">Bizimle İletişime Geçin</div>

      <div className="form-container w-full md:w-2/3">
        <form className="form z-30 ">
          <div className="form-group">
            <label className="text-black text-xl font-medium" htmlFor="tel">
              Telefon Numaranız
            </label>
            <input
              name="tel"
              id="tel"
              type="tel"
              pattern="[0-9]{11}"
              placeholder="0555 555 55 55"
            />
          </div>
          <div className="form-group">
            <label
              className="text-black text-xl font-medium placeholder:text-xl"
              htmlFor="textarea"
            >
              Size Nasıl Yardım Edebiliriz?
            </label>
            <textarea
              className="px-2 py-1 "
              id="textarea"
              name="textarea"
              placeholder="Bu kısmı boş bırakabilirsiniz."
            >
              {" "}
            </textarea>
          </div>
          <button type="submit" className="form-submit-btn">
            Gönder
          </button>
        </form>
      </div>
      <div className="w-[100px] h-[100px] absolute bg-black rounded-full left-10 top-10 -z-50"></div>
      <div className="w-[100px] h-[100px] absolute bg-black rounded-full right-10 bottom-10 -z-50"></div>
    </div>
  );
};

export default Contact;
