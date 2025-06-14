import { FaFacebookF } from "react-icons/fa"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { customer_login, messageClear } from "../store/reducers/authReducer"
import toast from "react-hot-toast"
import { FadeLoader } from "react-spinners"

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loader, errorMessage, successMessage, userInfo} = useSelector(state => state.auth)

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {

        e.preventDefault()

        // console.log(state);
        dispatch(customer_login(state))
        
    }


     useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }

        if (userInfo) {
            navigate('/')
        }
    }, [successMessage, errorMessage])

    return(
        <div>
            {
                loader && <div className="w-screen h-screen flex justify-center items-center
                fixed left-0 top-0 bg-[#38303033] z-[999]">
                    <FadeLoader />
                </div>
            }
        <Header />
        <div className="bg-slate-200 mt-4">
            <div className="w-full justify-center items-center p-10">
                <div className="grid grid-cols-2 w-[60%] mx-auto bg-white rounded-md">
                    <div className="px-8 py-8">
                        <h2 className="text-center w-full text-xl text-slate-600 font-bold">
                            Sign In
                        </h2>
                    

                    <div>
                        <form onSubmit={login} className="text-slate-600">
                            
                            <div className="flex flex-col gap-1 mb-2">
                                <label htmlFor="name">Email</label>
                                <input onChange={inputHandle} value={state.email} className="w-full px-3 py-2 border border-slate-200 outline-none
                                focus:border-green-500 rounded-md" type="email" name="email" id="email"
                                    placeholder="Email" required />
                            </div>

                            <div className="flex flex-col gap-1 mb-2">
                                <label htmlFor="name">Password</label>
                                <input onChange={inputHandle} value={state.password} className="w-full px-3 py-2 border border-slate-200 outline-none
                                focus:border-green-500 rounded-md" type="password" name="password" id="password"
                                    placeholder="Password" required />
                            </div>

                            <button className="px-8 w-full py-2 bg-[#059473] shadow-lg hover:shadow-green-500/40
                            text-white rounded-md">
                               Sign In
                            </button>
                        </form>

                        <div className="flex justify-center items-center py-2">
                            <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                            <span className="px-3 text-salte-600">Or</span>
                            <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                        </div>

                        <button className="px-8 w-full py-2 bg-indigo-500 shadow hover:shadow-indigo-500/50
                        text-white rounded-md flex justify-center items-center gap-2 mb-3">
                            <span><FaFacebookF /></span>
                            <span>Login With Facebook</span>
                        </button>

                        <button className="px-8 w-full py-2 bg-white shadow hover:shadow-gray-300
               text-gray-800 rounded-md flex justify-center items-center gap-2 border border-gray-300 mb-3">
                            <span className="text-xl"><FcGoogle /></span>
                            <span>Login With Google</span>
                        </button>
                    </div>

                    <div className="text-center text-slate-600 pt-1">
                        <p>Don't have an account? <Link className="text-blue-500" to='/register'> Register</Link> </p>
                    </div>

                </div>

                <div className="w-full h-full py-4 pr-4">
                    <img src="http://localhost:3000/images/login.jpg" alt="" />
                </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
    )
}

export default Login