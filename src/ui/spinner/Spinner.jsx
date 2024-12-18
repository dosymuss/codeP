import styles from './Spinner.module.scss';

const Spinner = ({style}) => {
    return (
        <span style={style} className={styles.loader}>

        </span>
    )
}

export default Spinner