# Full Stack SSR Javascript Web Application
Why did I build this?  Who should use it? What does it help solve?
## Overview
Some introduction to the detailed info to come.
### Technologies Used
- node
- express
- webpack
- react
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
- [ ] Unit test framework
- [ ] Styling integration
- [ ] Static asset management

## Contribution
create an issue, create a feature branch, create a pull request