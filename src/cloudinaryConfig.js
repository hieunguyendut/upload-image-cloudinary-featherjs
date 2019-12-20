const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "cloud_name",
  api_key: "api_key",
  api_secret: "api_secret"
});

exports.uploads = file => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(file, (error, result) => {
      if (result) {
        resolve(result);
      }
      if (error) {
        reject(error);
      }
    });
  });
};
