import Banner from "../components/Banner"
import Categories from "../components/Categories"
import Header from "../components/Header"
import FeatureProducts from "../components/products/FeatureProducts"
import Prouducts from "../components/products/Products"


const Home = () => {

    return (
        <div className="w-full">
            <Header />
            <Banner />
            <Categories />
            <div className="py-[45px]">
                <FeatureProducts />
            </div>

            <div className="py-10">
                
                <div className="w-[85%] flex flex-wrap mx-auto">
                    <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
                        <div className="overflow-hidden">
                            <Prouducts title="Latest Product" />
                        </div>

                        <div className="overflow-hidden">
                            <Prouducts title="Top Rated Product" />
                        </div>

                        <div className="overflow-hidden">
                            <Prouducts title="Discount Product" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home