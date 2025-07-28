import TipItem from "../Tip-Item/Tip-Item";
import TipTop from "../Tip-Top/Tip-Top";

import tipImg1 from "../../assets/tip-img1.png";
import tipImg2 from "../../assets/tip-img2.png";
import tipImg3 from "../../assets/tip-img3.png";
import tipImg4 from "../../assets/tip-img4.png";

export default function Tip() {
  return (
    <section>
      <div className="container">
        <div className="mb-[100px]">
          <TipTop />
          <ul className="flex justify-between">
            <TipItem
              img={tipImg1}
              title="Наскільки ефективне навчання з дрібницями на утримання та результати"
              text="Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ..."
            />
            <TipItem
              img={tipImg2}
              title="Наскільки ефективне навчання з дрібницями на утримання."
              text="Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ..."
            />
            <TipItem
              img={tipImg3}
              title="Наскільки ефективне навчання з дрібницями на утримання та результати"
              text="Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ..."
            />
            <TipItem
              img={tipImg4}
              title="Наскільки ефективне навчання з дрібницями."
              text="Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ..."
            />
          </ul>
        </div>
      </div>
    </section>
  );
}
