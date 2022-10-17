// getting-started.js
const mongoose = require('mongoose');

// connect mongodb with nodejs 
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://<password>');

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// Creating schema on mongoose /
const infoSchema = new mongoose.Schema({
    name: String,
    age: Number,
    state: String,
    country: String,
    School: String,
    phone: Number
});

// Creating the model 
const Info = mongoose.model('Info', infoSchema);

// populating the model 
Info.insertMany([
    {
    name: 'Abdulrahman Kabia',
    age: 11,
    state: 'Virginia',
    country: 'United States',
    school: 'Arizona State University',
    phone: 7036677843
},

{
    name: 'Halley Kunu',
    age: 13,
    state: 'Maryland',
    country: 'United States',
    school: 'Stanford University',
    phone: 7036677843
},
{
    name: 'Mary Boakye',
    age: 20,
    state: 'Arizona',
    country: 'United States',
    school: 'University Of Arizona',
    phone: 5716677843
},
{
    name: 'Abdulrahman Kabia',
    age: 11,
    state: 'Virginia',
    country: 'United States',
    school: 'Arizona State University',
    phone: 7036677843
},

])

console.log(Info)