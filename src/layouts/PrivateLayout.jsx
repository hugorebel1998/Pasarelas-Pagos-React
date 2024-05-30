import { Navbar } from "./components/Navbar"
import image from '@/assets/finanzas.png';

export const PrivateLayout = ({ children }) => {

    return (
        <>
            <Navbar />
            <div style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                minHeight:'93.2vh',
                color:'white',
            }}>
                <div className="container">
                    <div className="row justify-content-center pt-5">
                        <div className="col-md-12">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
