import React from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import './App.css';

function App() {
    const [refresh, setRefresh] = React.useState(false);
    const reload = () => setRefresh(!refresh);

    return (
        <div className="app-container">
            <h1 className="app-title">Student Management System</h1>
            <div className="content-wrapper">
                <StudentForm onStudentAdded={reload} />
                <StudentList key={refresh} />
            </div>
        </div>
    );
}

export default App;
