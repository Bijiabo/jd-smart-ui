/**
 * Created by huchunbo on 2017/2/23.
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, './../app/components');
const files = fs.readdirSync(dir);

var fileNameArray = [];
var includeFileScript = '// 此文件为自动生成，不需要手动修改@@。\n\n';
files.forEach(function (filename) {
    // var fullname = path.join(dir,filename);
    console.log(filename);
    const modelName = filename.replace(/\.js$/,'');
    includeFileScript += `import ${modelName} from './components/${modelName}';\n`;
    fileNameArray.push(modelName);
    // var stats = fs.statSync(fullname);
    // if (stats.isDirectory()) filename += '/';
    // process.stdout.write(filename + '\t' +
    //     stats.size + '\t' +
    //     stats.mtime + '\n'
    // );
});

includeFileScript += `\nexport default {${fileNameArray.join(', ')}};`;

console.log(includeFileScript);

var includeFilePath = path.join(__dirname, './../app/componentList.js');
fs.writeFile(includeFilePath, includeFileScript, (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
});