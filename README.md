# Student Management System

## Project Summary

This workspace contains a complete Student Management System split into two main parts:

1. `StudentManagementSystem/` - Java Spring Boot backend
2. `student-management-frontend/` - React frontend

The backend provides a REST API for managing student records, while the frontend is a React application that consumes that API to display, add, and delete students.

---

## Backend: `StudentManagementSystem/`

### Overview
- Built with Spring Boot 3.5.0
- Java version: 21
- Uses Spring Data JPA for persistence
- Exposes student CRUD endpoints at `http://localhost:8080/students`
- Configured with MySQL database connectivity
- CORS enabled for `http://localhost:3000`

### Key Backend Files
- `pom.xml` - Maven project configuration and dependencies
- `src/main/java/com/durgaprasad/StudentManagementSystem/StudentManagementSystemApplication.java` - Spring Boot application entry point
- `src/main/java/com/durgaprasad/StudentManagementSystem/Controller/StudentController.java` - REST controller for student endpoints
- `src/main/java/com/durgaprasad/StudentManagementSystem/Service/StudentService.java` - Service layer for student operations
- `src/main/java/com/durgaprasad/StudentManagementSystem/Repository/StudentRepository.java` - JPA repository interface
- `src/main/java/com/durgaprasad/StudentManagementSystem/model/Student.java` - Student entity model
- `src/main/resources/application.properties` - Application configuration

### Backend Features
- `GET /students` - list all students
- `POST /students` - add a new student
- `GET /students/{id}` - retrieve student by ID
- `DELETE /students/{id}` - delete student by ID

### Backend Configuration
The backend uses MySQL with the following default connection settings from `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=root
spring.datasource.password=dpdb
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.cors.allowed-origins=http://localhost:3000
```

> Update these values if your local MySQL setup uses a different host, database name, user, or password.

---

## Frontend: `student-management-frontend/`

### Overview
- Created with Create React App
- Uses React 19
- Uses Axios for HTTP requests
- Provides a simple UI to add and remove student records
- Communicates with the backend at `http://localhost:8080/students`

### Key Frontend Files
- `package.json` - frontend package configuration and scripts
- `src/App.js` - main application layout
- `src/components/StudentForm.jsx` - form to add students
- `src/components/StudentList.jsx` - list students and delete records
- `src/services/studentService.js` - API service layer

### Frontend Features
- Add a student with name, email, age, and department
- Display all students in a list
- Delete individual students

---

## Getting Started

### Backend Setup
1. Navigate to the backend folder:
   ```powershell
   cd "StudentManagementSystem"
   ```
2. Build the backend:
   ```powershell
   .\mvnw clean package
   ```
3. Run the backend:
   ```powershell
   .\mvnw spring-boot:run
   ```

### Frontend Setup
1. Open a new terminal and navigate to the frontend folder:
   ```powershell
   cd "student-management-frontend"
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Run the frontend:
   ```powershell
   npm start
   ```

The frontend should open on `http://localhost:3000`, and it will connect to the backend at `http://localhost:8080`.

---

## Notes

- The backend is configured to auto-update the database schema with `spring.jpa.hibernate.ddl-auto=update`.
- If you do not have a MySQL database ready, create one named `studentdb` or update `application.properties` accordingly.
- The frontend currently uses the backend URL hard-coded as `http://localhost:8080/students`.

---

## Project Structure

- `StudentManagementSystem/` - Spring Boot Java backend
- `student-management-frontend/` - React frontend

---

## Improvements

Potential next steps for this project:
- add update/edit student functionality
- add form validation on the frontend
- support a production-ready build and deployment workflow
- improve styling and responsive design
- add authentication if needed
