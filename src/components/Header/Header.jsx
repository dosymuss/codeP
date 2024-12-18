import logo from "../../assets/logo.svg";

import LangSelect from "../../ui/langSelect/LangSelect"
import Spinner from "../../ui/spinner/Spinner";

import styles from "./Header.module.scss";

const Header = ({ handleRun, status }) => {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.logo} src={logo} alt="" />
        <h1>CodeP</h1>
      </div>

      <div className={styles.btnsWrap}>
        <button onClick={handleRun} className={styles.runBtn}>
          {status ?
            <Spinner style={{ width: "12px", height: "12px" }} /> :
            "Run"
          }
        </button>
      </div>
    </header>
  );
};

export default Header;
