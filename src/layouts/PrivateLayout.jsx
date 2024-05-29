import { Navbar } from "./components/Navbar"

export const PrivateLayout = ({ children }) => {

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
