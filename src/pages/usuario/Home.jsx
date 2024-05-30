import { PrivateLayout } from "@/layouts"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <PrivateLayout>
      <div className="row gy-3 mt-5">
        <div className="col-md-4">
          <div className="card card-transparent">
            <div className="card-header bg-react-blue " />
            <div className="card-body">
              <div className="h1 text-white">
                <i class="fab fa-pushed mx-2"></i>
                Solcitudes
              </div>
              <hr className="text-white" />
              <div className="text-white">
                En esta sección puedes gestionar tus solicitudes. <br />
                Asi como crear una solciitud y poder actualizarla.
              </div>
            </div>
            <div className="card-header">
              <div className="text-end">
                <Link to='/solicitudes' className="text-white btn btn-info">
                  Visitar
                  <i class="fas fa-arrow-right mx-1"></i>

                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card card-transparent">
            <div className="card-header bg-react-blue " />
            <div className="card-body">
              <div className="h1 text-white">
                <i class="fab fa-pushed mx-2"></i>
                Pagos
              </div>
              <hr className="text-white" />
              <div className="text-white">
                En esta sección puedes gestionar tus pagos. <br />
                Asi como realizar pagos en linea con Paypal y Stripe.
              </div>
            </div>
            <div className="card-header">
              <div className="text-end">
                <Link to='/solicitudes' className="text-white btn btn-info">
                  Visitar
                  <i class="fas fa-arrow-right mx-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrivateLayout>
  )
}
