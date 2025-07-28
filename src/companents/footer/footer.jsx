import FooterItem from "../footer-Item/Footer-Item";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#2D3034] text-[#fff]">
        <div className="container">
          <div className="flex items-center justify-between py-[40px] ">
            <h2 className="text-[16px] font-[400]">Made with by Yarashov Xusan ©2025</h2>

            <ul className="flex gap-[40px]">
              <FooterItem text="Linkedin" />
              <FooterItem text="Telegram" />
              <FooterItem text="Gmail" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
