// import { GiCupcake } from "react-icons/gi";
// import cake5 from "../images/cake-5.jfif";
import SubSellers from "./SubSellers";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import car1 from "../images/car1.jpg"
import car2 from "../images/car2.jpg"


export default function Categories() {

  return (
    <>
      <div className="w-[95%] mx-auto">

        {/* other comp */}
        <div className="grid mt-2">
          <Carousel>
            <CarouselNext />
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <div className="mt-2">
                  <div>
                    <img src={car1} alt="cake" className="rounded-md" />
                  </div>
                  <div className="text-center my-4">
                    <h3 className="text-[#1F252C] text-base font-medium">
                      by{" "}
                      <span className="text-[#3084A9] text-sm font-normal">
                        HERTY TASTY HOUSE
                      </span>
                    </h3>
                    <h5 className="my-4 text-[#757C86] font-medium">¢400-¢800</h5>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="mt-2">
                  <div>
                    <img src={car2} alt="cake" className="rounded-md" />
                  </div>
                  <div className="text-center my-4">
                    <h3 className="text-[#1F252C] text-base font-medium">
                      by{" "}
                      <span className="text-[#3084A9] text-sm font-normal">
                        HERTY TASTY HOUSE
                      </span>
                    </h3>
                    <h5 className="my-4 text-[#757C86] font-medium">¢400-¢800</h5>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="mt-2">
                  <div>
                    <img src={car1} alt="cake" className="rounded-md" />
                  </div>
                  <div className="text-center my-4">
                    <h3 className="text-[#1F252C] text-base font-medium">
                      by{" "}
                      <span className="text-[#3084A9] text-sm font-normal">
                        HERTY TASTY HOUSE
                      </span>
                    </h3>
                    <h5 className="my-4 text-[#757C86] font-medium">¢400-¢800</h5>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="mt-2">
                  <div>
                    <img src={car2} alt="cake" className="rounded-md" />
                  </div>
                  <div className="text-center my-4">
                    <h3 className="text-[#1F252C] text-base font-medium">
                      by{" "}
                      <span className="text-[#3084A9] text-sm font-normal">
                        HERTY TASTY HOUSE
                      </span>
                    </h3>
                    <h5 className="my-4 text-[#757C86] font-medium">¢400-¢800</h5>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
          </Carousel>
        </div>
        <SubSellers />
      </div>

    </>
  );
}

// const Carousel = () => {
//   return (
//     <>
//       <div className="grid grid-cols-3 gap-3 mt-2">
//         <div className="mt-2">
//           <div>
//             <img src={car1} alt="cake" className="rounded-md" />
//           </div>
//           <div className="text-center my-4">
//             <h3 className="text-[#1F252C] text-base font-medium">
//               by{" "}
//               <span className="text-[#3084A9] text-sm font-normal">
//                 HERTY TASTY HOUSE
//               </span>
//             </h3>
//             <h5 className="my-4 text-[#757C86] font-medium">¢400-¢800</h5>
//           </div>
//         </div>
//         <div className="mt-2">
//           <div>
//             <img src={car2} alt="cake" className="rounded-md" />
//           </div>
//           <div className="text-center my-4">
//             <h3 className="text-[#1F252C] text-base font-medium">
//               by{" "}
//               <span className="text-[#3084A9] text-sm font-normal">
//                 HERTY TASTY HOUSE
//               </span>
//             </h3>
//             <h5 className="my-4 text-[#757C86] font-medium">¢400-¢800</h5>
//           </div>
//         </div>
//         <div className="mt-2">
//           <div>
//             <img src={car3} alt="cake" className="rounded-md" />
//           </div>
//           <div className="text-center my-4">
//             <h3 className="text-[#1F252C] text-base font-medium">
//               by{" "}
//               <span className="text-[#3084A9] text-sm font-normal">
//                 HERTY TASTY HOUSE
//               </span>
//             </h3>
//             <h5 className="my-4 text-[#757C86] font-medium">¢400-¢800</h5>
//           </div>
//         </div>
//         <div className="mt-2">
//           <div>
//             <img src={car4} alt="cake" className="rounded-md" />
//           </div>
//           <div className="text-center my-4">
//             <h3 className="text-[#1F252C] text-base font-medium">
//               by{" "}
//               <span className="text-[#3084A9] text-sm font-normal">
//                 HERTY TASTY HOUSE
//               </span>
//             </h3>
//             <h5 className="my-4 text-[#757C86] font-medium">¢400-¢800</h5>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


// {/* <div className="my-2">
//         <h3 className="text-[#1F252C] font-medium">
//           Shop <span className="text-[#3084A9]">by Categories</span>
//         </h3>
//       </div>

//       <div className="hidden md:flex justify-between my-2">
//         {cakes.map((CakeComponent, index) => (
//           <div
//             key={index}
//             className="bg-[#D4EEE2] rounded-lg text-center py-2 px-2 flex flex-col items-center cursor-pointer"
//           >
//             <CakeComponent />
//             <small className="text-xs font-normal">Carrot Cake</small>
//           </div>
//         ))}
//       </div> */}


// // 50% on small screens and 33% on larger screens.
// <Carousel>
//   <CarouselContent>
//     <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
//     <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
//     <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
//   </CarouselContent>
// </Carousel>
