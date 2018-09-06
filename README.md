# hapi-inversify-request-scope
Hapi framework + TypeScript + Inversify + Request Scope + TS Lint + ts-node-dev  EXAMPLE

This project is used as quick example on how to setup Hapi with TypeScript and Inversify with Request Scope dependency injection.

Run `npm install` and after that `npm run dev` to start the project. AppServer automatically launches two internal requests
to show that dependency injection works and that two separate controller instances were properly received two Request Scope dependencies.

Project uses Inversify child container feature to bind request based parameters. 
Types defined in parent containers are able to resolve these parameters 
but only when resolving through the child container.

Suggestions welcome!