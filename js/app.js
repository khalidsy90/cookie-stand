'use strict'
//#region objects
let hours=['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm']
/*
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


*/
function cities(shopName,minCust,maxCust,avgCookies){
    this.shopName=shopName
    this.minCust=minCust
    this.maxCust=maxCust
    this.avgCookies=avgCookies
    this.randCust=[]
    this.avgCookiesPerh=[]

}

cities.prototype.calcRandCustPerH=function(){
    for (let i = 0; i < hours.length; i++) {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        let rand_Cust = Math.floor(Math.random() * (max - min) + min)
        
            this.randCust.push(rand_Cust)
        }
}
cities.prototype.CalcAvgCookies=function(){
    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesPerh[i]=Math.floor(this.randCust[i] * this.avgCookies)
    }
}

// variables Glabal

let divContent=document.getElementById("objectContents")
let table =document.createElement('table')

//

let Seattle_=new cities('seatle',23,65,6.3)
Seattle_.calcRandCustPerH()
Seattle_.CalcAvgCookies()
let Tokyo_=new cities('Tokyo',3,24,4.2)
Tokyo_.calcRandCustPerH()
Tokyo_.CalcAvgCookies()
let Dubai_=new cities('Dubai',11,38,3.7)
Dubai_.calcRandCustPerH()
Dubai_.CalcAvgCookies()
let Paris_=new cities('Paris',20,38,2.3)
Paris_.calcRandCustPerH()
Paris_.CalcAvgCookies()
let Lima_=new cities('Lima',2,16,4.6)
Lima_.calcRandCustPerH()
Lima_.CalcAvgCookies()

let arrCities=[Seattle_,Tokyo_,Dubai_,Paris_,Lima_]

function header()
{
let city=document.createElement('td')
city.textContent='City'
city.setAttribute('width', '6.3%')
let tr =document.createElement('tr')
tr.appendChild(city)
hours.forEach((item)=>{
    let td=document.createElement('td')
    td.textContent=item
    tr.appendChild(td)
})
let total=document.createElement('td')
total.textContent='Total'
tr.appendChild(total)
table.appendChild(tr)
divContent.appendChild(table)
}

header()

cities.prototype.render=function(){
    let tr=document.createElement('tr')
    let shop=document.createElement('td')
    shop.textContent=this.shopName
    tr.appendChild(shop)
    let sum=0
    let totals=document.createElement('td')
    totals.textContent=''
    this.avgCookiesPerh.forEach((item)=>{
        let td=document.createElement('td')
        td.textContent=item
        tr.appendChild(td)
        sum+=item
    })
    totals.textContent=sum
    tr.append(totals)
    table.appendChild(tr)
    divContent.appendChild(table)
}


Seattle_.render()
Tokyo_.render()
Dubai_.render()
Paris_.render()
Lima_.render()




