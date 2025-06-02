package com.durgaprasad.StudentManagementSystem.Controller;


import com.durgaprasad.StudentManagementSystem.Service.StudentService;
import com.durgaprasad.StudentManagementSystem.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentService service;


    @GetMapping
    public List<Student> getAll(){
      return service.getAllStudents();
    }

    @PostMapping
    public Student create(@RequestBody Student student){
        return service.saveStudent(student);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Student> getById(@PathVariable Long id){
        return service.getStudentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.deleteStudent(id);
    }
}
