import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateLayout } from '@/layouts/PrivateLayout';
import { startListar } from '@/redux/solicitudes';
import { Modal } from './Modal';

import { Spiner } from '@/components/Spiner';
import { Listar } from './Listar';

export const Solicitudes = () => {

    const { solicitudes, loading } = useSelector((state) => state.solicitudes);
    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState(false)
    const [solicitudEditando, setSolicitudEditando] = useState(null);

    const loadSolicitudes = async () => {
        dispatch(startListar());
    }

    const handleOpenModal = (solicitud) => {
        setShowModal(true)
        setSolicitudEditando(solicitud)
    }

    // const openModalEdit = (solcitud) => {
    //     setSolicitudEditando(solcitud)
    //     setShowModal(true)
    // }

    const closeModal = () => {
        setShowModal(false)
        setSolicitudEditando(null)
    }

    useEffect(() => {
        loadSolicitudes()
    }, [])


    return (
        <PrivateLayout>
            {loading ? <Spiner /> : ''}

            <div className="row justify-content-center">
                <div className="col-md-11">
                    <div className="text-start">
                        <button onClick={loadSolicitudes} className="btn btn-outline-success mb-3 mx-2">Actualizar</button>
                        <button onClick={handleOpenModal} className="btn btn-outline-primary mb-3">Nueva solcitud</button>
                    </div>

                    <div className='card shadow'>
                        <Listar solicitudes={solicitudes} onOpenModal={handleOpenModal} />
                    </div>
                    <Modal openModal={showModal} clModal={closeModal} solicitudEditando={solicitudEditando} />
                </div>
            </div>
        </PrivateLayout>
    )
}
