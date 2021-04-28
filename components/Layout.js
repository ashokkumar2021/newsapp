import Head  from 'next/head'
import Header from '../components/header'
const Layout = (props) => {
    return (
        <div>
            <Head>
             <title>News</title>
           </Head>
           <Header />
        {props.children}
       
        </div>
    )
}

export default Layout
