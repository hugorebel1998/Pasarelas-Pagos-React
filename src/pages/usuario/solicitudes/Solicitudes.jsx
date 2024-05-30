import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateLayout } from '@/layouts/PrivateLayout';
import { startListar } from '@/redux/solicitudes';
import { Modal } from './Modal';

import { Spiner } from '@/components/Spiner';
import { Listar } from './Listar';

export const Solicitudes = () => {

    const dispatch = useDispatch()
    const { solicitudes, loading } = useSelector((state) => state.solicitudes);

    const [showModal, setShowModal] = useState(false)
    const [solicitudEdit, setSolicitudEdit] = useState(null);

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

    useEffect(() => {
        handleLoadSolicitudes()
    }, [])


    return (
        <PrivateLayout>
            {loading ? <Spiner /> : ''}

            <div className="row justify-content-center">
                <div className="col-md-11">
                    <div className="text-start">
                        <button onClick={handleLoadSolicitudes} className="btn btn-outline-success mb-3 mx-2">Actualizar</button>
                        <button onClick={handleOpenModal} className="btn btn-outline-primary mb-3">Nueva solcitud</button>
                    </div>

                    <div className='card shadow'>
                        <Listar solicitudes={solicitudes} onOpenModalEdit={handleOpenModalEdit} />
                    </div>
                    <Modal openModal={showModal} closedModal={handleCloseModal} solicitudEdit={solicitudEdit} />
                </div>
            </div>
        </PrivateLayout>
    )
}
