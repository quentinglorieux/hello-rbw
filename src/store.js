//Import data : method 1 - js file with an array
import { seedData } from './assets/seed.js';

//Import data : method 2 - json file 
import dataJson from "./assets/json/members.json";

//console.log(dataJson, seedData);
export const store = { 
  state: {
     dataJson: dataJson,
     dataJs: seedData
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
