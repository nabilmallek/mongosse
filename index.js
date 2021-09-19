const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost/myClients',{
    useNewUrlParser: true,
     useUnifiedTopology: true
})
.then(()=> console.log('connected'))
.catch((e)=>console.error('failed' + e))

const clientSchema = mongoose.Schema({
    name : String,
    age : Number,
    favoriteFoods:[String]
    })

   async  function createClient(){ 
    
    const Clients = mongoose.model('Clients',clientSchema)

    const ahmed = new Clients({
        name:'salma',
        age:20,
        favoriteFoods:['pizza','borgar']
});
  const result = await ahmed.save();
  console.log(result)
}
//createClient();

 async   function getPerson(){
    const person = await Clients.find()
    console.log(person)
}
getPerson();

async   function getPerson(){
    const person = await Clients.find({name:'salma'})
    console.log(person)
}
getPerson();

async   function getPerson(id){
    const person = await Clients.find(id)
    console.log(person)
}
getPerson( "61475f33f79537463cf32926");

    async function updatePerson(id){
         const person =await Clients.update({_id:id},{
            $set:{
                age:30
            } 
         })
         console.log(person)
     }
     updatePerson('61475fb7b49bfc580727afc1')


     async   function deletePerson(id){
         const person = await Clients.deleteOne({_id:id})
     }
     deletePerson('6147602bf539223bc660b35c')