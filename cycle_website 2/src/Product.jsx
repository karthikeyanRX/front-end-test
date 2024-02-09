import './Product/Productpage.css';
import { useState } from 'react';
import App from './App';


const Product = () => {

    const [value, setValue] = useState(false);

    const backToHome = () => {
        setValue(!value)
    }
    console.log(value, "out side vdsfgasgad");
    return (
        <div>
            {value && < App />}
            <h1>PRODUCTS</h1>
            <div className="responsive">
                <a className="back_button" onClick={backToHome}>HOME</a>
                {/* <a className="back_button">ADMINE Page</a> */}
                <div className="flex2">
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71bziZ6cBRL._SL1500_.jpg" alt="" className="ProductImage" />
                    </div>

                    <div>
                        <p className="heading_weight">Lifelong MTB with Rigid Fork 26T Mountain Bikes<br /> Premium Single Speed Cycle,
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
                        </div>
                        <div>
                            <button className="booking_button" onclick="createNewElement1()">Booking</button>
                        </div>
                        <div id="hello1" herf="C:\Users\ELCOT\Desktop\Admine.html" style={{ display: 'none' }}>
                            <label>Name:</label>
                            <input type="text" id="name1" />
                            <label>Email:</label>
                            <input type="email" id="email1" />
                        </div>
                        <p id="ans1"></p>
                        <p id="ans2"></p>

                        <div>
                            <input type="button" value="ADD" onclick="submitvale('name1','email1','HeroCycle')"
                                herf="C:\Users\ELCOT\Desktop\Admine.html" />
                        </div>

                    </div>

                </div>


                <div className="flex2">
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61oKi5TN8cL._SL1100_.jpg" alt="" className="ProductImage" />
                    </div>

                    <div>
                        <p className="heading_weight">Lifelong MTB with Rigid Fork 26T Mountain Bikes<br /> Premium Single Speed Cycle,
                            Frame
                            Size: 18 inches|<br /> Cycle
                            with Free Installation Assistance, Ideal for<br /> Adults 14+ Years (LLBC2604, Black)</p>
                        <a href="#" className="sub_title">Visit the Lifelong Store</a>
                        <p className="sub1_heading">1K+ bought in past month</p>
                        <button className="flex1_button">Great Indian Festival</button>
                        <p><span className="percentage_color">-58%</span> ₹8,999 </p>
                        <p className="line_through">M.R.P.: ₹20,000</p>
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
                        </div>
                        <div>
                            <button className="booking_button" onclick="createNewElement2()">Booking</button>
                        </div>

                        <div id="hello2" style={{ display: 'none' }}>
                            <label>Name:</label>
                            <input type="text" id="name2" />
                            <label>Email:</label>
                            <input type="email" id="email2" />
                        </div>


                        <div>
                            <input type="button" value="ADD" onclick="submitvale('name2','email2','RagerCycle')"
                                herf="C:\Users\ELCOT\Desktop\Admine.html" />
                        </div>


                    </div>

                </div>


                <div className="flex2">
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61a2KReRBbL._SL1100_.jpg" alt="" className="ProductImage" />
                    </div>

                    <div>
                        <p className="heading_weight">Lifelong MTB with Rigid Fork 26T Mountain Bikes<br /> Premium Single Speed Cycle,
                            Frame
                            Size: 18 inches|<br /> Cycle
                            with Free Installation Assistance, Ideal for<br /> Adults 14+ Years (LLBC2604, Black)</p>
                        <a href="#" className="sub_title">Visit the Lifelong Store</a>
                        <p className="sub1_heading">1K+ bought in past month</p>
                        <button className="flex1_button">Great Indian Festival</button>
                        <p><span className="percentage_color">-68%</span> ₹6,999 </p>
                        <p className="line_through">M.R.P.: ₹10,000</p>
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
                        </div>
                        <div>
                            <button className="booking_button" onclick="createNewElement3()">Booking</button>
                        </div>


                        <div id="hello3" style={{ display: 'none' }}>
                            <label>Name:</label>
                            <input type="text" id="name3" />
                            <label>Email:</label>
                            <input type="email" id="email3" />
                        </div>


                        <div>
                            <input type="button" value="ADD" onclick="submitvale('name3','email3','RaceCycle')"
                            />
                        </div>
                    </div>
                </div>

                <div id="demo"></div>
            </div>
        </div>
    )
}
export default Product;