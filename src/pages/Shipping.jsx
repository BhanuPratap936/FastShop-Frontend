import { Link, useLocation, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { IoIosArrowForward } from "react-icons/io"
import Footer from "../components/Footer"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { place_order } from "../store/reducers/orderReducer"

const Shipping = () => {

    // const {state} = useLocation()
    // console.log(state);

    const {state: {products, price, shipping_fee, items}} = useLocation()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {userInfo} = useSelector(state => state.auth)

    const [res, setRes] = useState(false)
    const [states, setStates] = useState({
        name: '',
        address: '',
        phone: '',
        pinCode: '',
        state: '',
        city: '',
        landmark: ''
    })

    const cart_products = [1, 2]

    const inputHandle = (e) => {
        setStates({
            ...states, [e.target.name]: e.target.value
        })
    }

    const save = (e) => {
        e.preventDefault()
        const { name, address, phone, pinCode, city, state, landmark } = states;
        if (name && address && phone && pinCode && state && city && landmark) {
            setRes(true)
        }
    }

    const placeOrder = () => {
        dispatch(place_order({
            price,
            products,
            shipping_fee,
            items,
            shippingInfo: states,
            userId: userInfo.id,
            navigate
        }))
    }

    return ( 
        <div>
            <Header />
            <section className="bg-[url('http://localhost:3000/images/banner/shop.png')]
        h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left">
                <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
                    <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
                        <div className="flex flex-col justify-center gap-1 items-center
                    h-full w-full text-white">
                            <h2 className="text-3xl font-bold">
                                Shipping Page
                            </h2>
                            <div className="flex justify-center items-center gap-2 text-2xl w-full">
                                <Link to='/'>Home</Link>
                                <span className="pt-1">
                                    <IoIosArrowForward />
                                </span>
                                <span>Shipping</span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-[#eee]">
                <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16">
                    <div className="w-full flex flex-wrap">
                        <div className="w-[67%] md-lg:w-full">
                            <div className="flex flex-col gap-3">
                                <div className="bg-white p-6 shadow-sm rounded-md">
                                    <h2 className="text-slate-600 font-bold pb-3">
                                        Shipping Information
                                    </h2>
                                    {
                                        !res && <>

                                            <form onSubmit={save}>
                                                <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                                                    <div className="flex flex-col gap-1 mb-2 w-full">
                                                        <label htmlFor="name">Name</label>
                                                        <input onChange={inputHandle} value={states.name} type="text" className="w-full px-3 py-2 border border-slate-200
                                                outline-none focus:border-green-500 rounded-md" name="name" id="name"
                                                            placeholder="Name" />
                                                    </div>

                                                    <div className="flex flex-col gap-1 mb-2 w-full">
                                                        <label htmlFor="address">Address </label>
                                                        <input onChange={inputHandle} value={states.address} type="text" className="w-full px-3 py-2 border border-slate-200
                                                outline-none focus:border-green-500 rounded-md" name="address" placeholder="Address" />
                                                    </div>



                                                </div>

                                                <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                                                    <div className="flex flex-col gap-1 mb-2 w-full">
                                                        <label htmlFor="phone">Phone</label>
                                                        <input onChange={inputHandle} value={states.phone} type="text" className="w-full px-3 py-2 border border-slate-200
                                                outline-none focus:border-green-500 rounded-md" name="phone" id="phone"
                                                            placeholder="Phone" />
                                                    </div>

                                                    <div className="flex flex-col gap-1 mb-2 w-full">
                                                        <label htmlFor="pinCode">Pin Code </label>
                                                        <input onChange={inputHandle} value={states.pinCode} type="text" className="w-full px-3 py-2 border border-slate-200
                                                outline-none focus:border-green-500 rounded-md" name="pinCode" placeholder="Pin Code" id="pinCode" min={6} />
                                                    </div>

                                                </div>

                                                <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                                                    <div className="flex flex-col gap-1 mb-2 w-full">
                                                        <label htmlFor="state">State</label>
                                                        <input onChange={inputHandle} value={states.state} type="text" className="w-full px-3 py-2 border border-slate-200
                                                outline-none focus:border-green-500 rounded-md" name="state" id="state"
                                                            placeholder="State" />
                                                    </div>

                                                    <div className="flex flex-col gap-1 mb-2 w-full">
                                                        <label htmlFor="city">City </label>
                                                        <input onChange={inputHandle} value={states.city} type="text" className="w-full px-3 py-2 border border-slate-200
                                                outline-none focus:border-green-500 rounded-md" name="city" placeholder="City" id="city" />
                                                    </div>

                                                </div>

                                                <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                                                    <div className="flex flex-col gap-1 mb-2 w-full">
                                                        <label htmlFor="landmark">Landmark</label>
                                                        <input onChange={inputHandle} value={states.landmark} type="text" className="w-full px-3 py-2 border border-slate-200
                                                outline-none focus:border-green-500 rounded-md" name="landmark" id="landmark"
                                                            placeholder="Nearby Landmark" />
                                                    </div>

                                                    <div className="flex flex-col gap-1 mt-8 mb-2 w-full">
                                                        <button className="px-3 py-[6px] rounded-sm hover:shadow-green-500/50
                                                hover:shadow-lg bg-green-500 text-white">
                                                            Save Changes
                                                        </button>

                                                    </div>

                                                </div>
                                            </form>

                                        </>
                                    }

                                    {
                                        res &&

                                        <div className="flex flex-col gap-1">
                                            <h2 className="text-slate-600 font-semibold pb-2">
                                                Deliver To {states.name}
                                            </h2>
                                            <p>
                                                <span className="bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2
                                            py-1 rounded">
                                                    Home
                                                </span>
                                                <span>Phone No. {states.phone} <br /> {states.address} <br /> Landmark {states.landmark} <br /> City {states.city} <br /> State {states.state}  </span>

                                                <span onClick={() => setRes(false)} className="text-indigo-500 cursor-pointer"> Change</span>
                                            </p>

                                            <p className="text-slate-600 text-sm">Email Id - bhanu@gmail.com</p>
                                        </div>
                                    }


                                </div>


                                {
                                    products.map((p, i) => <div key={i} className="flex bg-white p-4 flex-col gap-2">
                                        <div className="flex justify-start items-center">
                                            <h2 className="text-md text-slate-600 font-bold">
                                                {p.shopName}
                                            </h2>
                                        </div>
                                        {
                                            p.products.map((pt, i) => <div key={pt._id} className="w-full flex flex-wrap">
                                                <div className="flex sm:w-full gap-2 w-7/12">
                                                    <div className="flex gap-2 justify-start items-center">
                                                        <img className="w-[80px] h-[80px]"
                                                            src={pt.productInfo.images[0]} alt="product-mg" />
                                                        <div className="pr-4 text-slate-600">
                                                            <h2 className="text-md font-semibold">
                                                                {pt.productInfo.name}
                                                            </h2>
                                                            <span className="text-sm">
                                                                Brand: {pt.productInfo.brand}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between w-5/12 sm:w-full sm:mt-3">
                                                    <div className="pl-4 sm:pl-0">
                                                        <h2 className="text-lg text-orange-500">₹{pt.productInfo.price - 
                                                            Math.floor((pt.productInfo.price * pt.productInfo.discount) / 100)}</h2>


                                                        <p className="line-through">₹{pt.productInfo.price}</p>
                                                        <p>-{pt.productInfo.discount}%</p>
                                                    </div>

                                                   
                                                </div>



                                            </div>)
                                        }
                                    </div>)
                                }
                            </div>
                        </div>


                        <div className="w-[33%] md-lg:w-full">
                            <div className="pl-3 md-lg:pl-0 md-lg:mt-5">
                                
                                     <div className="bg-white p-3 text-slate-600 flex flex-col gap-3">

                                        <h2 className="text-xl font-bold">
                                            Order Summary
                                        </h2>

                                        <div className="flex justify-between items-center">
                                            <span>Items Total ({items})</span>
                                            <span>₹{price} </span>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span>Shipping Fee </span>
                                            <span>₹{shipping_fee} </span>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span>Total Payment </span>
                                            <span>₹{price + shipping_fee} </span>
                                        </div>

                                        

                                        <div className="flex justify-between items-center">
                                            <span>Total</span>
                                            <span className="text-lg text-[#059473]">
                                                ₹{price + shipping_fee}
                                            </span>
                                        </div>

                                        <button onClick={placeOrder} disabled={res ? false : true} className={`px-5 py-[6px] rounded-sm hover:shadow-red-500/50
                                           hover:shadow-lg ${res ? 'bg-red-500' : 'bg-red-300'} text-sm text-white uppercase`}>
                                            Place Order
                                        </button>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>


    )
}

export default Shipping