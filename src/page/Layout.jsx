const Layout = ({children}) =>{


    return(
        <div className="div">
            <Header/>
            <Aside/>
            {children}
            <Footer/>
        </div>
    );
}