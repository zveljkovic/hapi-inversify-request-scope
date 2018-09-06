import {Request, ResponseToolkit} from 'hapi';
import {inject, injectable} from 'inversify';
import {TestControllerInterface, TestServiceInterface} from './core/Interfaces';
import {TYPES} from './Types';

@injectable()
export class TestController implements TestControllerInterface {
	private testServiceInterface: TestServiceInterface;

	public constructor(
		@inject(TYPES.TestServiceInterface) testServiceInterface: TestServiceInterface,
	) {
		this.testServiceInterface = testServiceInterface;
	}

	public test(request: Request, h: ResponseToolkit) {
		return this.testServiceInterface.doSomethingWithRequstContext();
	}
}
