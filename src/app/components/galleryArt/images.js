const images = [];

for (let i = 1; i <= 80; i++) {
  const imageName = `art${i}`;
  const imageImport = require(`../../../../public/${imageName}.png`).default;
  images.push({ id: i, name: imageName, src: imageImport });
}

export default images;
