class Student{
    constructor(name,age,student_id){
        this.name=name;
        this.age=age;
        this.student_id=student_id;
    }

    static showDetails(name,age,student_id){
        console.log("Name: ", name);
        console.log("Age: ", age);
        console.log("Student: ", student_id);
    }
}


Student.showDetails('Harsh',21,101);

const StudentInstance=new Student();
try{
    StudentInstance.showDetails('Harsh',21,101);
}catch(e){
    console.log("Instance cannot call static method: ", e.message);
}