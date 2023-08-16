import useCotizador from "../hooks/useContext"
import { marcas, planes } from "../constants"
import { useCallback, useRef } from "react"

const Resultado = () => {

    const { resultado, datos } = useCotizador()
    const { marca, year, plan } = datos

    const [nombreMarca] = useCallback(marcas.filter(m => m.id === Number(marca)), [resultado])

    const [nombrePlan] = useCallback(planes.filter(p => p.id === Number(plan)), [resultado])

    const yearRef = useRef(year)

    if (resultado == 0) return null

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-500 font-black text-3xl">Resumen</h2>
            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {nombreMarca?.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {nombrePlan?.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Año del auto: </span>
                {yearRef.current}
            </p>
            <p className="my-2 text-2xl">
                <span className="font-bold">Total cotización: </span>
                {resultado}
            </p>
        </div>
    )
}

export default Resultado