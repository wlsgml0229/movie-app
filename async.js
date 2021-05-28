function a () {
    console.log('a')
}

function b () {
    console.log('b')
}

a()
b()

//a
//b

function a() {
    setTimeout(function(){
        console.log('a')
    },1000)
}

function b() {
    console.log('b')
}

a()
b()

//b
//a

function a(cb) {
    setTimeout(function (){
        console.log('a')
        cb()
    },1000)
}

function b(){
    console.log('b')
}
//인수로 함수를 전달받음 : 콜백
//console.log('a')가 찍히고나서 b() 가 실행됨 
a(function() {
    b()
})

//a
//b

function a(cb) {
    setTimeout(function (){
        console.log('a')
        cb()
    },1000)
}

function b(cb) {
    setTimeout(function (){
        console.log('a')
        cb()
    },1000)
}

function c(cb) {
    setTimeout(function (){
        console.log('a')
        cb()
    },1000)
}

function d(cb) {
    setTimeout(function (){
        console.log('a')
        cb()
    },1000)
}

a(function(){
    b(function(){
        c(function(){
            d()
        })
    })
})

//Promise의 생성자로 인해서 반환되기 떄문에 then사용가능하다 

function a() {
//생성자함수 생성
    return new Promise(resolve=>{
        console.log('a')
        resolve()
    },1000)
}

function b() {
    //생성자함수 생성
        return new Promise(resolve=>{
            console.log('b')
            resolve()
        },1000)
    }

function c() {
        //생성자함수 생성
         return new Promise(resolve=>{
                console.log('c')
                resolve()
            },1000)
        }    
  
function d() {
            //생성자함수 생성
             return new Promise(resolve=>{
                console.log('d')
                resolve()
            },1000)
        }    

    a()
      .then(()=>b())
      .then(()=>c())
      .then(()=>d())

  //await가 정상적으로 돌아가기 위해서
  //async 가 붙은 함수 안에서 사용되어야 함

    async function asynceFunc() {
        await a()
        await b()
        await c()
        await d()
        //d가 끝나길 기다렸다가 실행
        console.log('done')
    }

    function a() {
        return new Promise((resolve, reject)=> {
          if(isError) {
              reject('Error Message')
          }
            setTimeout(()=>{
              console.log('a')
              resolve('done')
          },1000)
        })
    }

    a()
    .then((res)=>{
        console.log(res)
    })
    .catch(()=>{
        console.log('error')
        alert(error.message)
    })
    .finally(()=>{

    })

    async function asynceFunc() {
     try{
        const res = await a()
        console.log(res)
     }catch (error) {
        alert(error.message)
     }finally{
         console.log('done!')
     }
    }
    asynceFunc()

