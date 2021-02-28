import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps
        };
    }

    render() {
        return (
            <Html>
                <Head></Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/js/bootstrap.bundle.min.js"></script>
                <script src="assets/js/optional/isotope.pkgd.min.js"></script>
                <script src="assets/js/plugins.min.js"></script>
                <script src="assets/js/main.min.js"></script>
                <script type="text/javascript" src="assets/js/myScript.js"/>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-4LGWR8EZTX"></script>
            </Html>
        );
    }
}

export default MyDocument;
