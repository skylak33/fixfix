import { Button } from '@salutejs/plasma-ui';
import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { Checkbox } from '@salutejs/plasma-ui';
import './App.css';


const MyTable = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    // Функция, которая получает данные с сервера
    const fetchDataFromAPI = async () => {
      try {
        // Выполняем запрос к серверу и получаем данные
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const fetchedData = await response.json();
        
        // Устанавливаем полученные данные в состояние
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Вызываем функцию для получения данных при загрузке компонента
    fetchDataFromAPI();
  }, []); // Пустой массив зависимостей, чтобы вызвать useEffect только один раз

  const callId = (item) => {
    console.warn(item);
    setTimeout(SecondPageComponentLink, 0)
    // Здесь вы можете использовать item.id или другие свойства объекта item
  };
  const SecondPageComponentLink = () => {
    window.location.href = "formpage";
        console.warn("1")
  }
  //const navigateToSecondPage = () => {
   // navigate('/second');
  //};
  // Рендер компонента с использованием данных из состояния

  

  return (
    <div className='table-container'>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
           
            <tr key={item.id}>
              <td>{item.id}</td>
              <td className="button-cell">
              <Button view='clear' size='s' onClick={() => callId(item)}>
                {item.name}
              </Button>
            </td>
            <td className="checkbox-cell">
              <Checkbox disabled='true' readOnly='true' />
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
