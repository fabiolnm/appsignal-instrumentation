// appsignal.cjs
const { Appsignal } = require("@appsignal/nodejs")

const settings = {
  active: true,
  name: process.env.APPSIGNAL_APP_NAME,
  pushApiKey: process.env.APPSIGNAL_PUSH_API_KEY,
  disableDefaultInstrumentations: [
    '@opentelemetry/instrumentation-http',
  ],
}

console.info('Starting Appsignal, settings:', { 
  ...settings, pushApiKey: '***'
})
new Appsignal(settings)
