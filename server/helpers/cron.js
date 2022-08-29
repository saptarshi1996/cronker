const glob = require('glob');
const path = require('path');

exports.checkURLValid = (url = '') => {
  const expression = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
  return url.match(expression);
};

exports.requireAll = () => {
  glob.sync('./crons/*.js').forEach((file) => {
    // eslint-disable-next-line import/no-dynamic-require
    require(path.resolve(file));
  });
};

exports.removeRequired = (id) => {
  const filePath = path.resolve(`./crons/${id}.js`);
  delete require.cache[filePath];
};
