import React, { useState } from 'react';

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Добавляем сообщение пользователя в состояние
        setMessages([...messages, { text: inputText, sender: 'user' }]);
        setInputText('');

        // Моделируем ответ от "бота"
        setTimeout(() => {
            setMessages([
                ...messages,
                { text: `${inputText}`, sender: 'user' },
                { text: `Ответ от бота на: "${inputText}"`, sender: 'bot' }, // вместо input text - ответ бота
            ]);
        }, 1000);
    };

    return (
        <div className='chat'>
            <div style={{ height: '300px', border: '1px solid #ccc', overflow: 'auto' }}>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        style={{
                            padding: '8px',
                            borderBottom: '1px solid #eee',
                            textAlign: message.sender === 'user' ? 'right' : 'left',
                            whiteSpace: 'pre-wrap', // Добавляем это свойство
                        }}
                    >
                        <strong>{message.sender === 'user' ? 'Вы:' : 'Бот:'}</strong> {message.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Введите ваш вопрос"
                />
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default ChatApp;