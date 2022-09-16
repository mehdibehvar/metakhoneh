import { getRandomValues } from "crypto";

class Person {
    name:string;
    age?:number;
    constructor(name:string,age:number=0) {
        this.name=name;
        this.age=age
    }
}
interface IPerson{
    name:string;
    age:number
}
interface IAcademicperson extends IPerson{
    kind:"academic"
publications:Array<string>;

}
interface IBusinesperson extends IPerson{
    kind:"busines"
    salary:number
}
type Human=IBusinesperson | IAcademicperson
type LogerFn=(person:IPerson)=>string;
export default function play() {

//     function personLogerInfoFn(person:IPerson){
//         const info=`person:${person.name} -- ${person.age}`
//         console.log(info);
//         return info;
//     }
//     const personLoger2:LogerFn=(pers)=>{
//         const info=`person:${pers.name} -- ${pers.age}`
//         console.log(info);
//         return info;
       
//     }
//     const ali:IPerson={
//         name:"ali"
//     }
//   const person=new Person("mehdi");
//   const littleperson=new Person("reza",30)
//   personLogerInfoFn(littleperson)
//   personLoger2(person);
//   personLogerInfoFn(ali)
/////--------------------------------////////////////////
const random=Math.random()>0.5?"hello":[1,2,3];
if(typeof random==="string"){
    const upper=random.toUpperCase();
      console.log(upper);
      
}else{
    console.log(random)
}
console.log(random.length)
};

export  function play2() {
    const logPersonInfo=(person:Human)=>{
      switch (person.kind) {
        case "academic":
            console.log(person.publications);
            
            break;
      case "busines":
        console.log(person.salary);
        break
        
        default:
            console.log(person);
            
      }
       
    }
    logPersonInfo({name:"mehdi",kind:"busines",salary:1000,age:22});
    
}

export const play3=()=>{
function logAnimal(someObject:{[key:string]:string|number|boolean|object}) {
    console.log(someObject);  
}
logAnimal({
    name:{}
})
}
class Loger<T> {
   log(arr:Array<T>,callback:(i:T)=>void){
    arr.forEach((item:T) => {
        callback(item)
    });
   }
}
export function play4() {
    const loger=new Loger<string>();
    const cars=["c1","c2","c3"]
    loger.log(cars,(car)=>{
        console.log(car)
    })
    // const loger2=new Loger<number>()
    // const nums=[1,2,3,4]
    // loger2.log(nums,(num)=>{
    //     console.log(num);
        
    // })
    const loger3=new Loger<string|number>()
    const varar=[1,2,"mehdi"]
    loger3.log(varar,(v)=>{
        console.log(v);
        
    })
    const loger4=new Loger<IPerson>();
    const arrperson=[{name:"mehdi",age:22},{name:"mahdi",age:22}]
    loger4.log(arrperson,(p)=>{
        console.log(p);
        
    })
}
class student implements IPerson{
   name="mehdi"
   age=33
   salary=666
   
}
interface IEdu extends IPerson{
    grade:string;
}
///generic default value is student//////////////////////
class Logerstu<T extends IPerson=student>{
    log(arr:Array<T>,callback:(i:T)=>void){
        arr.forEach((item)=>{
         callback(item)
        })
    }
}
export function play5() {
    const logerstu=new Logerstu<IEdu>();
    const stuarr=[{name:"s1",age:11,grade:"j",salary:555},{name:"s2",age:33,grade:"99",salary:99}]
    logerstu.log(stuarr,(stu)=>{
        console.log(stu);
    })
}












