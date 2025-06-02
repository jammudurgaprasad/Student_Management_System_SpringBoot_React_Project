// components/StudentList.js
import React, { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from '../services/studentService';
import '../Styles/StudentList.css';

function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const res = await getStudents();
        setStudents(res.data);
    };

    const handleDelete = async (id) => {
        await deleteStudent(id);
        loadStudents();
    };

    return (
        <div className="student-list-container">
            <h2>Student List</h2>
            <ul className="student-list">
                {students.map((s) => (
                    <li key={s.id} className="student-item">
                        <div className="student-info">
                            <strong>{s.name}</strong>
                            <span>{s.email}</span>
                        </div>
                        <button onClick={() => handleDelete(s.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;
