import TimeFrame from "@/components/time-frame"
import SkipChooser from "@/components/skip-chooser"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <ThemeToggle />
      <div className="bg-background min-h-screen w-screen p-10">
        <TimeFrame />
        <SkipChooser />
      </div>
    </ThemeProvider>
  )
}

export default App
