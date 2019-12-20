const uploadFileToCloudinary = require("../../hooks/upload-file-to-clodinary");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [uploadFileToCloudinary()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
