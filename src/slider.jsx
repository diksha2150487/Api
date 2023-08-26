// import React from "react";
// import "./Mainbody.css";
// import banner from "./banner-img.png";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// export default function Mainbody() {
//   const sliderImageUrl = [
//     //First image url
//     {
//       url: "https://assets.designhill.com/resize_img.php?atyp=st_page_file&pth=ad_bt_h1i1m6igs_org||BT837304||one_hd_1info_1multiple_image_slider_with_label_link_image2_img&flp=1653391306-457516160628cbfca50fdf0-93303467.jpg",
//     },
//     {
//       url: "https://wallpaperaccess.com/full/200440.jpg",
//     },
//     //Second image url
//     {
//       url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
//     },
//     //Third image url
//     {
//       url: "https://i.pinimg.com/originals/cb/52/63/cb52634bb600b9f8de7c64c544c9e7e6.png",
//     },

//     //Fourth image url

//     {
//       url: "https://e0.pxfuel.com/wallpapers/116/2/desktop-wallpaper-love-birds-beautiful-nature-background.jpg",
//     },
//   ];
//   return (
//     <div>
//       <div className="bodymain">
//         <div className="left1">
//           <div className="p1">
//             <h1>Scale Design & Dev</h1>
//             <h1>Opertaions with</h1>
//             <h1> Avocode Enterprise</h1>
//           </div>
//           <div className="p2">
//             <p>
//               A fully integrated suite of authentication & authoriz products,
//               Stytch's
//             </p>
//             <p>Platform removes the headache of.</p>
//           </div>
//           <div className="but1">
//             <button>
//               <b>Download The Theme</b>
//             </button>
//           </div>
//         </div>
//         <div className="right1">
//           <img src={banner} alt="logo" />
//           <Carousel
//             responsive={responsive}
//             autoPlay={true}
//             swipeable={true}
//             draggable={true}
//             showDots={true}
//             infinite={true}
//             partialVisible={false}
//             dotListClass="custom-dot-list-style"
//           >
//             {sliderImageUrl.map((imageUrl, index) => {
//               return (
//                 <div className="slider" key={index}>
//                   <img src={imageUrl.url} alt="movie" />
//                 </div>
//               );
//             })}
//           </Carousel>
//         </div>
//       </div>

//       {/* <div className="container2-highlight">
//         <div className="both-same">
//           <div class="left-class-easier">
//             <p class="payroll">The Highlighting Part</p>
//             <p class="wow">Of Our Solution.</p>
//           </div>
//           <div class="right-class-content">
//             <p class="milzo">
//               Lorem ipsum dolor sit amet,consectetur adipiscing elit.
//             </p>
//             <p className="dilo">
//               Morbi egestas Werat viverra id et aliquet vulputate egestas
//               sollicitudin .
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// } */}
