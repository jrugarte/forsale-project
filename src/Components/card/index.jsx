const Card = (data)=> {
    return (

    <div className="bg-white cursor-pointer w-56 h-60">
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 rounded-md pl-1 pr-1 text-black/60 bg-white/30 ml-2 mb-2">{data.data.category.name}</span>
            <img src={data.data.images[0]} alt="" className="w-full h-full object-cover rounded-lg"/>
            <div className="absolute top-0 right-0 flex justify-center items-center text-black/40 bg-white/30 w-6 h-6 rounded-full mt-2 mr-2">
                +
            </div>
        </figure>
        <p className="flex justify-between m-2">
            <span className="text-sm font-light">{data.data.title}</span>
            <span className="text-lg font-semibold">${data.data.price}</span>
        </p>
      </div>
    )}

export default Card