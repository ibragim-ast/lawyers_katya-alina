import logo from "../../assets/images/logo.svg";
import vk from "../../assets/images/vk-logo.svg";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.branding_container}>
        <img className={styles.logo} src={logo} alt="Логотип" />
        <p className={styles.title}>Екатерина и Алина</p>
      </div>
      <div className={styles.contacts}>
        <a className={styles.phone} href="tel:+79370099999">
          +7 937 00 99 999
        </a>
        <button className={styles.button}>Связаться с нами</button>
        <a href="#">
          <img src={vk} alt="Ссылка на vk" />
        </a>
      </div>
    </header>
  );
};

export default Header;
