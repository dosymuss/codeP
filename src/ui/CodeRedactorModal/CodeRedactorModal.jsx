import { useEffect, useRef } from 'react'

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import LangSelect from '../langSelect/LangSelect';

import bigSize from "../../assets/bigSize.svg"

import styles from "./CodeRedactorModal.module.scss"

const CodeRedactorModal = ({ isOpen, setIsOpen, code, setCode, lang, setLang }) => {
    const dialogRef = useRef(null);



    // Открыть модалку
    const openModal = () => {
        dialogRef.current?.showModal();
    };

    // Закрыть модалку
    const closeModal = () => {
        dialogRef.current?.close();
        setIsOpen(false)
    };

    const handleBackdropClick = (e) => {
        if (e.target === dialogRef.current) {
            closeModal();
        }
    };

    useEffect(() => {
        if (isOpen) {
            openModal()
        } else {
            closeModal()
        }
    }, [isOpen])


    return (
        <div className={styles.dialogWrap}>
            < dialog onClick={handleBackdropClick} ref={dialogRef} className={styles.dialog} >
                <div className={styles.main}>
                    <div className={styles.head}>
                        <p>Your code</p>
                        <div>
                            <LangSelect setLang={setLang} />
                            <button onClick={() => closeModal()}>
                                <img src={bigSize} alt="" />
                            </button>
                        </div>
                    </div>
                    <CodeMirror
                        value={code}
                        height="100vh"
                        extensions={lang === "js" ? [javascript()] : [python()]}
                        theme="dark"
                        onChange={(value) => setCode(value)}
                    />

                </div>
            </dialog >

        </div>
    );
}

export default CodeRedactorModal
