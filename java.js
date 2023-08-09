let a = new Date()
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()



setInterval(()=>{
    let a = new Date()
    let h = a.getHours()
    document.getElementsByClassName('b1')[0].innerHTML = h
},1000)

setInterval(()=>{
    let a = new Date()
    let m = a.getMinutes()
    document.getElementsByClassName('b2')[0].innerHTML = m
},1000)

setInterval(()=>{
    let a = new Date()
    let s = a.getSeconds()
    document.getElementsByClassName('b3')[0].innerHTML = s
},1000)