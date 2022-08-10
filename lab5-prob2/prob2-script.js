let n;
let list = [];
let input;
let max = 0;
let min = 0;
let avg = 0;

    do{
        input = prompt('Enter an integer (a negative interger to quit):')
        n = Number(input);
        if (n < 0){
            break;
        }else if (n >= 0){
            sum = list.push(n);
        }
        max = Math.max(...list); //Spread Operator ให้แยกตัวแปรเดี่ยว ๆ ออกมา
        min = Math.min(...list);
        avg = list.reduce((sum, num) => sum + num, 0)/list.length;//การทำงานของ function reduce คือการบวกค่า num ใน array โดยเริ่มจาก 0 และเก็บไว้ใน sum และบวกค่า num ใน array ต่อไปเรื่อยๆ
        document.write();
    }while(input !== Number || input == null);
    
    alert(`for the list ${list.join(",")}, the avarage is ${avg.toFixed(2)}, the minimum is ${min},and the maximum is ${max}`);

