import { createServer, Server } from 'http';
import glob, { IOptions as GlobOptions } from 'glob';
import chalk from 'chalk';
import path from 'path';
import { requestListener } from './request-handler';
import { Pipe } from '../pipes';
import { EXTENSION } from '../utils/constants';

export let __app: App;

export class App {
  private server: Server;
  private _pipes: Pipe[] = [];

  constructor(options: any = {}) {
    loadWindWakerFiles(options.pattern);
    this.server = createServer(requestListener);
    if (!__app) {
      __app = this;
    }
  }

  pipeline(...pipe: Pipe[]) {
    if (pipe) {
      this._pipes = this._pipes.concat(pipe);
    }
  }

  get pipes() {
    return this._pipes || [];
  }

  listen(port = 4000) {
    return this.server.listen(port, () =>
      console.log(`Server running on http://localhost:${port}`),
    );
  }
}

const loadWindWakerFiles = (
  pattern = `src/**/*.@(${EXTENSION}).ts`,
  options: GlobOptions = { matchBase: true },
) => {
  process.env.NODE_ENV !== 'test' && console.log(chalk.bold.blue('Loading Wind-Waker Files:'));
  glob.sync(pattern, options).forEach(function (file) {
    process.env.NODE_ENV !== 'test' && console.log(chalk.green(`-> ${file}`));
    import(path.resolve(file));
  });
};
