package com.durgaprasad.StudentManagementSystem.Service;


import com.durgaprasad.StudentManagementSystem.Repository.StudentRepository;
import com.durgaprasad.StudentManagementSystem.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public List<Student> getAllStudents(){
      return repository.findAll();
    }

    public Student saveStudent(Student student){
        return repository.save(student);
    }

    public Optional<Student> getStudentById(Long id) {
        return repository.findById(id);
    }

    public void deleteStudent(Long id){
        repository.deleteById(id);
    }
}
