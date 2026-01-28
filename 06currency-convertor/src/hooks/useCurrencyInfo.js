import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    async function fetchCurrency() {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        )
        const json = await res.json()
        setData(json[currency])
      } catch (error) {
        console.error("Currency API failed:", error)
        setData({})
      }
    }

    fetchCurrency()
  }, [currency])

  return data
}

export default useCurrencyInfo
