const fs = require('fs')
const readline = require('readline');

const file = "data/users.db"

const SAVED = 1;
const EXISTS = 2;
const ERROR = 3;

function date(){
    return new Date().toISOString();
}

function createFile(filename) {
  fs.open(filename,'r',function(err, fd){
    if (err) {
      fs.writeFile(filename, '', function(err) {
          if(err) {
              console.log(err);
          }
      });
    }
  });
}

// append a entry to a file
function append(payload) {
   fs.appendFile(file, payload+"\n", function (err) {
        if (err) throw err;
        console.log('Saved payload: ' + payload);
    }); 
}

function filterByDate(line){
        if (line === undefined)
                return false;
        let lineDate = new Date(line.split(' ')[4])
        let timeout = new Date()
        timeout.setMonth(timeout.getMonth()-1); // set date to previous month
        return timeout < lineDate; 
}


// check if an entry already exists in the file
// Each entry should be in a single line
// looking like this <name> <version> <ip> <date>
async function exists(mac) {
        return new Promise((resolve) => {
                let entry = mac;
                let bExists = false
                fs.readFile(file, 'utf8', function(err, data) {
                    if (err) throw err;
                    let lines = data.split("\n");
                    lines = lines.filter((line) => {
                            return line.includes(entry);
                    });
                    lines = lines.filter(filterByDate);
                    resolve(lines.length !== 0);
                });
        });
}

async function removeOldEntries (mac){
    return new Promise((x) => {
        let entry = mac;
         fs.readFile(file, 'utf-8', function(err, data) {
            if (err) throw err;
            let lines = data.split("\n");
            lines = lines.filter((line) => {
                return ! line.includes(entry);
            });
            fs.writeFile(file, lines.join("\n"), function (err){
                if (err) throw err;
                x(true)
            });
        });
    });
}


// save a user to a file
// Files are easy to manipulate and make deployment of such a simple api as this easy
module.exports.write = async function(hostname, version, mac, ip){
   try{
        createFile(file);
        // construct the new entry to add to the file
        let entry = hostname + " " + mac + " " + version + " " + ip + " " + date();
        if(! await exists(mac)){
            await removeOldEntries(mac);
            append(entry);
            return SAVED;
        }
        return EXISTS;
   } catch {
    return ERROR;
   }
   return ERROR;
}

module.exports.read = async function(){
   return new Promise((x) => {
        fs.readFile(file, 'utf-8', function (err, data) {
            if (err) throw err;
            data = data.split("\n");
            data = data.filter((line) => {
                   return line !== ""; 
            });
            data = data.map((line) => {
                    splitted = line.split(" ");
                    return {hostname:splitted[0], version:splitted[2], mac:splitted[1], date:splitted[4] };
            })
            x(data);
        });
   });
}

module.exports.count = async function(){
   return new Promise((x) => {
        fs.readFile(file, 'utf-8', function (err, data) {
            if (err) throw err;
            data = data.split("\n");
            data = data.filter((line) => {
                   return line !== ""; 
            });
            x({count:data.length});
        });
   });
}

module.exports.SAVED = SAVED;
module.exports.EXISTS = EXISTS;
module.exports.ERROR = ERROR;

