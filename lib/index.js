const Joi = require('joi')
const Package = require('../package.json')


const debug = (server, options, next) => {

  const version = options.version || process.env.npm_package_version || '0.0.0'
  const auth = options.auth || false

  server.route({
    method: 'GET',
    path: '/debug',
    config: {

      auth,
      description: 'Print debugging information',
      tags: ['api', 'debug'],
      plugins: {
        'hapi-swagger': {
        },
      },

      handler: (request, reply) => {

        const { info } = server

        reply({
          version,
          info,
        })

      },

      response: {
        schema: Joi.object().keys({
          version: Joi.string().required(),
          info: Joi.any(),
        }),
      },

    },
  })

  next()

}

debug.attributes = {
  name: 'hapi-debug-route',
  version: Package.version,
}


module.exports = debug
