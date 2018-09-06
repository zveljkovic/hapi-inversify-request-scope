import {Request} from 'hapi';
import {Container} from 'inversify';
import {container} from '../Inversify.config';
import {TYPES} from '../Types';
import {UtilsInterface} from './Interfaces';

export async function createRequestContainer(request: Request): Promise<Container> {
	console.log('createRequestContainer starting');
	return new Promise<Container>((resolve, reject) => {
		setTimeout(() => {
			const utils = container.get<UtilsInterface>(TYPES.UtilsInterface);
			const requestContainer = container.createChild();
			const requestTraceId = utils.stupidRandomImplementation();
			requestContainer.bind(TYPES.RequestTraceId).toConstantValue(requestTraceId);
			console.log(`createRequestContainer binded RequestTraceId to ${requestTraceId}`);
			resolve(requestContainer);
		},         2000);
	});

}
