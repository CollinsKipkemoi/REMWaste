import TimeFrame from "@/components/time-frame"
import SkipChooser from "@/components/skip-chooser"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <ThemeToggle />
      <div className="bg-background min-h-screen w-full overflow-x-hidden">
        <div className="p-10">
          <TimeFrame />
          <SkipChooser />
        </div>
      </div>
      <Toaster />
    </ThemeProvider>
  )
}

export default App
