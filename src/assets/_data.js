import img1 from "./images/plastic-fantastic-in-de-drom-mark-van-loon.jpg";
import img2 from "./images/richard-rood-hr2-pipelife-3d-printer-03-02-2020-4816.jpg";
import img3 from "./images/20-Flush-Flow-School-Project-Vienna-2.jpg";
import img4 from "./images/WhatsApp Image 2021-02-01 at 08-27-27.jpg";
import img5 from "./images/Via-Carpathia-Road-Drainage-Poland.jpg";

const imgArr = [
  {
    src: img1,
    alt: "ACHIEVING A CIRCULAR ECONOMY REQUIRES TARGETED INDUSTRY ACTION"
  },
  {
    src: img2,
    alt: "AUTOMATED 3D PRINTING: UPGRADE FOR  CIVIL ENGINEERING AND INCREASED SAFETY "
  },
  {
    src: img3,
    alt: "Ensuring Safe Water Supply in Earthquake-Affected Croatia "
  },
  {
    src: img4,
    alt: "First Large-Scale Application of Pipelife’s New Wc Cistern Systems in Austria"
  },
  {
    src: img5,
    alt: "Pragma Pipes Ensure Road Safety in Poland"
  }
];

// Carousel images
// ARR - put objects into array (need for .map())
let Images = [];
for (let i = 0; i < imgArr.length; i++) {
    console.log(imgArr[i].src);
  Images.push({
    src: imgArr[i].src,
    alt: imgArr[i].alt
  });
}
// (END) Carousel images

export { imgArr, Images };
