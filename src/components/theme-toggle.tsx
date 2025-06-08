import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="fixed top-4 right-4 p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Moon className="h-5 w-5 text-muted-foreground" />
            ) : (
                <Sun className="h-5 w-5 text-muted-foreground" />
            )}
        </button>
    )
}
