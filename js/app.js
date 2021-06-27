'use strict'
//#region objects
let hours=['6 am','7 am','8 am','9 am','10 am','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm']

let Seattle={
    minCust:23,
    maxCust:65,
    avg_Cookie_Sale:6.3,
    custPerH:function(){
     return Math.floor((Math.floor() * 10) + 1);
    },
    simuAmounts:function(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min) * this.avg_Cookie_Sale;
    },
    resultSumAmount:function(){
        let arr=new Array()
        for (let i = 0; i < hours.length; i++) {
           arr.push({hour:hours[i],amount:this.simuAmounts(this.minCust,this.maxCust)})
        }      
        return arr   
    },
    sum:function(){
        let summ= this.resultSumAmount().reduce((accumlator,currentValue)=>{
            return accumlator + currentValue.amount
        },0)
        console.log(summ);
       return summ
    }
}
let Tokyo={
    minCust:3,
    maxCust:24,
    avg_Cookie_Sale:1.2,
    custPerH:function(){
        return Math.floor((Math.floor() * 10) + 1);
       },
       simuAmounts:function(min,max){
           min = Math.ceil(min);
           max = Math.floor(max);
           return Math.floor(Math.random() * (max - min) + min) * this.avg_Cookie_Sale;
       },
       resultSumAmount:function(){
           let arr=new Array()
           for (let i = 0; i < hours.length; i++) {
              arr.push({hour:hours[i],amount:this.simuAmounts(this.minCust,this.maxCust)})
           }      
           return arr   
       },
       sum:function(){
        let summ= this.resultSumAmount().reduce((accumlator,currentValue)=>{
            return accumlator + currentValue.amount
        },0)
        console.log(summ);
       return summ
    }
}
let Dubai={
    minCust:11,
    maxCust:38,
    avg_Cookie_Sale:3.7,
    custPerH:function(){
        return Math.floor((Math.floor() * 10) + 1);
       },
       simuAmounts:function(min,max){
           min = Math.ceil(min);
           max = Math.floor(max);
           return Math.floor(Math.random() * (max - min) + min) * this.avg_Cookie_Sale;
       },
       resultSumAmount:function(){
           let arr=new Array()
           for (let i = 0; i < hours.length; i++) {
              arr.push({hour:hours[i],amount:this.simuAmounts(this.minCust,this.maxCust)})
           }      
           return arr   
       },
       sum:function(){
        let summ= this.resultSumAmount().reduce((accumlator,currentValue)=>{
            return accumlator + currentValue.amount
        },0)
        console.log(summ);
       return summ
    }
}
let Paris={
    minCust:20,
    maxCust:38,
    avg_Cookie_Sale:2.3,
    custPerH:function(){
        return Math.floor((Math.floor() * 10) + 1);
       },
       simuAmounts:function(min,max){
           min = Math.ceil(min);
           max = Math.floor(max);
           return Math.floor(Math.random() * (max - min) + min) * this.avg_Cookie_Sale;
       },
       resultSumAmount:function(){
           let arr=new Array()
           for (let i = 0; i < hours.length; i++) {
              arr.push({hour:hours[i],amount:this.simuAmounts(this.minCust,this.maxCust)})
           }      
           return arr   
       },
       sum:function(){
        let summ= this.resultSumAmount().reduce((accumlator,currentValue)=>{
            return accumlator + currentValue.amount
        },0)
        console.log(summ);
       return summ
    } 
}
let Lima={
    minCust:2,
    maxCust:16,
    avg_Cookie_Sale:4.6,
    custPerH:function(){
        return Math.floor((Math.floor() * 10) + 1);
       },
       simuAmounts:function(min,max){
           min = Math.ceil(min);
           max = Math.floor(max);
           return Math.floor(Math.random() * (max - min) + min) * this.avg_Cookie_Sale;
       },
       resultSumAmount:function(){
           let arr=new Array()
           for (let i = 0; i < hours.length; i++) {
              arr.push({hour:hours[i],amount:this.simuAmounts(this.minCust,this.maxCust)})
           }      
           return arr   
       },
       sum:function(){
        let summ= this.resultSumAmount().reduce((accumlator,currentValue)=>{
            return accumlator + currentValue.amount
        },0)
        console.log(summ);
       return summ
    }
}
//#endregion

//#region renderHtml
let objNames=[Seattle,Tokyo,Dubai,Paris,Lima]
let objNamesStr=['Seattle','Tokyo','Dubai','Paris','Lima']
let divContent=document.getElementById("objectContents");

for (let i = 0; i < objNames.length; i++) 
{
    let h2= document.createElement('h2');
    h2.textContent=objNamesStr[i]
    divContent.append(h2)
    let ul =  document.createElement('ul')
    for (let x = 0; x < objNames[i].resultSumAmount().length; x++) 
    {
        let li=document.createElement('li')
        let H=objNames[i].resultSumAmount()[x].hour
        let Amnt=Math.round((objNames[i].resultSumAmount()[x].amount *1000)/1000) + ' cookies'
        li.textContent=H+' '+Amnt
       
        ul.append(li)
        
    }
    divContent.appendChild(ul);
    let h3 =document.createElement('h3')
    h3='Total '+Math.round((objNames[i].sum() *1000)/1000)
    ul.append(h3)
}
//#endregion



