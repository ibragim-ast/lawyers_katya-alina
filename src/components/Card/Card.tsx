import styles from "./Card.module.css";

interface CardProps {
  title: string;
  image: string;
  list: string[];
}

const Card: React.FC<CardProps> = ({ title, image, list }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <img className={styles.image} src={image} alt={title} />
      <ul className={styles.list}>
        {list.map((item, i) => (
          <li className={styles.list_item} key={i}>
            <p className={styles.text}>{item}</p>
          </li>
        ))}
      </ul>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Консультация</button>
        <a className={styles.link} href="#">
          Подробнее
        </a>
      </div>
    </div>
  );
};

export default Card;
