import {AppServer} from './AppServer';

const apiServer = new AppServer();
apiServer.start()
	.catch((err) => {
		console.error(`Error starting server: ${err.message}`);
		process.exit(-1);
	});

const graceful = () => {
	apiServer.stop()
		.then(() => process.exit(0))
		.catch((err) => {
			console.error(`Error stopping server: ${err.message}`);
			process.exit(-1);
		});
};

// Stop graceful
process.on('SIGTERM', graceful);
process.on('SIGINT', graceful);
process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});
