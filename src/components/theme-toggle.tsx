import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="fixed right-4 top-auto bottom-4 sm:top-6 sm:bottom-auto sm:right-6 p-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm hover:bg-muted/80 transition-all duration-200 z-50"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground hover:text-foreground transition-colors" />
            ) : (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground hover:text-foreground transition-colors" />
            )}
        </button>
    )
}
