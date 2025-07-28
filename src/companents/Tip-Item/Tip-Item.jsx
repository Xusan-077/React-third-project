import icon1 from "../../assets/tip-icon1.svg";
import icon2 from "../../assets/tip-icon2.svg";

export default function TipItem(props) {
  return (
    <li className="shadow-md w-[285px] cursor-pointer flex flex-col rounded-[8px]">
      <img src={props.img} alt="" className="w-[285px] h-[190px]" />

      <div className="w-[285px] p-[15px] flex flex-col flex-grow">
        <div className="flex gap-[5px] mb-[15px]">
          <span className="text-[12px] text-[#23262D] font-[400] bg-[#A1D8FF] py-[5px] px-[10px]">
            Frontend
          </span>
          <span className="text-[12px] text-[#23262D] font-[400] bg-[#FFD4BC] py-[5px] px-[10px]">
            Tips
          </span>
          <span className="text-[12px] text-[#23262D] font-[400] bg-[#BEC5FF] py-[5px] px-[10px]">
            C#
          </span>
        </div>

        <div className="pb-[16px] flex-grow">
          <h4 className="text-[16px] text-[#23262D] font-[700] mb-[15px] hover:text-[#E36F59] hover:underline">
            {props.title}
          </h4>
          <p className="text-[14px] text-[#606268] font-[400] ">{props.text}</p>
        </div>

        <div className="flex items-center justify-between pt-[16px] border-t-[2px] border-t-[#E2E7EB] mt-auto">
          <span className="flex items-center gap-[10px]">
            <img src={icon1} alt="" className="w-[14px] h-[14px]" />
            <span>5.05.2022</span>
          </span>
          <span className="flex items-center gap-[10px]">
            <img src={icon2} alt="" className="w-[14px] h-[14px]" />
            <span>48</span>
          </span>
        </div>
      </div>
    </li>
  );
}
