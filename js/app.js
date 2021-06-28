'use strict'
//#region objects
let hours=['6 am','7 am','8 am','9 am','10 am','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm']

let Seattle={
    shopName:'Seattle',
    minCust:23,
    maxCust:65,
    avgCookies:6.3,
    randCust:[],
    avgCookiesPerh:[],
    calcRandCustPerH:function(){
        for (let i = 0; i < hours.length; i++) {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        let rand_Cust = Math.floor(Math.random() * (max - min) + min)
        
            this.randCust.push(rand_Cust)
        }
    },
   CalcAvgCookies:function(){
    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesPerh[i]=Math.floor(this.randCust[i] * this.avgCookies)
    }
   },
   render:function(){
    let divContent=document.getElementById("objectContents");
    let h2= document.createElement('h2');
    h2=this.shopName
    divContent.append(h2)
    let ul =  document.createElement('ul')
    for (let i = 0; i < hours.length; i++) {
    let liEl=document.createElement("li")
    liEl.textContent=hours[i]+' '+ this.avgCookiesPerh[i] +' cookies'
    ul.append(liEl)
    }
    divContent.append(ul)
   }
}
Seattle.calcRandCustPerH()
Seattle.CalcAvgCookies()
Seattle.render()
console.log(Seattle);
let Tokyo={
    shopName:'Tokyo',
    minCust:3,
    maxCust:24,
    avgCookies:1.2,
    randCust:[],
    avgCookiesPerh:[],
    calcRandCustPerH:function(){
        for (let i = 0; i < hours.length; i++) {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        let rand_Cust = Math.floor(Math.random() * (max - min) + min)
        
            this.randCust.push(rand_Cust)
        }
    },
   CalcAvgCookies:function(){
    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesPerh[i]=Math.floor(this.randCust[i] * this.avgCookies)
    }
   },
   render:function(){
    let divContent=document.getElementById("objectContents");
    let h2= document.createElement('h2');
    h2=this.shopName
    divContent.append(h2)
    let ul =  document.createElement('ul')
    for (let i = 0; i < hours.length; i++) {
    let liEl=document.createElement("li")
    liEl.textContent=hours[i]+' '+ this.avgCookiesPerh[i] +' cookies'
    ul.append(liEl)
    }
    divContent.append(ul)
   }
}
Tokyo.calcRandCustPerH()
Tokyo.CalcAvgCookies()
Tokyo.render()
let Dubai={
    shopName:'Dubai',
    minCust:11,
    maxCust:38,
    avgCookies:3.7,
     randCust:[],
avgCookiesPerh:[],
calcRandCustPerH:function(){
    for (let i = 0; i < hours.length; i++) {
    let min = Math.ceil(this.minCust);
    let max = Math.floor(this.maxCust);
    let rand_Cust = Math.floor(Math.random() * (max - min) + min)
    
        this.randCust.push(rand_Cust)
    }
},
CalcAvgCookies:function(){
for (let i = 0; i < hours.length; i++) {
    this.avgCookiesPerh[i]=Math.floor(this.randCust[i] * this.avgCookies)
   }
  },
  render:function(){
    let divContent=document.getElementById("objectContents");
    let h2= document.createElement('h2');
    h2=this.shopName
    divContent.append(h2)
    let ul =  document.createElement('ul')
    for (let i = 0; i < hours.length; i++) {
    let liEl=document.createElement("li")
    liEl.textContent=hours[i]+' '+ this.avgCookiesPerh[i] +' cookies'
    ul.append(liEl)
    }
    divContent.append(ul)
   }
}
Dubai.calcRandCustPerH()
Dubai.CalcAvgCookies()
Dubai.render()
let Paris={
    shopName:'Paris',
    minCust:20,
    maxCust:38,
    avgCookies:2.3,
    randCust:[],
    avgCookiesPerh:[],
    calcRandCustPerH:function(){
        for (let i = 0; i < hours.length; i++) {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        let rand_Cust = Math.floor(Math.random() * (max - min) + min)
        
            this.randCust.push(rand_Cust)
        }
    },
   CalcAvgCookies:function(){
    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesPerh[i]=Math.floor(this.randCust[i] * this.avgCookies)
    }
   },
   render:function(){
    let divContent=document.getElementById("objectContents");
    let h2= document.createElement('h2');
    h2=this.shopName
    divContent.append(h2)
    let ul =  document.createElement('ul')
    for (let i = 0; i < hours.length; i++) {
    let liEl=document.createElement("li")
    liEl.textContent=hours[i]+' '+ this.avgCookiesPerh[i] +' cookies'
    ul.append(liEl)
    }
    divContent.append(ul)
   }
}
Paris.calcRandCustPerH()
Paris.CalcAvgCookies()
Paris.render()
let Lima={
    shopName:'Lima',
    minCust:2,
    maxCust:16,
    avgCookies:4.6,
    randCust:[],
    avgCookiesPerh:[],
    calcRandCustPerH:function(){
        for (let i = 0; i < hours.length; i++) {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        let rand_Cust = Math.floor(Math.random() * (max - min) + min)
        
            this.randCust.push(rand_Cust)
        }
    },
    CalcAvgCookies:function(){
    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesPerh[i]=Math.floor(this.randCust[i] * this.avgCookies)
    }
    },
    render:function(){
        let divContent=document.getElementById("objectContents");
        let h2= document.createElement('h2');
        h2=this.shopName
        divContent.append(h2)
        let ul =  document.createElement('ul')
        for (let i = 0; i < hours.length; i++) {
        let liEl=document.createElement("li")
        liEl.textContent=hours[i]+' '+ this.avgCookiesPerh[i] +' cookies'
        ul.append(liEl)
        }
        divContent.append(ul)
       }  
}
Lima.calcRandCustPerH()
Lima.CalcAvgCookies()
Lima.render()



