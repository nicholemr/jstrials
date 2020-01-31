"use strict";


// 1. printIndices
function printIndices(items) {
  let count = 0;
  for (let item of items){
    
    console.log(item, count);
    count+=1
  }
}
let items = ['apple','berry','cherry','tomato','celery'];
//printIndices(items);

// 2. everyOtherItem
function everyOtherItem(items) {
  let count = 0;
  let otherItem = [];
  for (let item of items){
    if (count%2 == 0 ){
      otherItem.push(item,count)
    }
    count+=1;
  }
  console.log(otherItem)
}
// everyOtherItem(items)

// 3. smallestNItems
function smallestNItems(items, n) {
 
  items.sort((a,b)=>  a-b);
  console.log(items);
}



const nums = [1000,1, 30, 4, 21, 100000];
smallestNItems(nums,3)