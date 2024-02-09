import React from 'react'

const ProductImage2 = () => {
  return (
    <div>
        <div className="flex1">
    <div>
        <img src="https://m.media-amazon.com/images/I/61oTHYKzv5L._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg" alt="" className="ProductImage" />
    </div>

    <div>
        <p className="heading_weight">Lifelong MTB with Rigid Fork 26T Mountain Bikes<br /> Premium Single Speed
            Cycle,
            Frame
            Size: 18 inches|<br /> Cycle
            with Free Installation Assistance, Ideal for<br /> Adults 14+ Years (LLBC2604, Black)</p>
        <a href="#" className="sub_title">Visit the Lifelong Store</a>
        <p className="sub1_heading">1K+ bought in past month</p>
        <button className="flex1_button">Great Indian Festival</button>
        <p><span className="percentage_color">-78%</span> ₹3,999 </p>
        <p className="line_through">M.R.P.: ₹15,000</p>s
        <div className="hidden_button">
            <p><span>EMI</span> starts at ₹194. No Cost EMI available</p>
            <div className="dropdown">
                <button className="dropbtn">EMI Option
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#">Amazon pay Later</a>
                    <a href="#">Debit Card EMI</a>
                    <a href="#">Other EMI</a>
                </div>
            </div>
            <button className="booking_button">Booking</button>
        </div>

    </div>
</div>
</div>
  )
}

export default ProductImage2