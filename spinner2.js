let delay = 100;
let char = '|';
while (delay < 1900) {
  setTimeout(() => {
    switch (char) {
    case '/':
      char = '-';
      break;
    case '-':
      char = '\\';
      break;
    case '\\':
      char = '|';
      break;
    default:
      char = '/';
      break;
    }
    process.stdout.write('\r' + char + '  ');
  }, delay);
  delay += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, 1900);