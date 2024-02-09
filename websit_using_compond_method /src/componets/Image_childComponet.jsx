import React from 'react'
import Product_disgn from './Product_disgn';
import { items } from './ArrayData';

const Image_childComponent = (props) => {
  console.log(props,"sfdsdfsdb;");
  // console.log(props,"share Indexs");
  // console.log(Image_childComponent, "jdfjchsdf");
  // console.log(props.index % 2 == 0,"element of number ");
  return (
    <div>
     
      <div className={props.index % 2 === 0 ? 'odd' : 'even'}>
        <div>
          <img src={props.img} />
        </div>

        <div>
          <p className="heading_weight"> {props.heading_weight}</p>
          <a href="#" className="sub_title">{props.sub_title}</a>
          <p className="sub1_heading">{props.sub1_heading}</p>
          <button className="flex1_button">{props.flex1_button}</button>
          <p className="percentage_color">{props.percentage_color}</p>
          <p className="line_through">{props.line_through}</p>
          <div className="hidden_button">
            <p> {props.hidden_button}</p>
          </div>
          <button className="booking_button">{props.booking_button}BOOKING</button>
        </div>
      </div>
    </div>

  )
}

export default Image_childComponent;