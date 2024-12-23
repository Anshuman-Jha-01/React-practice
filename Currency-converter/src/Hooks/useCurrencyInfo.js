import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        async function getData(currency) {
            let res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
            let jsonRes = await res.json();
            setData(jsonRes[currency]);
        }
        getData(currency);
    }, [currency])
    return data
}

export default useCurrencyInfo;