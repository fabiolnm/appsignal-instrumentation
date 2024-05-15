export function register() {
  console.info('Registering AppSignal instrumentation')
  require('./appsignal.cjs')
}