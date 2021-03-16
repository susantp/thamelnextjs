import Layout from "./layouts/layout";
import IndexTopInfoBoxBanner from "./components/home/indexTopInfoBoxBanner";
import IndexFeaturedSection from "./components/home/indexFeaturedSection";
import IndexSendGift from "./components/home/indexSendGift";
import IndexNewArrival from "./components/home/indexNewArrival";
import Slider from "./components/home/slider";
import AllHeader from "./allHeader";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFeatureProduct } from "../store/actions/featuredProduct/featuredProduct";
import { getNewArrivalProduct } from "../store/actions/newArrivalProduct/NewArrivalproduct";

export default function Home() {
  const dispatch = useDispatch(); //redxu action to dispatch

  useEffect(() => {
    dispatch(getFeatureProduct());
    dispatch(getNewArrivalProduct());
  }, []);

  return (
    <>
      <AllHeader></AllHeader> {/*wrapped in head tag */}
      {/* <TopNotice></TopNotice> */}
      <Layout>
        <Slider></Slider>
        <IndexTopInfoBoxBanner></IndexTopInfoBoxBanner>
        <IndexFeaturedSection></IndexFeaturedSection>
        <IndexSendGift></IndexSendGift>
        <IndexNewArrival></IndexNewArrival>
      </Layout>
    </>
  );
}
