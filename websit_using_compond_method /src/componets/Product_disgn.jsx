import React from "react";
import Image_childComponent from "./Image_childComponet";
import { items } from "./ArrayData";

const Product_disgn = () => {
 
  console.log(items, "first");

//   const product_disgn = data.map((item, index) => {
//     // console.log(item, "jbhdsbhvbs");
//     // console.log(index,"index");
//     return (
//       <Image_childComponent
//         index={index}
//         img={item.img}
//         heading_weight={item.heading_weight}
//         sub_title={item.sub_title}
//         sub_heading={item.sub_heading}
//         flex1_button={item.flex1_button}
//         percentage_color={item.percentage_color}
//         line_through={item.line_through}
//       />
//     );
//   });
  return (
    <div className="flex">
      <div className="headingStyle">BEST DEAL MODELS</div>
      {items.map((item, index) => {
        return (
          <Image_childComponent
            index={index}
            img={item.img}
            heading_weight={item.heading_weight}
            sub_title={item.sub_title}
            sub_heading={item.sub_heading}
            flex1_button={item.flex1_button}
            percentage_color={item.percentage_color}
            line_through={item.line_through}
          />
        );
      })}
    </div>
  );
};

export default Product_disgn;
