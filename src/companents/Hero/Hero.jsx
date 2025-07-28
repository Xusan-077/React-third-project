import heroImg from "../../assets/hero__img.png";

export default function Hero() {
  return (
    <div className="">
      <div className="container">
        <div className="flex mb-[120px]">
          <div className="">
            <h1 className="text-[60px] text-[#23262D] font-[700] max-w-[700px]">
              <span className="text-[#E36F59]">ITifico</span> — платформа для
              вашого вивчення коду
            </h1>
            <p className="text-[18px] text-[#606268] font-[400] mb-[50px] max-w-[500px]">
              Курси для початківців і просунутих програмістів, а також цікаві
              статті. Приєднуйтесь і дозвольте нам підтримати вас у вашій
              кар’єрі
            </p>
            <button className="hero__btn py-[20px] pl-[25px] pr-[95px] bg-[#E36F59] rounded-[8px] text-[#fff]">
              Call to action
            </button>
          </div>

          <img src={heroImg} alt="" className="w-[640px] h-[582px]" />
        </div>
      </div>
    </div>
  );
}
