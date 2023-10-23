interface Modal {
    modal:boolean
}

export default function Content(){

    const empresas = [{
        id: 1,
        name: "Batata",
    },
    {
        id: 2,
        name: "Cenoura",
    },
    {
        id: 3,
        name: "Brocolis",
    },
    {
        id: 4,
        name: "Couve",
    },
    {
        id: 5,
        name: "Rucula",
    },
    {
        id: 6,
        name: "Pimentão",
    },
    {
        id: 7,
        name: "Beterraba",
    }
    ]
    return(
        <div className='flex justify-center items-center gap-5 w-[50em] p-20 h-[25em] bg-white bg-gradient-to-r'>
        {empresas.map((i)=> (
            <button className="border border-solid border-blue-900 bg-blue-900 text-white text-xl hover:scale-110 transition-all p-2"key={i.id}> {i.name} </button>
        ))}
      </div>
    )
}