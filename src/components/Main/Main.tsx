import logo from "../../assets/images/logo.svg";
import Services from "../Services/Services";
import styles from "./Main.module.css";

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <div className={styles.katya}></div>
        <h1 className={styles.title}>Профессиональные юридические услуги </h1>
        <div className={styles.alina}></div>
      </div>
      <section className={styles.biography}>
        <div className={styles.text_block + " " + styles.text_block_left}>
          <p className={styles.profession}>Адвокат</p>
          <p className={styles.name}>Сивкова Екатерина Алексеевна </p>
          <p className={styles.description}>
            Имею многолетний опыт работы по следующим направлениям: семейные
            споры, наследственные споры, любые вопросы по недвижимости
            (узаконение, сделки), арбитраж, корпоративные споры,
            административные и уголовные дела.
          </p>
          <blockquote className={styles.quote}>
            -“Моя работа - защита ваших прав и законных интересов по букве
            закона”
          </blockquote>
        </div>
        <div className={styles.logo_title}>
          <img className={styles.logo} src={logo} alt="Логотип" />
          <h2 className={styles.title_text}>Екатерина и Алина</h2>
        </div>
        <div className={styles.text_block + " " + styles.text_block_right}>
          <p className={styles.profession}>Юрист</p>
          <p className={styles.name}>Абдрахманова Алина Рамилевна</p>
          <p className={styles.description}>
            Стаж работы более 15 лет в различных отраслях права: гражданского,
            арбитражного, наследственного, семейного и др. Услуги предоставляю
            во всех судебных инстанциях Республики Башкортостан и по всем
            регионам России
          </p>
          <blockquote className={styles.quote}>
            -“Приоритетом моей профессиональной деятельности являются интересы
            доверителя!”
          </blockquote>
        </div>
      </section>
      <Services />
    </main>
  );
};

export default Main;
