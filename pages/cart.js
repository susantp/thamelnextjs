import Layout from "./layouts/layout";
import Head from "next/head";
import BreadCrumb from "./components/common/BreadCrumb";
import ItemList from "./components/cart/itemList";
import Summary from "./components/cart/summary";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>
          Thamelmart- online store for Authentic Handicrafts, Singing Bowls,
          Tingshas, Kukri Gurkha Knives, Gongs.
        </title>

        <meta
          name="keywords"
          content="Singing Bowls, Tingshas, Kukri Gurkha Knife Online in USA, Singing Bowls in USA, Buy Singing Bowls Online, Buy Tingshas in USA, Buy Tingshas Online, Kukri Gurkha Knife Online, Kukri Gurkha Knife in USA, Buy Gongs in USA, Buy Gongs Online, peace, harmony, music"
        />
        <meta
          name="description"
          content="Thamelmart is Nepali handicrafts Online Store in USA, Buy Singing Bowls, Tingshas, Kukri Gurkha Knife, Gongs and more at best price online from us. Enjoy 30% discount on every product, free shipping, 30 days money back guarantee. "
        />
        <meta name="author" content="thamelmart" />

        <link
          rel="icon"
          type="image/x-icon"
          href="assets/images/icons/favicon.ico"
        />

        {/* <script type="text/javascript" />
		WebFontConfig = {
			google: { families: [ 'Open+Sans:300,400,600,700,800','Poppins:300,400,500,600,700,800' ] }
		};
		(function(d) {
			var wf = d.createElement('script'), s = d.scripts[0];
			wf.src = 'assets/js/webfont.js';
			wf.async = true;
			s.parentNode.insertBefore(wf, s);
		})(document);
	</script> */}

        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

        <link rel="stylesheet" href="assets/css/style.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/vendor/fontawesome-free/css/all.min.css"
        />
        <link rel="stylesheet" type="text/css" href="assets/css/custom.css" />
      </Head>

      <Layout>
        <div className="container">
          <BreadCrumb></BreadCrumb>
          <div className="row">
            <ItemList></ItemList>
            <Summary></Summary>
          </div>
        </div>
      </Layout>
    </>
  );
}
