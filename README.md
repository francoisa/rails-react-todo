# rails-react-todo
A todo list app with a reactjs frontend and rails backend

## Created With

1. Create the rails app

```sh
rails new rails-react-todo --skip --css=bootstrap \
  --skip-docker --skip-action-mailer --skip-action-mailbox --skip-action-text \
  --skip-active-job --skip-active-storage --skip-action-cable \
  --skip-devcontainer -j esbuild
```

2. All rails apps include support for javascript packages. These packages are configured in a file called `package.json`. In other words the package.json specifies which packages to install. The program `npm` is used to add packages to the rails project and to update package.json

```sh
npm install react react-dom
```

3. Generate a controller with an index route (and view)

```sh
bin/rails generate controller Home index
```

4. To build the React components.

```sh
npm run build
```

5. Rails also has several scripts called rake tasks that perform various actions.  The task `javascript:install:esbuild` installs esbuild which is used to deliver the javascript to the rails application.


```sh
bin/rails javascript:install:esbuild
```

