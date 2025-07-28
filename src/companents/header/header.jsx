import HeaderItem from "../Header-Item/Header-Item";
import sidelogo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between py-[20px] mb-[50px]">
          <a href="#">
            <img src={sidelogo} alt="" />
          </a>

          <div className="flex items-center">
            <ul className="flex  mr-[50px]">
              <HeaderItem text="Блог" />
              <HeaderItem text="Курси" />
              <HeaderItem text="Про мене " />
              <HeaderItem text="Підписка на сайт" />
              <HeaderItem text="Підтримка" />
            </ul>

            <div className="flex border-[2px] border-[#E2E7EB] rounded-[10px]">
              <button className="py-[5px] px-[10px] text-[14px] text-[#23262D] font-[600] hover:bg-[#E36F59] hover:text-[#fff] rounded-l-[10px]">
                UKR
              </button>
              <button className="py-[5px] px-[10px] text-[14px] text-[#23262D] font-[600] hover:bg-[#E36F59] hover:text-[#fff] rounded-r-[10px]">
                ENG
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
