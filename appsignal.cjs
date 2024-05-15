// appsignal.cjs
const { Appsignal } = require("@appsignal/nodejs");

new Appsignal({
  active: true,
  name: process.env.APPSIGNAL_APP_NAME,
  pushApiKey: process.env.APPSIGNAL_PUSH_API_KEY
});
