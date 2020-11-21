import './module';
import './scss/index.scss';

async function start() {
  return await Promise.resolve('async is working');
}

start().then(console.log);
