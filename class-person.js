class person{                                                                     //declaring class name as person by using class keyword.
    constructor(firstname,lastname,age,colour,occupation,experience,degree){
        this.firstname   =firstname;
        this.lastname    =lastname;
        this.age         =age;
        this.colour      =colour;
        this.occupation  =occupation;
        this.experience  =experience;
        this.degree      =degree;
    }
    person_details(){
        let data=`
        Name         :   ${this.firstname} ${this.lastname}
        Age          :   ${this.age}
        Color        :   ${this.colour}
        Occupation   :   ${this.occupation}
        Experience   :   ${this.experience}
        Degree       :   ${this.degree}
        `;                                                                        //using template literals here.
        return data;
    }
}
let person1=new person("John","kennady",22,"white","Engineer",2,"Mechanical");      //creating instance of an object and give value for parameters.
let person2=new person("Kishore","kumar",25,"brown","devloper",6,"EEE");
let person3=new person("Ranjith","Kumar",21,"brown","Trader",8,"Accounts")

let arrey_persons=[person1,person2,person3];                                      //array of instance.
arrey_persons.forEach((data)=>console.log(data.person_details()));                //using forEach method to apply method for all instance and print.

//This above program output is given below:
/*
Name         :   John kennady
Age          :   22
Color        :   white
Occupation   :   Engineer
Experience   :   2
Degree       :   Mechanical


Name         :   Kishore kumar
Age          :   25
Color        :   brown
Occupation   :   EEE


Name         :   Ranjith Kumar
Age          :   21
Color        :   brown
Occupation   :   Trader
Experience   :   8
Degree       :   Accounts

*/