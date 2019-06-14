var Jimp = require("jimp");
const setup = require("./setup.json");
const fileName = process.argv[2];
for (const image in setup.iOS_Setup.images) {
  Jimp.read(fileName)
    .then(lenna => {
      return lenna
        .resize(
          setup.iOS_Setup.images[image].height,
          setup.iOS_Setup.images[image].width
        )
        .write(`./icons/${setup.iOS_Setup.images[image].fileName}_${fileName}`);
    })
    .catch(err => {
      console.error(err);
    });
}
