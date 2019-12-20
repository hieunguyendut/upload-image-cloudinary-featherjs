const multer = require("multer");
const mkdirp = require("mkdirp");

const uploadPath = "uploads/";
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

mkdirp.sync(uploadPath);

const { Uploads } = require("./uploads.class");
const createModel = require("../../models/uploads.model");
const hooks = require("./uploads.hooks");

module.exports = function(app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate")
  };

  // Initialize our service with any options it requires
  app.use(
    "/uploads",
    upload.single("avatar"),
    function(req, res, next) {
      req.feathers.file = req.file;
      next();
    },
    new Uploads(options, app)
  );

  // Get our initialized service so that we can register hooks
  const service = app.service("uploads");

  service.hooks(hooks);
};
