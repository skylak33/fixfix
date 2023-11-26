import React, { useState } from 'react';
import { Button } from '@salutejs/plasma-web';
import { TextField } from '@salutejs/plasma-web';

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Добавляем сообщение пользователя в состояние
        setMessages([...messages, { text: inputText, sender: 'user' }]);
        setInputText('');

        try {
            // Отправляем сообщение на сервер
            const response = await fetch('http://localhost:8080/api/messages/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: 'user',
                    content: inputText
                }),

            });
            console.log(JSON.stringify({
                user: 'user',
                content: inputText
            }))
            if (!response.ok) {
                throw new Error('Ошибка при отправке сообщения на сервер');
            }

            // Получаем ответ от сервера
            const responseData = await response.json();

            // Моделируем ответ от "бота"
            setTimeout(() => {
                setMessages([
                    ...messages,
                    { text: `${inputText}`, sender: 'user' },
                    { text: `Ответ от бота: "${responseData.text}"`, sender: 'bot' },
                ]);
            }, 1000);

        } catch (error) {
            console.error('Ошибка:', error.message);
        }
    };

    return (
        <div className='chat'>
            <div style={{ height: '400px', border: '1px solid #ccc', overflow: 'auto' }}>
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
                <Button size='xs' type='submit' view="">Отправить</Button>
            </form>
        </div>
    );
};

export default ChatApp;