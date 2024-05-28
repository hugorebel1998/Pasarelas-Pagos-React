export const PublicLayout = ({ children }) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', placeItems: 'center', minHeight: '100vh' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
