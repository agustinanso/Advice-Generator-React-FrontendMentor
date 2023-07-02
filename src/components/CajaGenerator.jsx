import { useState, useEffect } from "react";

const CajaGenerator = () => {
  const [adviceObject, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingAdvice, setLoadingAdvice] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false); // Estado del botón

  const getAdvice = () => {
    setLoading(true);
    setLoadingAdvice("");
    setButtonDisabled(true); // Deshabilitar el botón mientras se carga
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
        setLoading(false);
        setLoadingAdvice(data.slip.advice);
        setButtonDisabled(false); // Habilitar el botón después de cargar
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setButtonDisabled(false); // Habilitar el botón en caso de error
      });
  };

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="font-[manrope] bg-[#323a49] flex flex-col items-center justify-center sm:w-[540px] max-w-[540px] pt-12 px-8 pb-20 w-11/12 relative rounded-3xl m-auto shadow-md shadow-black/50">
      {loading ? (
        <>
          <p className="text-[#52ffa8] mb-4 text-[14px] sm:text-[18px]">
            ADVICE #{adviceObject.id}
          </p>

          <div>
            <div className="p-10 border-8 border-[#52ffa8] border-solid rounded-full w-26 h-26 border-t-transparent animate-spin mt-10 mb-16"></div>
          </div>
        </>
      ) : (
        <>
          <p className="text-[#52ffa8] mb-4 text-[14px] sm:text-[18px]">
            ADVICE #{adviceObject.id}
          </p>
          <p className="text-white sm:text-[28px] text-[20px] mb-10 text-center max-w-[450px]">
            &quot;{loadingAdvice}&quot;
          </p>
        </>
      )}

      <img src="/pattern-divider-desktop.svg" className="hidden sm:block" />
      <img src="/pattern-divider-mobile.svg" className="block sm:hidden" />
      <div
        onClick={getAdvice}
        disabled={buttonDisabled}
        className="bg-[#52ffa8] w-[64px] h-[64px] rounded-full flex flex-col justify-center items-center cursor-pointer absolute -bottom-9 hover:drop-shadow-3xl">
        <img src="icon-dice.svg" />
      </div>
    </div>
  );
};

export default CajaGenerator;
