const express = require('express');
const dotenv = require('dotenv');
const courses = require('./courses')

dotenv.config();
const app = express();

const PORT = process.env.PORT || 900
app.listen(PORT, ()=> {
    console.log('listening to you')
}
);
//End Point 1
app.get('/', async(req,res)=>{
    res.json(courses)
});

//End Point 2
app.post('/add', async(req,res)=>{

    courses.push('Mathematics')
    return res.json(courses);
})