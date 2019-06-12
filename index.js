// const resizer = require("node-image-resizer");
var Jimp = require("jimp");

var versions = {
  image: [
    {
      prefix: "iphone_notification_2x_",
      width: 40,
      height: 40
    },
    {
      prefix: "iphone_notification_3x_",
      width: 60,
      height: 60
    },
    {
      prefix: "iphone_settings_2x_",
      width: 58,
      height: 58
    },
    {
      prefix: "iphone_settings_3x_",
      width: 87,
      height: 87
    },
    {
      prefix: "iphone_spotlight_2x_",
      width: 80,
      height: 80
    },
    {
      prefix: "iphone_spotlight_3x_",
      width: 120,
      height: 120
    },
    {
      prefix: "iphone_App_2x_",
      width: 120,
      height: 120
    },
    {
      prefix: "iphone_App_3x_",
      width: 180,
      height: 180
    },
    {
      prefix: "ipad_notification_2x_",
      width: 20,
      height: 20
    },
    {
      prefix: "ipad_notification_3x_",
      width: 40,
      height: 40
    },
    {
      prefix: "ipad_settings_2x_",
      width: 29,
      height: 29
    },
    {
      prefix: "ipad_settings_3x_",
      width: 58,
      height: 58
    },
    {
      prefix: "ipad_spotlight_2x_",
      width: 40,
      height: 40
    },
    {
      prefix: "ipad_spotlight_3x_",
      width: 80,
      height: 80
    },
    {
      prefix: "ipad_App_2x_",
      width: 76,
      height: 76
    },
    {
      prefix: "ipad_App_3x_",
      width: 152,
      height: 152
    },
    {
      prefix: "ipad_Pro_App_2x_",
      width: 167,
      height: 167
    },
    {
      prefix: "App_Store",
      width: 1024,
      height: 1024
    }
  ]
};

// console.log(versions.image);
const fileName = "weight-lifting_original.png";
for (const image in versions.image) {
  Jimp.read(fileName, (err, lenna) => {
    if (err) throw err;
    lenna
      .resize(versions.image[image].height, versions.image[image].width) // resize
      .write(`./icons/${versions.image[image].prefix}_${fileName}`); // save
  });
}
