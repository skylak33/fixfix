import React from 'react';
import './App.css';

const Table = () => {
  const data = [
    { label: 'ФИО', value: 'Иванов Иван Иванович' },
    { label: 'Дата рождения', value: '05.06.1983' },
    { label: 'Паспортные данные', value: 'XXXX XXXXXX (возможно указание предыдущих)' },
    { label: 'Адрес регистрации', value: 'г. Москва' },
    { label: 'Адрес проживания', value: 'г. Москва' },
    { label: 'Семейное положение', value: 'Женат' },
    { label: 'Наличие детей', value: 'Да' },
    { label: 'Место работы', value: 'ООО «Ромашка»' },
    { label: 'Стаж работы', value: '10 лет и 2 мес.' },
    { label: 'Должность', value: 'Генеральный директор' },
    { label: 'Ежемесячный подтвержденный доход по месту работы', value: '175 615,27 руб.' },
    { label: 'Документ, подтверждающий доход', value: '2-НДФЛ (должен быть в составе приложенных документов)' },
    { label: 'Ежемесячный дополнительный доход', value: '150 000 руб.' },
    { label: 'Дополнительный доход подтвержден документально', value: 'Нет (при наличии приложен документ)' },
    { label: 'Источник дополнительного дохода', value: 'Доходы от оказания консалтинговых услуг' },
    { label: 'Наличие сбережений на счетах в Банке', value: 'Да (при наличии – категория и размер)' },
  ];

  return (
    <div className="table-container">
      <table>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="label">{item.label}</td>
              <td className="value">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;