import { useState } from "react";
import Pagination from "./Pagination";
import Rating from "./Rating";
import RatingTemp from "./RatingTemp";
import RatingReact from 'react-rating'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Reviews = () => {

    const [perPage, setPerPage] = useState(1)
    const [pageNumber, setPageNumber] = useState(1)

    const userInfo = {}
    
    const [rating, setRating] = useState('')
    const [re, setRe] = useState('')
    return (
        <div className="mt-8">
            <div className="flex gap-10 md-lg:flex-col">
                <div className="flex flex-col gap-2 justify-start items-start py-4">
                    <div>
                        <span className="text-6xl font-semibold">4.5</span>
                        <span className="text-3xl font-semibold text-slate-600">/5</span>
                    </div>

                    <div className="flex text-3xl">
                        <Rating ratings={4.5} />
                    </div>

                    <p className="text-sm text-slate-600">18 Reviews</p>
                </div>

                <div className="flex gap-2 flex-col py-4">
                    <div className="flex justify-start items-center gap-5">
                    <div className="text-md flex gap-1 w-[93px]">
                        <RatingTemp rating={5} />
                    </div>

                    <div className="w-[200px] h-[14px] bg-slate-200 relative">
                        <div className="h-full bg-[#Edbb0E] w-[60%]">
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 w-[0%]">10</p>
                    </div>
                    
                    <div className="flex justify-start items-center gap-5">
                    <div className="text-md flex gap-1 w-[93px]">
                        <RatingTemp rating={4} />
                    </div>

                    <div className="w-[200px] h-[14px] bg-slate-200 relative">
                        <div className="h-full bg-[#Edbb0E] w-[70%]">
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 w-[0%]">20</p>
                    </div>

                    <div className="flex justify-start items-center gap-5">
                    <div className="text-md flex gap-1 w-[93px]">
                        <RatingTemp rating={3} />
                    </div>

                    <div className="w-[200px] h-[14px] bg-slate-200 relative">
                        <div className="h-full bg-[#Edbb0E] w-[40%]">
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 w-[0%]">9</p>
                    </div>

                    <div className="flex justify-start items-center gap-5">
                    <div className="text-md flex gap-1 w-[93px]">
                        <RatingTemp rating={2} />
                    </div>

                    <div className="w-[200px] h-[14px] bg-slate-200 relative">
                        <div className="h-full bg-[#Edbb0E] w-[30%]">
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 w-[0%]">5</p>
                    </div>

                    <div className="flex justify-start items-center gap-5">
                    <div className="text-md flex gap-1 w-[93px]">
                        <RatingTemp rating={1} />
                    </div>

                    <div className="w-[200px] h-[14px] bg-slate-200 relative">
                        <div className="h-full bg-[#Edbb0E] w-[10%]">
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 w-[0%]">3</p>
                    </div>

                   
                </div>
            </div>

            <h2 className="text-slate-600 text-xl font-bold py-5">Product Reviews (32)</h2>
            <div className="flex flex-col gap-8 pb-10 pt-4">
                {
                    [1, 2, 3, 4, 5].map((r, i) => <div className="flex flex-col gap-1" key={i}>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1 text-xl">
                                    <RatingTemp rating={4} />
                                </div>
                                <span className="text-slate-600">6 Jan 2025</span>
                            </div>

                            <span className="text-slate-600 text-md">
                                Sinouske Nohara
                            </span>

                            <p className="text-slate-600 text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum saepe 
                                animi illo eaque aperiam placeat eligendi quae culpa ratione, quasi praesentium 
                                autem enim, pariatur quia! Nulla consequuntur corporis sit?
                            </p>
                        </div>)
                }

                <div className="flex justify-end">
                    {
                        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalItem={10}
                        perPage={perPage} showItem={Math.floor(10/3)} />
                    }
                </div>
            </div>

            <div>
                
            <h2 className="text-slate-600 text-xl font-bold py-5">Write a review</h2>

                {
                    userInfo ? <div className="flex flex-col gap-3">
                        <div className="flex gap-1">
                            <RatingReact
                                onChange={(e) => setRating(e)}
                                initialRating={rating}
                                emptySymbol={<span className="text-slate-600 text-4xl">
                                    <CiStar />
                                </span>}

                                fullSymbol={<span className="text-[#Edbb0E] text-4xl">
                                    <FaStar />
                                </span>}
                            />
                            
                        </div>

                        <form>
                            <textarea required className="border outline-0 p-3 w-full" name="" id=""
                            cols={30} rows={5}></textarea>

                            <div className="mt-2">
                                <button className="py-1 px-5 bg-indigo-500 text-white roudned-sm">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div> :

                    <div>
                        <Link to='/login' className="py-1 px-5 bg-red-500 text-white rounded-sm">
                        Login First
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Reviews;