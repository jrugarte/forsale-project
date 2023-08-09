const Card = ()=> {
    return (

    <div className="bg-white cursor-pointer w-56 h-60">
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 rounded-md pl-1 pr-1 text-black/60 bg-white/30 ml-2 mb-2">Electronics</span>
            <img src="https://images.pexels.com/photos/17839679/pexels-photo-17839679/free-photo-of-comida-madera-cena-mesa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full object-cover rounded-lg"/>
            <div className="absolute top-0 right-0 flex justify-center items-center text-black/40 bg-white/30 w-6 h-6 rounded-full mt-2 mr-2">
                +
            </div>
        </figure>
        <p className="flex justify-between m-2">
            <span className="text-sm font-light">Cbr</span>
            <span className="text-lg font-semibold">$ 2500,00</span>
        </p>
      </div>
    )}

export default Card