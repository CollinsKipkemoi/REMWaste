import type { SkipData } from "@/types";
import { X } from "lucide-react";

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

    return (
        <>
            <div
                className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
                onClick={onClose}
            />

            <div
                className={`
                    fixed left-0 right-0 bottom-0 z-50
                    w-full
                    bg-background shadow-2xl
                    rounded-t-2xl
                    transition-transform duration-300
                    ${open ? "translate-y-0" : "translate-y-full"}
                    pointer-events-auto
                `}
                style={{
                    minHeight: "32vh",
                    maxHeight: "90vh",
                }}
                onClick={e => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <X size={24} />
                </button>

                <div className="p-6 pt-12 flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">{skip.size} Yard Skip</h2>
                    <div className="flex flex-col gap-1 text-muted-foreground">
                        <span>Area: {skip.area}</span>
                        <span>Postcode: {skip.postcode}</span>
                        <span>
                            Price: <span className="text-primary font-semibold">£{skip.price_before_vat}</span> + VAT £{skip.vat}
                        </span>
                    </div>
                    <div className="flex gap-2 mt-6">
                        <button
                            className="flex-1 py-2 rounded bg-primary text-primary-foreground font-semibold transition hover:bg-primary/90"
                            onClick={onContinue}
                        >
                            Continue
                        </button>
                        <button
                            className="flex-1 py-2 rounded bg-muted text-foreground font-semibold transition hover:bg-muted/80"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
