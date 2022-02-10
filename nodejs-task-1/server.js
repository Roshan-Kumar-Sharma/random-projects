const express = require('express');
const path = require('path');

const app = express();

// Part A
app.use(express.static(path.join(__dirname, 'public')));

// Part B
app.get('/notes', (req, res) => {
    res.download(__dirname + "/public/week3-lecture-notes.pdf");
})

// Part C
app.get('/products', (req, res) => {
    const key = Object.keys(req.query)[0]
    const value = Object.values(req.query)[0];

    let resObj;

    if(key === "origin"){
        resObj = {
            origin: {
                "message": value
            }
        }
    }
    else if (key === "type"){
        resObj = {
            type: {
                message: value,
            },
        };
    }
    else{
        resObj = {
            message: "All products",
        };
    }
    
    res.json(resObj);
})

// Part D
app.get('/products/:productID', (req, res) => {
    const productID = req.params.productID

    const para = `<p>The parameter value: ${productID}`

    res.send(para);
})

// Part E
app.use((req, res) => {
    res.status(404).send('Resource not found')
})

app.listen(8080);