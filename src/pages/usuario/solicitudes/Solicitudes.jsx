import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateLayout } from '@/layouts/PrivateLayout';
import { startListar } from '@/redux/solicitudes';
import { Solicitud } from './Solicitud';

import { Spiner } from '@/components';
import { Listar } from './Listar';
import { Pagar } from './Pagar';

export const Solicitudes = () => {

    const dispatch = useDispatch()
    const { solicitudes, loading } = useSelector((state) => state.solicitudes);

    const [showModal, setShowModal] = useState(false);
    const [showModalPagar, setShowModalPagar] = useState(false);
    const [solicitudEdit, setSolicitudEdit] = useState(null);
    const [solicitudPagar, setSolicitudEditPagar] = useState(null);

    const handleLoadSolicitudes = async () => {
        dispatch(startListar());
    }

    const handleOpenModal = () => {
        setShowModal(true)
        setSolicitudEdit(null)
    }

    const handleOpenModalEdit = (solicitud) => {
        setShowModal(true)
        setSolicitudEdit(solicitud)
    }


    const handleCloseModal = () => {
        setShowModal(false)
        setSolicitudEdit(null)
        handleLoadSolicitudes();
    }

    const handleOpenModalPagar = (solicitud) => {
        setShowModalPagar(true)
        setSolicitudEditPagar(solicitud);
    }

    const handleClosedModalPagar = () => {
        setShowModalPagar(false)
        setSolicitudEditPagar(null);
    }

    useEffect(() => {
        handleLoadSolicitudes()
    }, [])


    return (
        <PrivateLayout>
            {loading ? <Spiner /> : ''}

            <div className="row justify-content-center mt-5">
                <div className="col-md-11">
                    <div className="text-start">
                        <button onClick={handleLoadSolicitudes} className="btn btn-primary mb-3 mx-2">Actualizar</button>
                        <button onClick={handleOpenModal} className="text-white btn btn-info mb-3">Nueva solcitud</button>
                    </div>

                    <div className='mt-2'>
                        <Listar solicitudes={solicitudes} onOpenModalEdit={handleOpenModalEdit} onOpenModalPagar={handleOpenModalPagar} />
                    </div>
                    <div className='mt-2'>
                        <Solicitud openModal={showModal} closedModal={handleCloseModal} solicitudEdit={solicitudEdit} />
                    </div>

                    <div className='mt-2'>
                        <Pagar openModalPagar={showModalPagar} closedModalPagar={handleClosedModalPagar} solicitudPagar={solicitudPagar} />
                    </div>
                </div>
            </div>
        </PrivateLayout>
    )
}
