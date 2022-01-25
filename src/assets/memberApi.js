import { Directus } from '@directus/sdk';

// export default async function membersPromise() {
//         const directus = new Directus('https://directus.rubidiumweb.eu/');
//         const response = await directus.items('Members').readMany();
//         const mem = response.data;
//         //console.log(mem);
//         return mem ;
//     }

    
async function membersPromise( ) {
        const directus = new Directus('https://directus.rubidiumweb.eu/');
        const response = await directus.items('Members').readMany();
        const mem = response.data;
        return mem ;
}

// membersPromise().then( v => {
//     console.log(v);
//     return v;
//   });

  export default membersPromise;