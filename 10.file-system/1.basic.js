// fs module in node js is used to work with file system
// fs --> FileSystem
const fs= require('fs') // import file system

// ----------------reading------------------------
/*
fs.readFile --> read asyn, use callback to get result
fs.readFileSync --> read sync
*/
// fs.readFile(path, type, callback --> optional)
fs.readFile('test.txt', 'utf-8', (err, data)=>{
    if (err) {
        console.error('Error reading file:', err);
        return;
      }
      console.log('File content:', data);
})

// fs.readFileSync('test.txt', 'utf-8'); --> handle using try -catch may be it can return error

try{
    let data=fs.readFileSync('test.txt', 'utf-8');
    console.log(data);
}catch(e){
    console.error();
    (e);
}

// --------------------- wrting --------------
/*
it overwrite complete file
fs.writeFile(path, content which we want to add)
a) Asynchronous Write (fs.writeFile)
   It creates a new file or overwrites an existing file

b) Synchronous Write (fs.writeFileSync)
   This version writes the file synchronously.
*/

const content = 'Hello, World! new';

try {
  fs.writeFileSync('example.txt', content);
  console.log('File written successfully!');
} catch (err) {
  console.error('Error writing to file:', err);
}

/* ---------------- appending file --------------------
add content to existing file, if file not exist it will create new file
\n add new line
*/

const additionalContent = '\nThis is new content.';

fs.appendFile('example.txt', additionalContent, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Content appended successfully!');
});

/*
--------------------------deleting file
delete file, not work on directory
*/

fs.unlink('example.txt', (err)=>{
    if (err) {
        console.error('Error deleting file:', err);
        return;
      }
      console.log('File deleted successfully!');
});


// checking file if exist

if (fs.existsSync('example.txt')) {
  console.log('File exists!');
} else {
  console.log('File does not exist.');
}


// ------------------renaming file



fs.rename('example.txt', 'newname.txt', (err) => {
  if (err) {
    console.error('Error renaming file:', err);
    return;
  }
  console.log('File renamed successfully!');
});
