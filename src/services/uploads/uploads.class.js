const { Service } = require("feathers-mongoose");

exports.Uploads = class Uploads extends Service {
  create(data, params) {
    const newData = {
      avatarUrl: data
    };

    return super.create(newData, params);
  }
};
