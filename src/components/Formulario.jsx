import { Fragment } from "react"
import { marcas, years, planes } from "../constants"
import useCotizador from "../hooks/useContext"
import Error from "./Error"

const Formulario = () => {

    const { datos, handleChangeDatos, setError, error, cotizarSeguro } = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()
        if (Object.values(datos).includes("")) {
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')

        cotizarSeguro()
    }

    return (
        <>
            {error && <Error />}
            <form>
                <div className="my-5">
                    <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
                    <select name="marca" id="marca" className='w-full p-3 bg-white border border-gray-200' onChange={e => handleChangeDatos(e)} value={datos.marca}>
                        <option value="">-- Seleccione Marca --</option>
                        {marcas.map(marca => (<option value={marca.id} key={marca.id}>{marca.nombre}</option>))}
                    </select>
                </div>
                <div className="my-5">
                    <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
                    <select name="year" id="marca" className='w-full p-3 bg-white border border-gray-200' onChange={e => handleChangeDatos(e)} value={datos.year}>
                        <option value="">-- Seleccione Año --</option>
                        {years.map(year => (<option value={year} key={year}>{year}</option>))}
                    </select>
                </div>
                <div className="my-5">
                    <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">Elige un Plan</label>
                    <div className="flex gap-3 items-center">
                        {planes.map(plan => (
                            <Fragment key={plan.id}>
                                <label>{plan.nombre}</label>
                                <input type="radio" name="plan" id={plan.nombre} value={plan.id} onChange={e => handleChangeDatos(e)} />
                            </Fragment>
                        ))}
                    </div>
                </div>
                <input type="submit" value="Cotizar" className="w-full bg-indigo-500 hover:bg-indigo-600 transitions-colors text-white cursor-pointer p-3 uppercase font-bold" onClick={handleSubmit} />
            </form>
        </>
    )
}

export default Formulario