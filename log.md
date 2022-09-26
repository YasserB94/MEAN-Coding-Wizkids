# MEAN STACK SETUP
[Tutorial](https://dev.to/jsheridanwells/a-modern-mean-stack-with-angular-and-typescript-part-1-242a)

$ ng new NameApp --create-application=false --new-project-root=. --skip-install=true

    --create-application=false just sets up the workspace.
    --new-project-root=. will help any configuration files (tsconfig.json, angular.json) find all of the locations in our project with minimal headaches.
    --skip-install=true skips installing the node_modules packages. Since Angular comes with a ton of dependencies, we'll do our npm install all at once later on. This makes it easier to delete the entire project and start over if something doesn't turn out right.

 cd NameApp
$ ng generate application client --skip-install=true

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init

@tailwind base;
@tailwind components;
@tailwind utilities;



!!!$ cp ./server/bin/www ./dist/api/bin