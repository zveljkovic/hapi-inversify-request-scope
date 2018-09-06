import 'reflect-metadata';

import {Request, ResponseToolkit, Server} from 'hapi';
import {createRequestContainer} from './core/CreateRequestContainer';
import {TestControllerInterface} from './core/Interfaces';
import {TYPES} from './Types';

export class AppServer {
	private server: Server;

	constructor() {
		this.server = new Server({
			port: 3000,
			host: 'localhost',
			debug: {
				request: ['error'],
			},
		});

		this.server.route({
			method: 'GET',
			path: '/{name}',
			handler: async (request: Request, h: ResponseToolkit) => {
				const requestContainer = await createRequestContainer(request);
				await new Promise(((resolve) => setTimeout(resolve, 2000)));
				const controller = requestContainer.get<TestControllerInterface>(TYPES.TestControllerInterface);
				return controller.test(request, h);
			},
		});
	}

	public async start(): Promise<void> {
		await this.server.start();
		console.log(`Server running at: ${this.server.info.uri}`);
		this.server.inject({url: '/asd'}).then((a) => console.log(a.result));
		this.server.inject({url: '/asd'}).then((a) => console.log(a.result));
	}

	public async stop(): Promise<void> {
		await this.server.stop();
	}
}
