'use strict'

let Seattle={
    minCust:23,
    maxCust:65,
    avg_Cookie_Sale:6.3,
    custPerH:function()
    {
     return Math.floor((Math.random() * 10) + 1);
    }
}
let Tokyo={
    minCust:3,
    maxCust:24,
    avg_Cookie_Sale:1.2
}
let Dubai={
    minCust:11,
    maxCust:38,
    avg_Cookie_Sale:3.7
}
let Paris={
    minCust:20,
    maxCust:38,
    avg_Cookie_Sale:2.3
}
let Lima={
    minCust:2,
    maxCust:16,
    avg_Cookie_Sale:4.6
}

console.log(Seattle.custPerH())