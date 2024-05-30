
export const Modal = ({ title = 'Sin titulo', children, openModal, closedModal, }) => {

    if (!openModal)
        return null;

    return (
        <>
            <div className="modal-backdrop show" />
            <div className="modal show d-block" style={{ display: 'block' }}>
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content modal-transparent">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="btn-close" onClick={closedModal}></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
