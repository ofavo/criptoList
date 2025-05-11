import { useEffect, useState } from "react"
import { getData } from "../services/criptoServices"
import { Cripto } from "../interfaces/cripto.interface"

const useCriptos =  (start: number, type: 'usd' | 'btc' | null ) => {
    const [criptosList, setCriptoList] = useState<Array<Cripto> >([])
    const [isFetchingMore, setIsFetchingMore] = useState(false);

    const get = async () => {
        setIsFetchingMore(true)
        try {

            const data : Array<Cripto> = await getData(start)

           setCriptoList(criptosList.concat(data))
            return setIsFetchingMore(false)

        } catch (error) {
            setIsFetchingMore(false)
            console.log(error)
        }
    }
    const sortPrice = () => {

        if (!type) return criptosList;
        setIsFetchingMore(true)
        const sorted : Cripto[] = [...criptosList].sort((a, b) => {
            const priceA = parseFloat(type === 'usd' ? a.price_usd : a.price_btc);
            const priceB = parseFloat(type === 'usd' ? b.price_usd : b.price_btc);
            return priceB - priceA;
        });
        setIsFetchingMore(false)
        return setCriptoList(sorted)
    }
    useEffect(() => {

        if(!type) {get();}
        else {sortPrice()}

    },[start, type])
    return {criptosList, isFetchingMore}
}

export default useCriptos;
