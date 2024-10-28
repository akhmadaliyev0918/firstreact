import './style.css';
import { studentlar } from '../../mock/api';
import Card from './card';

const Main = () => {
  return (
    <div className="Main-box">
      {studentlar.map((value, inx) => (
        <Card 
          key={inx}
          ism={value.ism}
          familiya={value.familiya}
          yoshi={value.yoshi}
          fakultet={value.fakultet}
          manzil={value.manzil}
          telefon={value.telefon}
        />
      ))}
    </div>
  );
}

export default Main;
