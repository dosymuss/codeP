import TaskCode from "../../ui/taskCode/TaskCode";
import styles from "./TaskBlock.module.scss";

const TaskBlock = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.taskName}>Palindrome Checker</h2>

      <div className={styles.desc}>
        <strong>Description:</strong>
        <p>
          A palindrome is a word, phrase, number, or other sequence of
          characters that reads the same forward and backward (ignoring spaces,
          punctuation, and capitalization). Write a function that determines
          whether a given string is a palindrome.
        </p>
      </div>
      <div className={styles.codeBlock}>
        <strong>Examples:</strong>
        <TaskCode />
      </div>
    </div>
  );
};

export default TaskBlock;
