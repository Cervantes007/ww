import { cors, _Pipeline } from '../src';

new _Pipeline(cors())
  .action('/getUsers', ({ req }) => req.url)
  .action('/getUsers2', async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('abcX');
      }, 2000);
    });
  });
