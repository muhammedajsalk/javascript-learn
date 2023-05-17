class Student{
    constructor(name,student_class,division,marks){
        this.name=name;
        this.student_class=student_class;
        this.division=division;
        this.marks=marks;
    }

    total(){
        let total=0;
        this.marks.map((marks)=>{
            total+=marks;
        });
        return total;
    }
}

const student=new Student("joe",10,"D",[20,34,54,32,42,44]);
console.log(student.total());