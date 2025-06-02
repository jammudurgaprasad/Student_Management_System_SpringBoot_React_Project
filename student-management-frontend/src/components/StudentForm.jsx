// components/StudentForm.js
import React, { useState } from 'react';
import { addStudent } from '../services/studentService';
import '../Styles/StudentForm.css';

function StudentForm({ onStudentAdded }) {
    const [form, setForm] = useState({ name: '', email: '', age: '', department: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addStudent(form);
        setForm({ name: '', email: '', age: '', department: '' });
        onStudentAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Student</h2>
            <input name="name" placeholder="Name" onChange={handleChange} value={form.name} />
            <input name="email" placeholder="Email" onChange={handleChange} value={form.email} />
            <input name="age" placeholder="Age" onChange={handleChange} value={form.age} />
            <input name="department" placeholder="Department" onChange={handleChange} value={form.department} />
            <button type="submit">Add Student</button>
        </form>
    );
}

export default StudentForm;
