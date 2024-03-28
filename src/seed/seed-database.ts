
import prisma from "../lib/prisma";

async function main(){

     await Promise.all([
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
     ])


    console.log('seed executed correctly')
}

(()=>{
    if(process.env.NODE_ENV === 'production') return;
    main();
})();