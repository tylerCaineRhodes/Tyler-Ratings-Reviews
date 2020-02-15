const faker = require('faker');


const createFakeProduct =() => ({
  name:faker.name.findName(),
  description:faker.lorem.sentence(),
  price:faker.finance.amount(),
})

exports.seed = async function(knex, Promise){
  let fakeProducts = [];
  const desiredProducts = 10000;

  for(let j = 0; j < 1000; j++){
    for(let i = 0; i < desiredProducts; i++){
      fakeProducts.push(createFakeProduct());
    }
    await knex("products")
      .insert(fakeProducts);
      setTimeout(()=>{
        fakeProducts = [];
      }, 0)
  }
};