import { useEffect, useState } from "react"
import Skip from "@/components/skip"
import type { SkipData } from "@/types"
import SkipDisplayDrawer from "@/components/drawer"

function SkipChooser() {
    const [skips, setSkips] = useState<SkipData[]>([])
    const [selectedSkip, setSelectedSkip] = useState<SkipData | null>(null)
    const [drawerOpen, setDrawerOpen] = useState(false)

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
        setDrawerOpen(true)
    }

    return (
        <div className="flex flex-col items-center justify-center w-full pt-10">
            <h1 className="text-2xl font-bold text-muted-foreground">Skip Chooser</h1>
            <p className="text-muted-foreground">Select the skip size that best suits your needs</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full pt-10">
                {skips.map((skip) => (
                    <Skip key={skip.id} skip={skip} onClick={() => handleSkipClick(skip)} />
                ))}
            </div>
            <SkipDisplayDrawer
                skip={selectedSkip}
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                onContinue={() => setDrawerOpen(false)}
            />
        </div>
    )
}

export default SkipChooser
