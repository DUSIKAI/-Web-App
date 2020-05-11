const express = require('express');
const path = require('path');
const apiMocker = require('mocker-api');

const app = express();

apiMocker(app, path.resolve('./mocker/mocker.js'))
app.listen(80, function(){
    console.log('服务器启动')
});