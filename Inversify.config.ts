import {Container} from 'inversify';
import {TestControllerInterface, TestServiceInterface, UtilsInterface} from './core/Interfaces';
import {Utils} from './helpers/Utils';
import {TestController} from './TestController';
import {TestService} from './TestService';
import {TYPES} from './types';

export const container = new Container();
container.bind<TestControllerInterface>(TYPES.TestControllerInterface).to(TestController);
container.bind<UtilsInterface>(TYPES.UtilsInterface).to(Utils).inSingletonScope();
container.bind<TestServiceInterface>(TYPES.TestServiceInterface).to(TestService);
