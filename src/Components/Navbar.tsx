
import logo from "../logo.png"
import { IoSearchOutline } from "react-icons/io5";
import BWT from "../BSW .jpg"

const Navbar = () => {
    return (
        <>
            <header className="px-4 d-flex flex-wrap justify-content-around align-content-start py-3 w-100 position-absolute" style={{ zIndex: 99 }}>

                <img className="mb-3 mb-md-0 text-dark text-decoration-none d-inline" src={logo} alt="" />

                <ul className="nav nav-pills" style={{ fontWeight: "500" }}>
                    <li className="nav-item"><div className="nav-link text-warning" aria-current="page">Home</div></li>
                    <li className="nav-item"><div className="nav-link text-dark">About</div></li>
                    <li className="nav-item"><div className="nav-link text-dark">Pages</div></li>
                    <li className="nav-item"><div className="nav-link text-dark">Blog</div></li>
                    <li className="nav-item"><div className="nav-link text-dark">Contact</div></li>
                    <li className="nav-item"><div className="nav-link text-dark"><IoSearchOutline /></div></li>
                </ul>
            </header>

            <section className="home_banner_area mt-0 pt-0 ">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner_content text-center">
                                    <p className="online text-uppercase">
                                        Best online education service In the world
                                    </p>
                                    <h2 className="season text-uppercase mt-sm-4 mb-sm-5 mt-2 mb-2 ">
                                        One Step Ahead This Season
                                    </h2>
                                    <div>
                                        <div className="primary-btn2 mb-3 mb-sm-0">learn more</div>
                                        <div className="primary-btn ml-sm-3 ml-0">see course</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img className="w-100" src={BWT} style={{  }} /> */}
            </section>


        </>
    )
}

export default Navbar
