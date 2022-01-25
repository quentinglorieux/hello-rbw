//Import data : method 1 - js file with an array
import { seedData } from './assets/seed.js';

//Import data : method 2 - json file 
import dataJson from "./assets/json/members.json";

//Import data : method 3 - directus API 
import membersPromise from "./assets/memberApi.js";


membersPromise().then( v => {
    console.log(v);
    return v;
  });


export const store = { 
  state: {
     dataJson: dataJson,
     dataJs: seedData,
     dataApi: membersPromise().then( v => {return v} ), // doesnt work
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
