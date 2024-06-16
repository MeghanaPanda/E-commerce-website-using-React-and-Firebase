import { useContext } from "react";
import Category from "../../container/category/Category";
import HeroSection from "../../container/heroSection/HeroSection";
import HomePageProductCard from "../../container/HomePageProductCard/HomePageProductCard";
import Layout from "../../container/layout/Layout";
import Testimonial from "../../container/testimonial/Testimonial";
import Track from "../../container/track/Track";

const HomePage = () => {

    return (
        <Layout>
            <HeroSection/>
            <Category/>
            <HomePageProductCard/>
            <Track/>
            <Testimonial/>
        </Layout>
    );
}

export default HomePage;