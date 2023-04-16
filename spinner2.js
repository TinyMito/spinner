process.stdout.write('hello from spinner1.js... \rheyyy\n');
const animation = ['|', '/', '-', '\\', '*', '**', '***']
let delay = 0;
for (const i in animation) {
  setTimeout(() => {
    process.stdout.write('\r' + animation[i]);
  }, delay)
  delay +=  200;
}
setTimeout(() => {console.log();}, 2000);