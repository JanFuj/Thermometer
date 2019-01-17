const express = require('express')
const app = express()
const port = 3000
app.listen(port, function (req, res) {
    console.log(`Example app listening on port ${port}!`)
})

app.use(express.static('website'));

app.get('/actualTemp/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(
        { 
            actualTemp: getActualTemp(),
            date: new Date(),
           
        }));
    
})

function getActualTemp(){
    return (Math.random() * 100).toFixed(2)
}
<<<<<<< HEAD
function getActual(){
    return (Math.random() * 100).toFixed(2)
}
=======
>>>>>>> d9245f67bb5da43ab5e0e60aa1e809aec47ee0e0
