import HeaderAuth from "@/src/components/common/headerAuth"
import Head from "next/head"

const HomeAuth = () => {

    return (
        <>
        <Head>
            <title>Onebitflix - Home</title>
        </Head>
        <main>
            <HeaderAuth/>
        </main>
        </>
    )
}

export default HomeAuth