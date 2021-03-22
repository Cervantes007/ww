import { Action, Input, useService, Headers } from '../src';
import { b } from './pipes';
import { CatService } from './cat.service';

export class CatWk {
  catService = useService(CatService);

  log(msg) {
    console.log(msg);
  }

  @Action(b)
  async getCats(@Input() body) {
    this.log(body);
    console.log(this.catService.meow());
    return body;
  }

  @Action()
  async getCat(@Input('title') input: string, @Headers() headers) {
    this.log(headers);
    console.log(this.catService.name);
    return input;
  }
}
