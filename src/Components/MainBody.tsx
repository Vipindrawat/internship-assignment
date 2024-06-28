import React from 'react';
import { FaGraduationCap } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";
import custom from '../Cuttom_Product.jpg'
import social from '../socialmedianetwork.jpg'
import computer from '../computer_engineering.jpg'
import david from '../David.jpg'
import nathan from '../Nathan.jpg'
import mated from '../Mated.jpg'
import jain from '../Jain.jpg'


import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";

import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const MainBody = () => {
    return (
        <>
            <section className="feature_area section_gap_top">
                <div className="container">

                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-7 ">
                            <div className="main_title">
                                <h2 className="mainbox mb-3 text-center fw-bold w-100">Awesome Feature</h2>
                                <p className='mainboxcontent text-center fw-light'>
                                    Replenish man have thing gathering lights yielding shall you
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-3 col-md-6 mt-4">
                            <div className="single_feature p-3 bg-secondary"> {/* Adding padding for inner content spacing */}
                                <div className="icon"><FaGraduationCap className='fs-1' /></div>
                                <div className="desc">
                                    <h4 className="mt-3 mb-2">Scholarship Facility</h4>
                                    <p className='tw-light'>
                                        One make creepeth, man bearing theira firmament won't great
                                        heaven
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4">
                            <div className="single_feature p-3 bg-success">
                                <div className="icon"><SlBookOpen className='fs-1' /></div>
                                <div className="desc">
                                    <h4 className="mt-3 mb-2">Sell Online Course</h4>
                                    <p className='tw-light'>
                                        One make creepeth, man bearing theira firmament won't great
                                        heaven
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4">
                            <div className="single_feature p-3 bg-warning">
                                <div className="icon"><FaGlobeAfrica className='fs-1' /></div>
                                <div className="desc">
                                    <h4 className="mt-3 mb-2">Global Certification</h4>
                                    <p className='tw-light'>
                                        One make creepeth, man bearing theira firmament won't great
                                        heaven
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="popular_courses">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="main_title">
                                <h2 className="popular mb-3 text-center fw-bold">Our Popular Courses</h2>
                                <p className='popularheading text-center'>
                                    Replenish man have thing gathering lights yielding shall you
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex flex-row justify-content-center pb-4">

                        <div className="col-lg-3 col-md-6 mt-4 mb-4">
                            <div className="single_course">
                                <div className="course_head w-100">
                                    <img className="w-100" src={custom} alt="" />
                                </div>
                                <div className="course_content pt-4 p-4" style={{ backgroundColor: "#f3f4f6" }}>
                                    <span className="tag mb-4 d-inline-block">design</span>
                                    <h4 className="mb-3">
                                        <span className='fs-5 fw-bold'>Custom Product Design</span>
                                    </h4>
                                    <p>
                                        One make creepeth man bearing their one firmament won't fowl meat over sea
                                    </p>
                                    <div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                                        <div className="authr_meta d-flex align-items-center justify-content-between w-100 ">
                                            <div style={{ width: "50px" }}>
                                                <img src={david} alt="Avatar" className="rounded-circle img-fluid" style={{ width: "20px" }}></img>

                                            </div>
                                            <span className="d-inline-block ml-2">Cameron</span>
                                            <span className='d-flex align-items-center'><FaUser />15</span>
                                            <span className='d-flex align-items-center' > <FaHeart />10</span>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mb-4 mr-3">
                            <div className="single_course">
                                <div className="course_head w-100">
                                    <img className="w-100" src={social} alt="" />
                                </div>
                                <div className="course_content pt-4 p-4" style={{ backgroundColor: "#f3f4f6" }}>
                                    <span className="tag mb-4 d-inline-block">design</span>
                                    <h4 className="mb-3">
                                        <span className="fs-5 fw-bold">Social Media Network</span>
                                    </h4>
                                    <p>
                                        One make creepeth man bearing their one firmament won't fowl meat over sea
                                    </p>
                                    <div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                                        <div className="authr_meta d-flex align-items-center justify-content-between w-100 ">
                                            <div style={{ width: "50px" }}>
                                                <img src={nathan} alt="Avatar" className="rounded-circle img-fluid" style={{ width: "20px" }}></img>

                                            </div>
                                            <span className="d-inline-block ml-2">Cameron</span>
                                            <span className='d-flex align-items-center'><FaUser />15</span>
                                            <span className='d-flex align-items-center' > <FaHeart />10</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 mb-4">
                            <div className="single_course">
                                <div className="course_head w-100">
                                    <img className="w-100" src={computer} alt="" />
                                </div>
                                <div className="course_content pt-4 p-4" style={{ backgroundColor: "#f3f4f6" }}>
                                    <span className="tag mb-4 d-inline-block ">design</span>
                                    <h4 className="mb-3 ">
                                        <span className="fs-5 fw-bold">Computer Engineering</span>
                                    </h4>
                                    <p>
                                        One make creepeth man bearing their one firmament won't fowl meat over sea
                                    </p>
                                    <div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                                        <div className="authr_meta d-flex align-items-center justify-content-between w-100 ">
                                            <div style={{ width: "50px" }}>
                                                <img src={mated} alt="Avatar" className="rounded-circle img-fluid" style={{ width: "20px" }}></img>

                                            </div>
                                            <span className="d-inline-block ml-2">Cameron</span>
                                            <span className='d-flex align-items-center'><FaUser />15</span>
                                            <span className='d-flex align-items-center' > <FaHeart />10</span>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section_gap registration_area">
                <div className="container">
                    <div className="row align-items-center p-3">
                        <div className="col-lg-7">

                            <div className="row clock_sec clockdiv" id="clockdiv">
                                <div className="col-lg-12">
                                    <h1 className="mb-3 text-white fw-bold">Register Now</h1>
                                    <p >
                                        There is a moment in the life of any aspiring astronomer that
                                        it is time to buy that first telescope. It’s exciting to think
                                        about setting up your own viewing station.
                                    </p>
                                </div>
                                <div className="col clockinner1 clockinner">
                                    <h1 className="days text-white">150</h1>
                                    <span className="smalltext">Days</span>
                                </div>
                                <div className="col clockinner clockinner1">
                                    <h1 className="hours text-white">23</h1>
                                    <span className="smalltext">Hours</span>
                                </div>
                                <div className="col clockinner clockinner1">
                                    <h1 className="minutes text-white">47</h1>
                                    <span className="smalltext">Mins</span>
                                </div>
                                <div className="col clockinner clockinner1">
                                    <h1 className="seconds text-white">59</h1>
                                    <span className="smalltext">Secs</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 offset-lg-1 mt-5">
                            <div className="register_form">
                                <h3 className='fw-bold'>Courses for Free</h3>
                                <p>It is high time for learning</p>
                                <form className="form_area" id="myForm" action="mail.html" method="post">
                                    <div className="row">
                                        <div className="col-lg-12 form_group">
                                            <input name="name" placeholder="Your Name" required type="text" />
                                            <input name="name" placeholder="Your Phone Number" required type="tel" />
                                            <input name="email" placeholder="Your Email Address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required type="email" />
                                        </div>
                                        <div className="col-lg-12 text-center">
                                            <button className="primary-btn">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="trainer_area section_gap_top">
                <div className="container">
                    <div className="row justify-content-center w-100">
                        <div className="col-lg-5 w-100">
                            <div className="main_title w-100">
                                <h2 className=" popular mb-3 fw-bold w-100">Our Expert Trainers</h2>
                                <p className='popularheading'>
                                    Replenish man have thing gathering lights yielding shall you
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center d-flex align-items-center">

                        <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
                            <div className="thumb d-flex justify-content-center">
                                <img className="w-100" src={mated} alt="" />
                            </div>
                            <div className="meta-text text-sm-center">
                                <h4>Mated Nithan</h4>
                                <p className="designation">Sr. web designer</p>
                                <div className="mb-4">
                                    <p>
                                        If you are looking at blank cassettes on the web, you may be
                                        very confused at the.
                                    </p>
                                </div>
                                <div className="align-items-center justify-content-center d-flex">
                                    <span><BiLogoFacebook className='pr-2' /></span>
                                    <span> <FaTwitter className='mr-2' /></span>
                                    <span> <CiLinkedin className='mr-2' /></span>
                                    <span><FaPinterestP className='mr-2' /></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
                            <div className="thumb d-flex justify-content-center">
                                <img className="w-100" src={david} alt="" />
                            </div>
                            <div className="meta-text text-sm-center">
                                <h4>David Cameron</h4>
                                <p className="designation">Sr. web designer</p>
                                <div className="mb-4">
                                    <p>
                                        If you are looking at blank cassettes on the web, you may be
                                        very confused at the.
                                    </p>
                                </div>
                                <div className="align-items-center justify-content-center d-flex">
                                    <span><BiLogoFacebook className='pr-2' /></span>
                                    <span> <FaTwitter className='mr-2' /></span>
                                    <span> <CiLinkedin className='mr-2' /></span>
                                    <span><FaPinterestP className='mr-2' /></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
                            <div className="thumb d-flex justify-content-center">
                                <img className="w-100" src={jain} alt="" />
                            </div>
                            <div className="meta-text text-sm-center">
                                <h4>Jain Redmel</h4>
                                <p className="designation">Sr. Faculty Data Science</p>
                                <div className="mb-4">
                                    <p>
                                        If you are looking at blank cassettes on the web, you may be
                                        very confused at the.
                                    </p>
                                </div>
                                <div className="align-items-center justify-content-center d-flex">
                                    <span><BiLogoFacebook className='pr-2' /></span>
                                    <span> <FaTwitter className='mr-2' /></span>
                                    <span> <CiLinkedin className='mr-2' /></span>
                                    <span><FaPinterestP className='mr-2' /></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
                            <div className="thumb d-flex justify-content-center">
                                <img className="w-100" src={nathan} alt="" />
                            </div>
                            <div className="meta-text text-sm-center">
                                <h4>Nathan Macken</h4>
                                <p className="designation">Sr. web designer</p>
                                <div className="mb-4">
                                    <p>
                                        If you are looking at blank cassettes on the web, you may be
                                        very confused at the.
                                    </p>
                                </div>
                                <div className="align-items-center justify-content-center d-flex">
                                    <span><BiLogoFacebook className='pr-2' /></span>
                                    <span> <FaTwitter className='mr-2' /></span>
                                    <span> <CiLinkedin className='mr-2' /></span>
                                    <span><FaPinterestP className='mr-2' /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="testimonial_area client_section_gap">
                <div className="container">
                    <div className="row justify-content-center w-100">
                        <div className="col-lg-5 w-100">
                            <div className="main_title w-100">
                                <h2 className="popular mb-3 w-100">Client say about me</h2>
                                <p className='popularheading'>
                                    Replenish man have thing gathering lights yielding shall you
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">


                        <div className="owl-stage-outer ">

                            <div className="owl-stage d-flex justify-content-center" >

                                <div className="owl-item cloned bg-success" style={{ width: "555px", marginRight: "30px" }}>
                                    <div className="testi_item">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <img style={{ width: "122px" }} src={nathan} alt="" />
                                            </div>
                                            <div className="mymade col-lg-8">
                                                <div className="testi_text pl-3 mt-2">
                                                    <h4>Davil Saden</h4>
                                                    <p>
                                                        Him, made can't called over won't there on divide there
                                                        male fish beast own his day third seed sixth seas unto.
                                                        Saw from
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item cloned bg-warning" style={{ width: "555px", marginRight: "30px;" }}><div className="testi_item">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <img style={{ width: "122px" }} src={david} alt="" />
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="testi_text mt-2">
                                                <h4>Elite Martin</h4>
                                                <p>
                                                    Him, made can't called over won't there on divide there
                                                    male fish beast own his day third seed sixth seas unto.
                                                    Saw from
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>

    );
}

export default MainBody;
