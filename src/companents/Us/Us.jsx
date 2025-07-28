import UsItem from "../Us-Item/Us-Item";

import img1 from "../../assets/us-img1.png";
import img2 from "../../assets/us-img2.png";
import img3 from "../../assets/us-img3.png";

export default function Us() {
  return (
    <section>
      <div className="container">
        <div className="mb-[160px]">
          <div className="">
            <h2 className="text-[50px] text-[#23262D] text-center font-[700] mb-[40px]">
              Чому програмувати це круто
            </h2>
            <ul className="flex justify-between items-center">
              <UsItem
                img={img1}
                subtitle="Ви можете реалізовувати свої ідеї за допомогою коду"
              />
              <UsItem img={img2} subtitle="Ви можете кодувати будь-де" />
              <UsItem img={img3} subtitle="Програмісти затребувані скрізь" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
