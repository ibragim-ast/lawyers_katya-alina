import Card from "../Card/Card";
import styles from "./Services.module.css";
import { data } from "../../../data/data";

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Наши услуги</h2>
      <div className={styles.cards}>
        {data.map((item, i) => (
          <Card key={i} title={item.title} image={item.img} list={item.list} />
        ))}
      </div>
    </section>
  );
};

export default Services;
