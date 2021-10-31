// do not use <React.Fragmen> just use <> </>
import Header from './Header'

const Layout = ({children}) => {
    return (
        <>
            <div className="container-md bg-secondary bg-gradient">
            <Header/>
            <div>
            {children}
            </div> 
            <p className="text-center mt-4 bg-black">@2021</p>
            </div>
        </>
    );
};


export default Layout;