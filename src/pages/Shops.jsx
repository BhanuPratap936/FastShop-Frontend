import { Link } from "react-router-dom"
import Header from "../components/Header"
import { IoIosArrowForward } from "react-icons/io"
import Footer from "../components/Footer"
import { useState } from "react"
import { Range } from "react-range"
import { AiFillStar } from "react-icons/ai"
import { CiStar } from "react-icons/ci"
import Prouducts from "../components/products/Products"
import { BsFillGridFill } from "react-icons/bs"
import { FaThList } from "react-icons/fa"
import ShopProducts from "../components/products/ShopProducts"
import Pagination from "../components/Pagination"




const Shops = () => {

    const [filter, setFilter] = useState(true)
    const categories = [
        'Mobiles',
        'Laptops',
        'Speakers',
        'Top wear',
        'Footwear',
        'Watches',
        'Home Decor',
        'Smart Watches',
    ]

    const [state, setState] = useState({ values: [50, 5000] })
    const [rating, setRating] = useState('')
    const [styles, setStyles] = useState('grid')

    const [perPage, setPerPage] = useState(1)
    const [pageNumber, setPageNumber] = useState(1)

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
                                Shop Page
                            </h2>
                            <div className="flex justify-center items-center gap-2 text-2xl w-full">
                                <Link to='/'>Home</Link>
                                <span className="pt-1">
                                    <IoIosArrowForward />
                                </span>
                                <span>Shop</span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className="py-16">
                <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
                    <div className={`md:block hidden ${!filter ? 'mb-6' : 'mb-0'}`}>
                        <button onClick={() => setFilter(!filter)} className="text-center w-full
                    py-2 px-3 bg-indigo-500 text-white" >
                            Filter Product
                        </button>
                    </div>


                    <div className="w-full flex flex-wrap">
                        <div className={`w-3/12 md-lg:w-4/12 md:w-full pr-8 ${filter ? 'md:h-0 md:overflow-hidden md:mb-6' : 'md:h-auto md:overflow-auto md:mb-0'}`}>
                            <h2 className="text-3xl font-bold mb-3 text-slate-600">
                                Category
                            </h2>

                            <div className="py-2">
                                {
                                    categories.map((c, i) => <div className="flex justify-start items-center gap-2 py-1">
                                        <input type="checkbox" id={c} />
                                        <label className="text-slate-600 block cursor-pointer" htmlFor={c}>
                                            {c}
                                        </label>

                                    </div>)
                                }
                            </div>

                            <div className="py-2 flex flex-col gap-5">
                                <h2 className="text-3xl font-bold mb-3 text-slate-600">
                                    Price
                                </h2>

                                <Range
                                    step={50}
                                    min={50}
                                    max={5000}
                                    values={(state.values)}
                                    onChange={(values) => setState({ values })}
                                    renderTrack={({ props, children }) => (
                                        <div {...props} className="w-full h-[6px] bg-slate-200 rounded-full
                                    cursor-pointer">
                                            {children}

                                        </div>

                                    )}

                                    renderThumb={({ props }) => (
                                        <div  {...props} className="w-[15px] h-[15px] bg-[#059473] rounded-full" />


                                    )}
                                />
                                <div>
                                    <span className="text-slate-800 font-bold text-lg">
                                        ₹{Math.floor(state.values[0])} - ₹{Math.floor(state.values[1])}
                                    </span>
                                </div>
                            </div>

                            <div className="py-3 flex flex-col gap-4">
                                <h2 className="text-3xl font-bold mb-3 text-slate-600">
                                    Rating
                                </h2>

                                <div className="flex flex-col gap-3">
                                    <div onClick={() => setRating(5)} className="text-orange-500 flex justify-start
                        items-start gap-2 text-xl cursor-pointer">
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                    </div>

                                    <div onClick={() => setRating(4)} className="text-orange-500 flex justify-start
                        items-start gap-2 text-xl cursor-pointer">
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><CiStar /></span>
                                    </div>

                                    <div onClick={() => setRating(3)} className="text-orange-500 flex justify-start
                        items-start gap-2 text-xl cursor-pointer">
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><CiStar /></span>
                                        <span><CiStar /></span>
                                    </div>

                                    <div onClick={() => setRating(2)} className="text-orange-500 flex justify-start
                        items-start gap-2 text-xl cursor-pointer">
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><CiStar /></span>
                                        <span><CiStar /></span>
                                        <span><CiStar /></span>
                                    </div>

                                    <div onClick={() => setRating(1)} className="text-orange-500 flex justify-start
                        items-start gap-2 text-xl cursor-pointer">
                                        <span><AiFillStar /></span>
                                        <span><CiStar /></span>
                                        <span><CiStar /></span>
                                        <span><CiStar /></span>
                                        <span><CiStar /></span>
                                    </div>




                                </div>
                            </div>

                            <div className="py-5 flex flex-col gap-4 md:hidden">
                                <Prouducts title='Latest Product' />
                            </div>

                        </div>

                        <div className="w-9/12 md-lg:w-8/12 md:w-full">
                            <div className="pl-8 md:pl-0">
                                <div className="py-4 bg-white mb-10 px-3 roudned-md flex justify-between items-start border">
                                    <h2 className="text-lg font-medium text-slate-600">
                                        16 Products
                                    </h2>

                                    <div className="flex justify-center items-center gap-3">
                                        <select className="p-1 border outline-0 text-slate-600 font-semibold" name="" id="">
                                            <option value="">Sort By</option>
                                            <option value="low-to-high">Low to High Price</option>
                                            <option value="high-to-low">Hight to Low Price</option>
                                        </select>

                                        <div className="flex justify-center items-start gap-4 md-lg:hidden">
                                            <div onClick={() => setStyles('grid')} className={`p-2 ${styles === 'grid' && 'bg-slate-300'} text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}>
                                                <BsFillGridFill />
                                            </div>

                                            <div onClick={() => setStyles('list')} className={`p-2 ${styles === 'list' && 'bg-slate-300'} text-slate-600 hover:bg-slate-300
                                            cursor-pointer rounded-sm`}>
                                                <FaThList />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pb-8">
                                    <ShopProducts styles={styles} />
                                </div>

                                <div>
                                    <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} 
                                    totalItem={10} perPage={perPage} showItem={Math.floor(10 / 3)}/>

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

export default Shops