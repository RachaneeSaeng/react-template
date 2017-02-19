# ReactTemplate
Template to create react application with Typescipt + Babel + WebPack + Hot Loader.

Run below command in command windows to install all modules specifified in `package.json`.

`npm install `

## Development
comment out following line from `webpack.config.js`

`process.env.NODE_ENV = 'production';`

Then run `npm start` in command window at the project folder.

## Production
uncomment following line from `webpack.config.js`

`process.env.NODE_ENV = 'production';`

Then run `webpack -p` in command window at the project folder.

