import {injectable} from 'inversify';
import * as uuid from 'uuid/v4';

@injectable()
export class Utils {
	public stupidRandomImplementation(): string {
		return uuid().substr(0, 6);
	}
}
