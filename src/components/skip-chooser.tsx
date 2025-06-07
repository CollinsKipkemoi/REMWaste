import { useEffect } from "react"

function SkipChooser() {
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
            const data = await response.json()
            console.log(data)
        }
        fetchData()
    }, [])
    return (
        <div className="flex flex-col items-center justify-center w-full pt-10">
            <h1 className="text-2xl font-bold text-muted-foreground">Skip Chooser</h1>
            <p className="text-muted-foreground">Select the skip size that best suits your needs</p>

        </div>
    )
}

export default SkipChooser
