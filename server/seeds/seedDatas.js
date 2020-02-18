
const faker = require('faker');

const randomCategory = () => {
  let max = Math.floor(7);
  let min = Math.ceil(1);
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomBigThing = () => {
  return Math.floor(Math.random() * Math.floor(10000000))
}
  

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

const createFakeProduct =() => ({
  name:faker.name.findName(),
  description:faker.lorem.sentence(),
  price:faker.finance.amount(),
  category_id: randomCategory()
})
// run twice for 10 mil --> random adds strain to ram
exports.seed = async function(knex, Promise){
  let fakeProducts = [];
  const desiredProducts = 5000;

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

//this is rediculous and takes a while, but it gets the job done. Listen to Beethoven while waiting for your computer to finish 
const createFakeReview =() => ({
  review_title: faker.commerce.product(),
  review_text: faker.lorem.sentence(),
  rating: faker.random.number({min: 0, max: 5}),
  user_id: faker.random.number({min: 1, max: 10000000}),
  product_id: faker.random.number({min: 1, max: 10000000})
})

exports.seed = async function(knex, Promise){
  let fakeReviews = [];
  const desiredReviews = 5000;

  for(let j = 0; j < 1000; j++){
    for(let i = 0; i < desiredReviews; i++){
      fakeReviews.push(createFakeReview());
    }
    await knex("reviews")
      .insert(fakeReviews);
      setTimeout(()=>{
        fakeReviews = [];
      }, 0)
  }
};

///run command --> npx knex seed:run --env development