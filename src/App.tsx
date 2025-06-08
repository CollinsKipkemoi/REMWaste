import TimeFrame from "@/components/time-frame"
import SkipChooser from "@/components/skip-chooser"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="relative min-h-screen w-full max-w-full overflow-x-hidden">
        <ThemeToggle />
        <div className="bg-background min-h-screen w-full max-w-full">
          <div className="p-4 sm:p-10 w-full max-w-full">
            <TimeFrame />
            <SkipChooser />
          </div>
        </div>
        <Toaster />
      </div>
    </ThemeProvider>
  )
}

export default App
