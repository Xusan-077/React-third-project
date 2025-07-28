import mail from "../../assets/mail.svg";
import user from "../../assets/user.svg";

export default function Contact() {
  return (
    <section>
      <div className="container">
        <div className="bg-[#fff] shadow-2xl py-[60px] px-[90px] rounded-[20px] mb-[160px]">
          <div className="mb-[50px] ">
            <h2 className="text-[50px] text-[#23262D] font-[700] mb-[10px]">
              Кодування ніколи не було простіше!
            </h2>
            <p className="text-[18px] text-[#606268] font-[#606268] ">
              Не хочете пропускати жодних новин, тоді підпишіться на нашу
              розсилку.
            </p>
          </div>

          <div className="">
            <form action="#">
              <div className="flex gap-[30px]">
                <div className="border-[2px] border-[#E2E7EB] w-[390px] py-[0px] pl-[30px] rounded-[8px] flex justify-between relative">
                  <input
                    type="text"
                    placeholder="Повне ім’я"
                    className="outline-none"
                  />
                  <span className="w-[3px] h-[40px] bg-[#E2E7EB] block absolute right-[60px] top-[12px]"></span>
                  <img src={user} alt="" className="w-[16px] h-[16px] absolute top-[23px] right-[20px]" />
                </div>
                <div className="border-[2px] border-[#E2E7EB] w-[390px] py-[0px] pl-[30px] rounded-[8px] flex justify-between relative">
                  <input
                    type="text"
                    placeholder="Ваша Email адреса"
                    className="outline-none"
                  />
                  <span className="w-[3px] h-[40px] bg-[#E2E7EB] block absolute right-[60px] top-[12px]"></span>
                  <img src={mail} alt="" className="w-[16px] h-[16px]  absolute top-[23px] right-[20px]" />
                </div>
                <button className="contact__btn text-[16px] text-[#fff] py-[20px] pl-[27px] pr-[70px] bg-[#E36F59] rounded-[8px]">
                  Підписатися
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
