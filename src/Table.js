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
    setTimeout(SecondPageComponentLink, 1000)
    // Здесь вы можете использовать item.id или другие свойства объекта item
  };
  const SecondPageComponentLink = () => {
    window.location.href = "second";
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
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
           
            <tr key={item.id}>
              <td>{item.id}</td>
              
              <Button view='' onClick={() => callId(item)} >{item.name}</Button>
    
              <Checkbox readOnly='true' />
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
