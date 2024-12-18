import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { useEffect, useState } from "react";

import LangSelect from "../../ui/langSelect/LangSelect";
import CodeRedactorModal from "../../ui/CodeRedactorModal/CodeRedactorModal";

import bigSize from "../../assets/bigSize.svg"

import styles from "./CodeRedactor.module.scss"



const CodeRedactor = ({ setMainCode, lang, setLang }) => {
  const [code, setCode] = useState("");
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMainCode(code)
  }, [code])



  return (
    <div>
      <div className={styles.main}>
        <div className={styles.head}>
          <p>Your code</p>
          <div>
            <LangSelect setLang={setLang} />
            <button onClick={() => setIsOpen(true)}>
              <img src={bigSize} alt="" />
            </button>
          </div>
        </div>
        <CodeMirror
          value="// Напиши свой код здесь"
          height="400px"
          extensions={lang === "js" ? [javascript()] : [python()]}
          theme="dark"
          onChange={(value) => setCode(value)}
        />

      </div>
      <CodeRedactorModal setLang={setLang} isOpen={isOpen} code={code} setCode={setCode} lang={lang} setIsOpen={setIsOpen} />
    </div>
  )
}

export default CodeRedactor