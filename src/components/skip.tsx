import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Calendar,
    MapPin,
    Truck,
    Weight,
    AlertTriangle,
    ArrowRight,
    Info
} from 'lucide-react';
import type { SkipData } from "@/types"
import skipImg from "@/assets/6-yarder.png"


export default function Skip({ skip, onClick }: { skip: SkipData, onClick: (skip: SkipData) => void }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const formatPrice = (price: number) => `£${price}`;
    const formatDays = (days: number) => `${days} day${days !== 1 ? 's' : ''}`;

    return (
        <Card
            className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer border-2 ${isHovered ? 'border-primary scale-[1.02]' : 'border-border'
                } ${skip.forbidden ? 'opacity-75' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(skip)}
        >
            <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-background to-muted p-6 pb-4">
                    <Badge
                        variant="secondary"
                        className="absolute top-3 right-3 font-bold bg-primary text-primary-foreground"
                    >
                        {skip.size} Yards
                    </Badge>

                    <div className="absolute top-3 left-3 flex gap-1">
                        {skip.forbidden && (
                            <Badge variant="destructive" className="text-xs">
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                Restricted
                            </Badge>
                        )}
                        {skip.allowed_on_road && (
                            <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                                <Truck className="w-3 h-3 mr-1" />
                                Road OK
                            </Badge>
                        )}
                    </div>

                    <div className="w-full h-36 flex items-center justify-center bg-[#f8fafc] dark:bg-[#18181b]">
                        <img
                            src={skipImg}
                            alt="Skip"
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>

                <div className="p-4 space-y-3">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="font-bold text-lg">{skip.size} Yard Skip</h3>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                                <MapPin className="w-4 h-4 mr-1" />
                                {skip.area} • {skip.postcode}
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                                {formatPrice(skip.price_before_vat)}
                            </div>
                            <div className="text-xs text-muted-foreground">
                                +VAT £{skip.vat}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-primary" />
                            <span>{formatDays(skip.hire_period_days)} hire</span>
                        </div>
                        <div className="flex items-center">
                            <Weight className="w-4 h-4 mr-2 text-primary" />
                            <span className="text-foreground text-xs">{skip.allows_heavy_waste ? "Heavy waste OK" : "No heavy waste"}</span>
                        </div>


                    </div>

                    <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="pt-3 border-t space-y-2 text-sm">
                            {skip.transport_cost && (
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Transport:</span>
                                    <span>{formatPrice(skip.transport_cost)}</span>
                                </div>
                            )}
                            {skip.per_tonne_cost && (
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Per tonne:</span>
                                    <span>{formatPrice(skip.per_tonne_cost)}</span>
                                </div>
                            )}
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>Updated:</span>
                                <span>{new Date(skip.updated_at).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>

                    <Button
                        className={`w-full transition-all duration-300 ${skip.forbidden
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:bg-primary/90'
                            }`}
                        disabled={skip.forbidden}
                    >
                        {skip.forbidden ? (
                            <>
                                <AlertTriangle className="w-4 h-4 mr-2" />
                                Not Available
                            </>
                        ) : (
                            <>
                                Select This Skip
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </>
                        )}
                    </Button>

                    <div className="flex items-center justify-center pt-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs text-muted-foreground"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsExpanded(!isExpanded);
                            }}
                        >
                            <Info className="w-3 h-3 mr-1" />
                            {isExpanded ? 'Less details' : 'More details'}
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
