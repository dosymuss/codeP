import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Container from "./ui/Container/Container";
import TaskBlock from "./components/TaskBlock/TaskBlock";
import CodeRedactor from "./components/CodeRedactor/CodeRedactor";
import ResultBlock from "./components/ResultBlock/ResultBlock";

import "./App.css"
import axios from "axios";

const CodeRunner = () => {

  const [code, setCode] = useState("")

  const [result, setResult] = useState("")

  const [loading, setLoading] = useState(false)

  const [lang, setLang] = useState("js")


  const postCode = async (code) => {



    const succes = {
      status: "success",
      answer: true
    }

    const error = {
      status: "error",
      answer: "SyntaxError: Unexpected token"
    }

    const randomResult = Math.random() > 0.5 ? succes : error

    try {
      const res = await axios.post("http://localhost:3004/execute", {
        code,
        answer: randomResult,
        lang: lang
      })




      setResult(res.data);


    } catch (error) {
      if (error.response) {
        // Сервер ответил с ошибкой (4xx или 5xx)
        console.error("Ошибка ответа сервера:", error.response.status);
        setResult({
          status: "error",
          error: `Ошибка сервера: ${error.response.status} ${error.response.statusText}`,
        });
      } else if (error.request) {
        // Запрос был отправлен, но ответа нет
        console.error("Сервер не отвечает:", error.request);
        setResult({
          status: "error",
          error: "Сервер недоступен. Проверьте его запуск и соединение.",
        });
      } else {
        // Ошибка при настройке запроса
        console.error("Ошибка запроса:", error.message);
        setResult({
          status: "error",
          error: "Произошла ошибка при выполнении запроса.",
        });
      }
    }
  }

  const handleRun = async () => {
    setLoading(true);

    try {
      await postCode();
    } catch (error) {
      console.error("Ошибка при отправке кода:", error);
      alert("Произошла ошибка! Попробуйте снова.");
    } finally {
      setLoading(false);
    }
  };







  return (
    <>
      <Header handleRun={handleRun} status={loading} />
      <Container>
        <div className="redactorTaskWrap">
          <TaskBlock />
          <CodeRedactor lang={lang} setLang={setLang} setMainCode={setCode} />
        </div>
        <ResultBlock result={result} status={loading} />
      </Container>

    </>
  );
};

export default CodeRunner;
