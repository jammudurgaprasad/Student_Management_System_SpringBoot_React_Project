package com.durgaprasad.StudentManagementSystem.Repository;

import com.durgaprasad.StudentManagementSystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
