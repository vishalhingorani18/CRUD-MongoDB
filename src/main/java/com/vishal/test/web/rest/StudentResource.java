package com.vishal.test.web.rest;


import com.vishal.test.domain.Student;
import org.springframework.web.bind.annotation.*;


/**
 * Controller for view and managing Log Level at runtime.
 */
@RestController
@RequestMapping("/api/student")

public class StudentResource {


@PutMapping

public void createRecord(@RequestParam (required = false) String fname, @RequestParam (required = false) String lname) {

Student student=new Student();

student.setfName(fname);
student.setlName(lname);

}

}
