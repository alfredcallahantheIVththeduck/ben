$(document).ready(function() {

const backgroundImgs = [
  "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-4k-Backgrounds-Screen-Download.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-4k-Backgrounds.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-4k-Backgrounds-For-Desktop.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/07/4k-Images-Free-Download.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/07/Amazing-nature-scenery-wallpaper-4k.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/07/Blue-sunset-Images-4k.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/07/Desktop-Photos-4k.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/07/Mountains-sky-light-clouds-gray-photos-4k.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/07/Pictures-HD-4k.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Desktop-Oregon-Wallpapers-Photos.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/05/Japan-Desktop-Wallpaper-HD.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/images2/Fall-Animated-Pictures.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/images2/Fall-Nature-Image.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/12/Autumn-River-Wallpaper-Widescreen.jpg",
  "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
  "https://store-images.s-microsoft.com/image/apps.17599.14222458110220046.63cf67f1-c306-44d3-8890-1cc6b204e75a.c80ed14f-26ee-41fa-bd94-fa317b47228c?mode=scale&q=90&h=1080&w=1920"
];
const randomNum = Math.floor(Math.random() * backgroundImgs.length);
const image = backgroundImgs[randomNum];

$("body").css({
  background: "url(" + image + ")",
  "background-repeat": "no-repeat",
  "background-size": "cover" })
});
