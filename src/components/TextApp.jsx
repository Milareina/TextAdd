import { useState } from 'react';
import './TextApp.css'

function TextApp() {
    const [inputText, setInputText] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleButtonClick = () => {
        setDisplayText(inputText.toUpperCase());
        setInputText('');
    };

    return (
        <div className="text-app">
            <h2>Список желаний</h2>
            <div className="input-container">
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Введите текст"
                    className="text-input"
                />
                <button
                    onClick={handleButtonClick}
                    className="add-button"
                >
                    Нажми
                </button>
            </div>
            {displayText && (
                <div className="display-text">
                    {displayText}
                </div>
            )}
        </div>
    );
}

export default TextApp;