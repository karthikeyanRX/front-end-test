
// import { useState } from 'react';
import './App.css';
// import Product from './Product';
// import InputForm from './Input_codes/InputForm';

// import InputForm from './input_codes/InputForm.jsx';

function App() {
//   const [hideValue, setHidevalue] = useState(false);

//   const toggleComponent = () => {
//     setHidevalue(!hideValue);
//   }
//     console.log(!hideValue,"inside");

//   console.log(hideValue ,"out side");
  
    return (
        <div>
            {/* <>
            <InputForm />
            </>
        
<div>
      {hideValue && <Product />}
    </div> */}

            <div>
                <ul className="navContent">
                    <li className="listStyle">Home</li>
                    <li className="listStyle" onClick={toggleComponent}>Product</li>
                    <li className="listStyle">Admine</li>
                </ul>

            </div>
            <div>
                <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f8152a84-ff22-4f54-8e55-12be63e15585._CR0%2C0%2C3000%2C1500_SX1500_.jpg" className="mainImage" />
            </div>
            <div className="subImage">
                <div>
                    <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/8fb6db2e-277b-4913-b27f-87bf893b4471._CR0%2C0%2C1500%2C1500_SX375_SY375_.jpg" className="subImage1" />
                </div>

                <div>
                    <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/2475a7af-ac03-4082-92fa-16d25a7295eb._CR0%2C0%2C1500%2C1500_SX320_SY320_.jpg" className="subImage1" />
                </div>

                <div>
                    <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/7f62ddcd-5690-472a-83f9-7888db1844e9._CR0%2C0%2C1500%2C1500_SX480_SY480_.jpg" className="subImage1" />
                </div>

                <div>
                    <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/bc27273d-39c0-4a9a-850b-22350a98f8e9._CR0%2C0%2C1500%2C1500_SX750_SY750_.jpg" className="subImage1" />
                </div>
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/100efc84-52c2-444d-80c3-4fdc428e3e2e._CR0%2C0%2C3000%2C1200_SX840_.jpg" className="subConentImage" />
            </div>

            <div>
                <div className="headingStyle">BEST DEAL MODELS</div>
            </div>

            <div className="flex1">
                <div>
                    <img src="https://m.media-amazon.com/images/I/71bziZ6cBRL._SL1500_.jpg" alt="" className="ProductImage" />
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
                    <p><span classNmae="percentage_color">-78%</span> ₹3,999 </p>
                    <p className="line_through">M.R.P.: ₹15,000</p>s
                    <div className="hidden_button">
                        <p><span>EMI</span> starts at ₹194. No Cost EMI available</p>
                        <div className="dropdown">
                            <button className="dropbtn">EMI Option
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

                <div className="flex1">
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
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61a2KReRBbL._SL1100_.jpg" alt="" className="ProductImage" />
                    </div>

                </div>

                <div>
                    <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b2407a43-3383-4ec7-9dbc-3ec336f20576._CR0%2C0%2C3000%2C680_SX1500_.jpg"
                        alt="" className="mainImage" />

                </div>
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

                <div className="flex1">
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
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61r3W4DRfdL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg" alt="" className="ProductImage" />
                    </div>

                </div>

                <div className="footer_background">
                    <div className="footer">

                        <div>
                            <ul>
                                <li className="footer_heading">Get to Know Us</li>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Press Releases</li>
                                <li>Amazon Science</li>
                            </ul>
                        </div>


                        <div>
                            <ul>
                                <li className="footer_heading">
                                    Connect with Us</li>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li className="footer_heading">
                                    Make Money with Us</li>
                                <li>Sell on Amazon</li>
                                <li>Sell under Amazon Accelerator</li>
                                <li>Protect and Build Your Brand</li>
                                <li>Amazon Global Selling</li>
                                <li>Become an Affiliate</li>
                                <li>Fulfilment by Amazon</li>
                                <li>Advertise Your Products</li>
                                <li>Amazon Pay on Merchants</li>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li className="footer_heading">
                                    Let Us Help You</li>
                                <li>COVID-19 and Amazon</li>
                                <li>Your Account</li>
                                <li>Returns Centre</li>
                                <li>100% Purchase Protection</li>
                                <li>Amazon App Download</li>
                                <li>Help</li>
                            </ul>
                        </div>

                    </div>
                    <div>
                        <ul className="bottom_footer">
                            <li>Australia</li>
                            <li>Brazil</li>
                            <li>Canada</li>
                            <li>China</li>
                            <li>France</li>
                            <li>Germany</li>
                            <li>Italy</li>
                            <li>Japan</li>
                            <li>Mexico</li>
                            <li>Poland</li>
                            <li>Turkey</li>
                            <li>Spain</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
