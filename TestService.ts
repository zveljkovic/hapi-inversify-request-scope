import {inject, injectable} from 'inversify';
import {TestServiceInterface} from './core/Interfaces';
import {TYPES} from './Types';

@injectable()
export class TestService implements TestServiceInterface {
	private requestTraceId: string;

	public constructor(
		@inject(TYPES.RequestTraceId) requestTraceId: string,
	) {
		this.requestTraceId = requestTraceId;
	}

	public doSomethingWithRequstContext(): string {
		return `TestService returned RequestTraceId as *${this.requestTraceId}*`;
	}
}
