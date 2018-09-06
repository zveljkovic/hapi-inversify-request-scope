import {Lifecycle} from 'hapi';
import Method = Lifecycle.Method;

export interface TestControllerInterface {
	test: Method;
}

export interface TestServiceInterface {
	doSomethingWithRequstContext: () => string;
}

export interface SomeParentContainerSingletonInterface {
	doSomeStuff: () => string;
}

export interface UtilsInterface {
	stupidRandomImplementation: () => string;
}
