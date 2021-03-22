import { Service, useService } from '../src';
import { AnotherService } from './another.service';

@Service()
export class CatService {
  anotherService = useService(AnotherService);
  name = 'AAAA';

  meow() {
    console.log('meow');
    console.log(this.anotherService.name);
    return 'meow';
  }
}
