import Layout from "./layouts/layout";
import IndexTopInfoBoxBanner from "./components/home/indexTopInfoBoxBanner";
import IndexFeaturedSection from "./components/home/indexFeaturedSection";
import IndexSendGift from "./components/home/indexSendGift";
import IndexNewArrival from "./components/home/indexNewArrival";
import TopNotice from "./components/home/topNotice";
import Slider from "./components/home/slider";
import AllHeader from "./allHeader";

export default function Home() {
 
  return (
    <>
      <AllHeader></AllHeader> {/*wrapped in head tag */}
      <TopNotice></TopNotice>
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
