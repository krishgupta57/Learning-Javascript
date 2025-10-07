function Demo(a,b){
    return a+b
}

export default Demo  // default export

function fun1(){
    console.log("Inside fun1")
}

function fun2(){
    console.log("Inside fun2")
}

export {fun1,fun2}  // named export