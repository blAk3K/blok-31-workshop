const express = require ('express');
const app = express();

const pets =[
//Data for pets
  {id: 1,name: 'Billy',owner: 'Tom' },
  {id: 2,name: 'gus',owner: 'Tim' },
  {id: 3,name: 'Ed',owner: 'jim' },
  {id: 4,name: 'Baxter',owner: 'grim' }
];

//make a end point to get all the pets
app.get('/api/v1/pets', (req, res)=> {
res.send(pets)
})

app.listen(8080, () => {
  console.log(`listening on port 8080`);
});
// make endpoint to get pets by name
app.get('/api/v1/pets/:petsName', (req, res) => {
const {petsName} = req.params;
const foundName = pets.find((name) => {
  return name.name === petsName
})
res.send(foundName)
})


// make a query to get owners
app.get('/api/v1/pets/owner', (req, res) =>{
  let foundOwners = owner
  if(req.query.owner) {
    foundOwners = owner.filter((owner)=> {
      return owner.owner === req.query.owner;
      console.log(owner)
    })
 res.send(foundOwners);
  }
})