// do not use <React.Fragment></React.Fragment>
import Header from './Header'

const Layout = ({children}) => {
    return (
        <>
            <Header/>
                {children}
            <p>footer</p>
        </>
    );
};


export default Layout;