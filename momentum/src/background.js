const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];

randImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${randImage})`;