const express = require('express');
const cors = require('cors');

const mysql      = require('mysql');
const consql = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'luckydb'
});

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM item';
const SELECT_ALL_TRANSACTION = 'SELECT * FROM transaction19';
const SELECT_FOR_FPGROWTH = 'SELECT notransaksi,iddetail,jenis FROM transaction19 ORDER BY notransaksi ASC';

const port = 5001;
 
 
// consql.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

const app = express();

app.use(cors());

app.get('/',(req,res) =>{

    consql.query(SELECT_ALL_PRODUCTS_QUERY, (err,results) =>{
        if(err){
            console.log(err)
            res.sendStatus(500);
            return;
        }
        else{
            console.log("Check result");
            return res.json({
                data: results
            })
        }
    });
});

app.get('/transaction', (req,res) =>{
    consql.query(SELECT_ALL_TRANSACTION, (err,results) =>{
        if(err){
            console.log(err)
            res.sendStatus(500);
            return;
        }
        else{
            console.log("Check result");
            return res.json({
                data: results
            })
        }
    });

});

app.get('/fpg', (req,res) =>{
    consql.query(SELECT_FOR_FPGROWTH, (err,results) =>{
        if(err){
            console.log(err)
            res.sendStatus(500);
            return;
        }
        else{
            console.log("Check result");
            return res.json({
                data: results
            })
        }
    });

});

app.listen(port, ()=>{
    console.log(`algo server lsitening on port ${port}`);
});

console.log(consql);


