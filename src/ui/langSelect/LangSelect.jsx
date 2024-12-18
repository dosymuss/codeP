import { useState, useRef, useEffect } from "react";
import styles from "./LangSelect.module.scss";

const LangSelect = ({ setLang }) => {
    const [isOpen, setIsOpen] = useState(false); // Состояние для показа/скрытия списка
    const [selectedLang, setSelectedLang] = useState("Javascript"); // Выбранный язык

    const dropdownRef = useRef(null); // Ссылка на корневой элемент компонента

    const languages = [
        { label: "Javascript", value: "js" },
        { label: "Python", value: "python" },
    ];

    // Обработчик выбора языка
    const handleSelect = (lang) => {
        setSelectedLang(lang.label);
        setLang(lang.value)
        setIsOpen(false); // Закрываем список
    };

    // Обработчик клика вне компонента
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false); // Закрыть список
        }
    };

    // Добавляем и убираем обработчик кликов на весь документ
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.main} ref={dropdownRef}>
            <button
                className={styles.mainBtn}
                onClick={() => setIsOpen((prev) => !prev)} // Открыть/закрыть список
            >
                {selectedLang}
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    {languages.map((lang) => (
                        <button
                            key={lang.value}
                            className={styles.optionBtn}
                            onClick={() => handleSelect(lang)} // Выбор языка
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LangSelect;
