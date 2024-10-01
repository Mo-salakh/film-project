import { Layout } from "../layout/Layout";
import { Helmet } from "react-helmet";


export function Home() {
    return (

        <>
        <Helmet>
            <body className="Home-page" />
        </Helmet>
        <div className="Home-page">
            <Layout />
        </div>

        </>
    )
}