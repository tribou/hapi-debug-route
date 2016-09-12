# hapi-debug-route

#### Usage

```js
const DebugRoute = require('hapi-debug-route')
const { version } = require('./package.json')

const DebugRoutePlugin = {
  register: DebugRoute,
  options: {
    auth: false, // Passed to config.auth; Default: false
    version,
  },
}

server.register(DebugRoutePlugin, (error) => {

  if (error) return server.log(['error'], error)

  return server.start(() => {

    server.log(['info'], `Server running at: ${server.info.uri}`)
    server.log(['info'], `Debug route at: ${server.info.uri}/debug`)

  })

})
```
