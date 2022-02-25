var fs = require('fs');
var http = require('axios');

var gitlibs = fs.readFileSync(__dirname + '/repos.txt', { encoding: 'utf-8' });
var urls = gitlibs.split('\n');

async function del(user, lib) {
  try {
    console.log(`${user}/${lib} starting...`);
    await http.delete(`https://api.github.com/repos/${user}/${lib}`, {
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": "token [input your token here]",
        "X-OAuth-Scopes": "repo"
      }
    })
  } catch (err) {
    return Error('delete fail!!!');
  }
  console.log(`${user}/${lib} done!`);
  console.log(`---------------`);
  return true;
};

var flag = true;
function main() {
  var timer = setInterval(async () => {
    if (!urls?.length) {
      clearInterval(timer);
      return;
    }
    if (flag) {
      flag = false;
      const [user, lib] = urls.shift().split('/');
      flag = await del(user, lib);
    }
  }, 2000);
}

module.exports = main;
