#!/usr/bin/node 

const mysql=require('mysql');
const con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'jane',
  database:'test'
});

