import imageOne from "/public/service-1.jpeg";
import imageTwo from "/public/service-2.jpeg";
import imageThree from "/public/service-3.jpeg";
import imageFour from "/public/service-4.jpeg";
import imageFive from "/public/service-5.jpeg";
import imageSix from "/public/service-6.jpeg";
import imageSeven from "/public/service-7.jpeg";
import imageEight from "/public/service-8.jpeg";
import imageNine from "/public/service-9.jpeg";
import imageTen from "/public/service-10.jpeg";

export const SERVICES = () => {
  return [
    {
      title: "balinese masas",
      price: "180k/60 minutes",
      image: imageOne,
    },
    {
      title: "aromatherapy",
      price: "200k/60 minutes",
      image: imageTwo,
    },
    {
      title: "hot stone massage",
      price: "250k/90 minutes",
      image: imageThree,
    },
    {
      title: "refleksi",
      price: "150k/60 minutes",
      image: imageFour,
    },
    {
      title: "foot scrub",
      price: "100k/30 minutes",
      image: imageFive,
    },
    { title: "body scrub", price: "150k", image: imageSix },
    {
      title: "medical massage",
      price: "200k/60 minutes",
      image: imageSeven,
    },
    {
      title: "deep tissue",
      price: "200k/60 minutes",
      image: imageEight,
    },
    {
      title: "bamboo massage",
      price: "200k/60 minutes",
      image: imageNine,
    },
    {
      title: "facial",
      price: "150k/30 minutes",
      image: imageTen,
    },
  ];
};
