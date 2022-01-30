
## DEV

To start the dev server for developement

### `npm start`




## DEPLOY

To deploy, first create a build distribution

### `npm run build`

Then deploy to netlify :

### `netlify deploy cranky-jennings-0d3e2f.netlify.app`

(make sure to select directory : 'build')

Check URL. If everything looks OK, then deply with prod flag.

### `netlify deploy --prod`



Note : installed "react-app-rewired" to override certain parts of the webpack config for CRA so that we can use 
html-loader. See config-overrides.js