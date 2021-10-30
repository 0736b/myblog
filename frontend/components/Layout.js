// do not use <React.Fragment></React.Fragment>

const Layout = ({children}) => {
    return (
        <>
            <p>header</p>
                {children}
            <p>footer</p>
        </>
    );
};


export default Layout;