/**
 * Create aliases for the paths
 */
const aliases = (prefix = `src`) => ({
  '@frodo': `${prefix}/@frodo`,
  '@history': `${prefix}/@history`,
  '@lodash': `${prefix}/@lodash`,
  'app/store': `${prefix}/app/store`,
  'app/configs': `${prefix}/app/configs`,
  'app/layout': `${prefix}/app/layout`,
  'app/AppContext': `${prefix}/app/AppContext`,
});

module.exports = aliases;
