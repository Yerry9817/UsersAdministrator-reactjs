const Alerta = ({alerta}) => {
    const {error, msg} = alerta;
  return (
    <div className={`${error?'bg-red-600':''} text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}>
        {msg}
    </div>
  )
}

export default Alerta