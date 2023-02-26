

const chokidar = require('chokidar');
const { spawn } = require('node:child_process');

// enter your details
const lessStyleDir = './test-styles/';                          
const lessStyleFile = './test-styles/style.less';
const cssStyleFile = './test-styles/style.css';

var cli = (__dirname );
console.log(cli);

console.log('less-live is running');


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

chokidar.watch(lessStyleDir+ '*.less').on('change', (path) => {
    makeCss();
    console.log(path); 
});
