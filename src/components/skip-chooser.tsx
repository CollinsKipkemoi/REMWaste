import { useEffect, useState } from "react"
import Skip from "@/components/skip"
import type { SkipData } from "@/types"

function SkipChooser() {
    const [skips, setSkips] = useState<SkipData[]>([])
    const [selectedSkip, setSelectedSkip] = useState<SkipData | null>(null)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
            const data = await response.json()
            setSkips(data)
        }
        fetchData()
    }, [])

    const handleSkipClick = (skip: SkipData) => {
        setSelectedSkip(skip)
        console.log(`Selected skip: ${skip.size}`)
    }

    return (
        <div className="flex flex-col items-center justify-center w-full pt-10">
            <h1 className="text-2xl font-bold text-muted-foreground">Skip Chooser</h1>
            <p className="text-muted-foreground">Select the skip size that best suits your needs</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full pt-10">
                {skips.map((skip) => (
                    <Skip key={skip.id} skip={skip} onClick={() => handleSkipClick(skip)} />
                ))}
            </div>
        </div>
    )
}

export default SkipChooser
