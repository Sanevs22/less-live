#!/usr/bin/env node

'use strict';

let args = process.argv.slice(1);               // получаем массив аргументов при старте

if (args[1] == undefined) {                     // если аргументов нет - выдаем ошибку
    console.error('Enter path .less file');
} else {                                        // иначе подключаем рабочую библиотеку
    module.exports = args;
    require('../less-live-lib.js');
}
