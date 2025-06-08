import { X, MapPin, Hash, DollarSign, Truck, Sparkles } from "lucide-react";
import type { SkipData } from "@/types";

type SkipDisplayDrawerProps = {
    skip: SkipData | null;
    open: boolean;
    onClose: () => void;
    onContinue: () => void;
};

export default function SkipDisplayDrawer({
    skip,
    open,
    onClose,
    onContinue,
}: SkipDisplayDrawerProps) {
    if (!open || !skip) return null;

    const totalPrice = skip.price_before_vat + skip.vat;

    return (
        <>
            <div
                className="fixed inset-0 bg-background/40 z-40 transition-opacity duration-300"
                onClick={onClose}
            />

            <div
                className={`
                    fixed left-0 right-0 bottom-0 z-50
                    w-full
                    bg-gradient-to-br from-card via-card/95 to-card
                    border-t border-border
                    rounded-t-3xl
                    shadow-2xl shadow-background/40
                    transition-all duration-500 ease-out
                    ${open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
                    pointer-events-auto
                    overflow-hidden
                    backdrop-blur-sm
                `}
                onClick={e => e.stopPropagation()}
            >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-pulse" />

                <button
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted/50 border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <X size={18} />
                </button>

                <div className="relative p-4 max-w-4xl mx-auto">
                    <div className="flex items-center justify-between gap-4 pt-2">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                                <Truck className="text-primary" size={20} />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-foreground">
                                    {skip.size} Yard Skip
                                </h2>
                                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                                    <Sparkles size={12} />
                                    <span>Premium Service</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <MapPin className="text-primary" size={14} />
                                <span className="text-foreground">{skip.area}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Hash className="text-accent" size={14} />
                                <span className="text-foreground">{skip.postcode}</span>
                            </div>

                            <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30">
                                <DollarSign className="text-accent" size={14} />
                                <span className="text-foreground font-bold">£{totalPrice}</span>
                                <span className="text-muted-foreground text-xs">(+VAT £{skip.vat})</span>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                className="py-2 px-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all duration-200 hover:from-primary/90 hover:to-accent/90 hover:scale-105 active:scale-95"
                                onClick={onContinue}
                            >
                                Continue Booking
                            </button>
                            <button
                                className="px-4 py-2 rounded-xl bg-muted/50 border border-border text-muted-foreground font-semibold text-sm transition-all duration-200 hover:bg-muted hover:text-foreground active:scale-95"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>
        </>
    );
}
