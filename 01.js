

async function start() {
  console.log('operação')
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log('continua a operação')
}

console.log(start());