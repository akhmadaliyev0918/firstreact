import React, { useState } from 'react';

import './style.css';
import { studentlar } from '../../mock/api';

const Banner = (props) => {
    const [selectedFunction, setSelectedFunction] = useState('');
    const [inputValue, setInputValue] = useState(''); 

    const fakultetlar = [...new Set(studentlar.map(student => student.fakultet))];
    const ismlar = [...new Set(studentlar.map(student => student.ism))];

    const handleSelectedChange = (e) => {
        setSelectedFunction(e.target.value);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const filteredStudents = studentlar.filter(
        (s) => selectedFunction === '' || s.fakultet.includes(selectedFunction)
    );

    const filteredIsimlar = ismlar.filter(
        (isim) => isim.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <div style={{ background: props.open ? 'yellow' : 'grey' }} className="Main">
            <input
                value={inputValue}
                onChange={handleInputChange}
                type="text"
                placeholder="Search..."
                className="searchInput"
            />

            <select onChange={handleSelectedChange}>
                <option value="">Hammasi</option>
                {fakultetlar.map((fakultet, index) => (
                    <option key={index} value={fakultet}>
                        {fakultet}
                    </option>
                ))}
            </select>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Ism</th>
                        <th>Familiya</th>
                        <th>Yoshi</th>
                        <th>Fakultet</th>
                        <th>Kurs</th>
                        <th>Telefon</th>
                        <th>Manzil</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredIsimlar.map((isim, index) => {
                        const student = filteredStudents.find(s => s.ism === isim);
                        if (!student) return null;
                        return (
                            <tr key={index}>
                                <td>{student.ism}</td>
                                <td>{student.familiya}</td>
                                <td>{student.yoshi}</td>
                                <td>{student.fakultet}</td>
                                <td>{student.kurs}</td>
                                <td>{student.telefon}</td>
                                <td>{student.manzil}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Banner;
