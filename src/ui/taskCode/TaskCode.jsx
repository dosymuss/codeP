import styles from "./TaskCode.module.scss";

const TaskCode = () => {
  return (
    <div className={styles.main}>
      <pre>
        <code>
          <span className={styles.pink}>let</span>{" "}
          <span className={styles.grey}>word</span> ={" "}
          <span className={styles.green}>"Kartofan"</span>
        </code>
      </pre>
      <pre>
        <code>
          <span className={styles.blue}>isPalindromes</span>(
          <span className={styles.red}>word</span>){" "}
          <span className={styles.grey}>// false</span>
        </code>
      </pre>
    </div>
  );
};

export default TaskCode;
