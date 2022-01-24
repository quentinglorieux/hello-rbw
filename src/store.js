//Import data : method 1 - js file with an array

// Explanation:
// We create a store for storing the state (including the data)
// The store object has a property name: state1, which has a propterty name: data2 (random names here)
// seedData which are imported from seed.js are stored in store.state1.data2 
// seedData corresponds to the constant's name in seed.js : export const seedData 


// import { seedData } from './assets/seed.js';
// console.log(seedData)
// export const store = { 
//     state1: {
//     data2: seedData
//   }
// }


//Import data : method 2 - json file 

import dataJson from "./assets/json/members.json";
//console.log(dataJson);
export const store = { 
  state1: {
     data2: dataJson
  }
}



//Import data : method 3 - from Directus :) 

// import { Directus } from '@directus/sdk';
// const directus = new Directus('https://directus.rubidiumweb.eu/');

// async function start() {
//     const articles = await directus.items('Members').readMany();
//     console.log(articles.data);
// }
// start();  

// export const store = { 
//         state1: {
//             data2:  directus.items('Members').readMany().data
//         }
//     } 
