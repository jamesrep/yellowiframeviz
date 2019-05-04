// wallparse@gmail.com, James Dickson 2019.
// License: GPL v2.0

import yellowroutes from './server/routes/yellowvizroutes';

export default function (kibana) {
  return new kibana.Plugin({

    uiExports: {
      visTypes: ['plugins/yellowiframeviz/yviz']
    },

   config(Joi) 
   {
      return Joi.object({
        enabled: Joi.boolean().default(true),

        displayHost: Joi.string().hostname().default('localhost'),	
        displayPath: Joi.string().default('/help'),
        displayPort: Joi.number().integer().default(8081),

        useHttps: Joi.boolean().default(false),

        //blockXSS: Joi.boolean().default(true),
        restArray: Joi.array().items().single()

      }).default();
    },
    
    init(server, options) 
    {
      yellowroutes(server, options);
    }	

  });
};
