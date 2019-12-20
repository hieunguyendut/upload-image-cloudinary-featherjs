// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const cloud = require("../cloudinaryConfig");

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const filePath = context.params.file.path;

    await cloud
      .uploads(filePath)
      .then(result => {
        context.data = result.url;
      })
      .catch(error => {
        throw new Error(error);
      });
    return context;
  };
};
