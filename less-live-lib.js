const chokidar = require('chokidar');                   // функция прослушивания изменений файла
const { spawn } = require('node:child_process');        // работа с bash
const path = require('path');                           // работа с путями

const args = require('./bin/less-live');                // получаем аргументы при вводе
const dir = __dirname;                                  // определяем текущую дерикторию
const lessStyleFile = path.join(dir ,args[1]);          // получаем полный адрес исходного less 
const dirLess = path.parse(lessStyleFile).dir;          // получаем директорию в которой находится исходный less

let cssStyleFile = 'style.css';                         // имя выходного файла по дефолту, но если был второй аргумент, то заменяем на него
if (args[2] !== undefined) {
    cssStyleFile = path.join(dir ,args[2]);
}

console.log('less-live is running');
//  функция сборки less => css
let makeCss = () => {
    const ls = spawn('lessc', [lessStyleFile, cssStyleFile]);
    ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
}

makeCss();
// цикл отслеживания изменений всех файлов less в рабочей директории
chokidar.watch(dirLess + '/*.less').on('change', (path) => {
    makeCss();
    console.log("build",path); 
});
