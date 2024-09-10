import Card from "../Card/Card";
import styles from "./Services.module.css";
import { data } from "../../../data/data";
import whatsappIcon from "../../assets/images/icons-whatsapp2.svg";
import telegramIcon from "../../assets/images/icons-telegram.svg";

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Наши услуги</h2>
      <div className={styles.cards}>
        {data.map((item, i) => (
          <Card key={i} title={item.title} image={item.img} list={item.list} />
        ))}
      </div>
      <a className={styles.whatsapp} href="#">
        <img src={whatsappIcon} alt="Whatsapp icon" />
      </a>
      <a className={styles.telegram} href="#">
        <img src={telegramIcon} alt="Telegram icon" />
      </a>
    </section>
  );
};

export default Services;
