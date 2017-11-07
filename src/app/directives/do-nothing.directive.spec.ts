import { DoNothingDirective } from './do-nothing.directive';
import {PoniesService} from "../ponies/services/ponies.service";

describe('DoNothingDirective', () => {
  let poniesService:PoniesService;

  it('should create an instance', () => {
    const directive = new DoNothingDirective(poniesService);
    expect(directive).toBeTruthy();
  });
});
