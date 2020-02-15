// 10 million users
//insert total - 0
const faker = require('faker');


const createFakeUsers =() => ({
  total: 0
})

exports.seed = async function(knex, Promise){
  let fakeUsers = [];
  const desiredUsers = 10000;

  for(let j = 0; j < 1000; j++){
    for(let i = 0; i < desiredUsers; i++){
      fakeUsers.push(createFakeUsers());
    }
    await knex("users")
      .insert(fakeUsers);
      setTimeout(()=>{
        fakeUsers = [];
      }, 0)
  }
};

// const createFakeProduct =() => ({
//   name:faker.name.findName(),
//   description:faker.lorem.sentence(),
//   price:faker.finance.amount(),
// })

// exports.seed = async function(knex, Promise){
//   let fakeProducts = [];
//   const desiredProducts = 10000;

//   for(let j = 0; j < 1000; j++){
//     for(let i = 0; i < desiredProducts; i++){
//       fakeProducts.push(createFakeProduct());
//     }
//     await knex("products")
//       .insert(fakeProducts);
//       setTimeout(()=>{
//         fakeProducts = [];
//       }, 0)
//   }
// };




// const createFakeReview =() => ({
//   review_title: faker.commerce.product(),
//   review_text: faker.lorem.sentence(),
//   rating: faker.random.number()
// })

// exports.seed = async function(knex, Promise){
//   let fakeReviews = [];
//   const desiredReviews = 20000;

//   for(let j = 0; j < 1000; j++){
//     for(let i = 0; i < desiredReviews; i++){
//       fakeReviews.push(createFakeReview());
//     }
//     await knex("reviews")
//       .insert(fakeReviews);
//       setTimeout(()=>{
//         fakeReviews = [];
//       }, 0)
//   }
// };