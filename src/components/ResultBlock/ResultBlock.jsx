import { useEffect } from "react"
import bigSize from "../../assets/bigSize.svg"
import Spinner from "../../ui/spinner/Spinner"

import styles from "./ResultBlock.module.scss"

const ResultBlock = ({ result, status }) => {

    useEffect(() => {
        console.log(result);

    }, [result])


    return (
        <div className={styles.main}>
            <div className={styles.head}>
                <p>Answer</p>
            </div>
            <div style={status ? { display: "flex", justifyContent: "center", alignItems: "center", height: "100%" } : { padding: "20px 20px" }}>
                {status ?
                    <Spinner /> :
                    <p className={styles.resultText} style={{ color: result?.answer?.status === "error" ? "#FE5F55" : "#6CAC6A" }}>{`${!result ? "" : result?.answer?.answer}`}</p>
                }
            </div>
        </div>
    )
}

export default ResultBlock