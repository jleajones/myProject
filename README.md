# Full Stack SSR Javascript Web Application
Why did I build this?  Who should use it? What does it help solve?
## Overview
Some introduction to the detailed info to come.
### Technologies Used
- node
- express
- webpack
- react
- redux
- styled-components
- jest
- enzyme
- eslint
- prettier
### Directory Structure
```yaml
/
- bin/
- build/
- src/
- - client/
- - - components/
- - - - shared/
- - - - - SomeComponentDir/
- - - - - - index.js
- - - - pages/
- - - - - SomePageDir/
- - - - - - index.js
- - - - - - SomePageSpecificComponentDir/
- - - - - - - index.js
- - - index.js
- - server/
- - - filters/
- - - handlers/
- - - - reducers/
- - - lib/
- - - - utils/
- - - routes/
- - - - api/
- - - html.js
- - - index.js
- - static/
- .babelrc
- .gitignore
- .prettierrc
- package.json
- package-lock.json
- README.md
- webpack.config.js
```

## Development
Build the app:
```bash
npn run build
```

Start the server:
```bash
npn run start
```

Run tests:
```bash
npn run test
```

## Deployment
Build the app for production:
```bash
npn run build:prod
```

Start the server for prod:
```bash
npn run start:prod
```

## Road Map
-[x] webpack configuration
    -[x] client
    -[x] server
    -[x] Aliases
-[x] client
    -[x] React
    -[x] Styled Components
    -[x] Redux
-[x] server
    -[x] Express
    -[x] Logger
    -[x] API
    -[x] SSR
    -[ ] Auth
-[x] eslint configuration
    - `.eslintrc`
    - `webpack.config.js`
-[x] PropTypes
-[ ] Environment Configuration
-[ ] Database connection
    -[ ] Postgres
    -[ ] Knex
    -[ ] GraphQL
-[ ] Tests
    -[ ] jest
        - `jest.config.js`
        -[x] styled components
        - https://www.styled-components.com/docs/tooling#jest-integration
        -[x] withRouter (React Router)
        - https://reacttraining.com/react-router/web/guides/testing
        -[ ] connect (Redux)
    -[x] enzyme
        - `enzyme.setup.js`
        - https://airbnb.io/enzyme/
    -[ ] client
        - [x] unit tests
        - [ ] integration tests
        - [ ] e2e tests
    -[ ] server
        - [ ] unit tests
        - [ ] integration tests
        - [ ] e2e tests

## Contribution
create an issue, create a feature branch, create a pull request