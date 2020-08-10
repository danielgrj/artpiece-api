# artpiece API

To make easier the environment set up, docker and docker-compose will be used. It's recommended that
you read about this tool to better understand its usefulness.

After following the instructions the development environment should be all set up and you will only
need to start working, the changes you make should automatically be reflected.

## Setup

See the docker repository to setup the project.
[https://github.com/danielgrj/artpiece-docker](https://github.com/danielgrj/artpiece-docker)

## Code guidelines

### Branches

This project will use the Gitflow workflow so nothing will be push directly to master, every feature
will have its on branch.
[See more.](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

The nomenclature will be the following:

- `master`
- `develop_staging`
- `feature/my-awesome-feature`
- `fix/some-useful-fix`
- `hotfix/something-that-should-be-fix-in-production-asap`

### Eslint and prettier

This project use the following eslint presets:

`"plugin:prettier/recommended", "airbnb-base"`

The prettier rules are the following.

```javascript
{
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "printWidth": 100,
  "proseWrap": "always",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false
}
```

### Husky

Husky is a tool that makes easier to use git hooks to prevent bad commits or pushes. Simply put it
runs a script before the commit and if it failed the commit will be unsuccessful.
[To know more.](https://github.com/typicode/husky)

In this project this is used to check there is no errors with eslint or the tests and format the
files with prettier before a commit, if eslint or prettier can't fix the issue automatically you
need to do it manually.

If for whatever reason you need to make a commit bypassing the tests you can add `--no-verify` to
your command, but this is highly discourage.

Current hooks:

```json
{
  "hooks": {
    "pre-commit": "npm run check-types && lint-staged"
  }
}
```

### Type checking

There are two alternatives for this project [JSDocs](https://jsdoc.app/) or
[Typescript](https://www.typescriptlang.org/). Typescript will only be use for type checking,
nothing else will be implement and the transpilation will be done by Babel.

##### But why type checking?

Some considered that type checking helps to reduce the number of bugs, but it's only by a minimount
amount. The reason why it's useful to use type checking is to be able to tell at a glance what type
of data a function you didn't work in.

So if you find a function named `formatDate` you don't need to read all the function code to know
you need to pass a string, a number, a Date object or all the above.

The code and your IDE will let you know what you need to pass.

JSDocs type declaration

```javascript
/**
 * @param {(string|number|Date)} date - The date to be formatted
 */
function formatDate(date){
  ...
}
```

Typescript type declaration

```typescript
function formatDate(date: string | number | Date) {
  ...
}
```

### Credits

Some of this configurations are based on Kent C. Doods guidelines.
[Static testing tools](https://github.com/kentcdodds/static-testing-tools)
