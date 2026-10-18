
import {MapPin,Wallet,BuildingComplex} from "lucide-react";
const  summaries  = [
    {
        icon:<MapPin/>,
        title:"Lokasi",
        description:"Indonesia"
    },
    {
        icon:<Wallet/>,
        title:"Mulai Harga",
        description:"IDR 120.000.000"
    },
    
    {
        icon:<BuildingComplex/>,
        title:"Tipe Properti",
        description:"Rumah, Apartemen, dll."
    },
    
    {
        icon:<MapPin/>,
        title:"Jumlah kamar",
        description:"3-5 Kamar"
    },
    

    
]

export default function Summary() {
    return (
        <div className="bg-white font-nunito  flex-col min-h-17 items-start rounded-2xl mt-30 absolute top-35 md:top-60 left-6  right-6  flex sm:flex-row sm:justify-between px-4 sm:items-center py-4 gap-2 ">
            {
                summaries.map((summary, index) => {
                    return (
                        <div className="flex items-center gap-2 " key={index}>
                            <div className="bg-gray-200  rounded-md p-2">
                                {summary.icon}
                            </div>
                            <div className="flex flex-col font-bold ">
                                <span className="text-xs text-gray-500 font-sans">{summary.title}</span>
                                <span className="text-sm">{summary.description}</span>
                            </div>
                        </div>
                    )
                })
            }
           
            <a href="#katalog" className="bg-blue-500 duration-300 hover:cursor-pointer  hover:bg-blue-600 active:bg-blue-600 text-white py-2 px-4 rounded-md ">
                Cari Properti
            </a>
           
        </div>
    )
}