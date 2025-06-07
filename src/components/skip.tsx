import React, { useState } from 'react';
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

export default function Skip({ skip }: { skip: SkipData }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const formatPrice = (price: number) => `£${price}`;
  const formatDays = (days: number) => `${days} day${days !== 1 ? 's' : ''}`;

  const getSkipHeight = (size: number) => {
    switch(size) {
      case 4: return 'h-20';
      case 5: return 'h-24';
      case 6: return 'h-28';
      default: return 'h-24';
    }
  };

  const getSkipColor = (size: number) => {
    if (skip.forbidden) return 'from-red-100 to-red-200 dark:from-red-900/20 dark:to-red-800/30';
    switch(size) {
      case 4: return 'from-amber-100 to-yellow-200 dark:from-amber-900/20 dark:to-yellow-800/30';
      case 5: return 'from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/30';
      case 6: return 'from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-800/30';
      default: return 'from-gray-100 to-gray-200 dark:from-gray-800/20 dark:to-gray-700/30';
    }
  };

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer border-2 ${
        isHovered ? 'border-primary scale-[1.02]' : 'border-border'
      } ${skip.forbidden ? 'opacity-75' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardContent className="p-0">
        {/* Skip Visual Container */}
        <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 pb-4">
          {/* Size Badge */}
          <Badge
            variant="secondary"
            className="absolute top-3 right-3 font-bold bg-primary text-primary-foreground"
          >
            {skip.size} Yards
          </Badge>

          {/* Status Indicators */}
          <div className="absolute top-3 left-3 flex gap-1">
            {skip.forbidden && (
              <Badge variant="destructive" className="text-xs">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Restricted
              </Badge>
            )}
            {skip.allowed_on_road && (
              <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                <Truck className="w-3 h-3 mr-1" />
                Road OK
              </Badge>
            )}
          </div>

          {/* 3D Skip Visualization */}
          <div className="flex items-end justify-center mt-8 mb-4">
            <div
              className={`${getSkipHeight(skip.size)} w-32 bg-gradient-to-t ${getSkipColor(skip.size)}
                         border-2 border-amber-300 dark:border-amber-600 rounded-t-lg relative
                         transform transition-transform duration-300 group-hover:scale-105
                         shadow-lg`}
              style={{
                clipPath: 'polygon(10% 100%, 90% 100%, 85% 0%, 15% 0%)'
              }}
            >
              {/* Skip Brand/Logo Area */}
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center">
                <div className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                  SKIP
                </div>
              </div>

              {/* Capacity Indicator */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Information Panel */}
        <div className="p-4 space-y-3">
          {/* Title and Location */}
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

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-blue-500" />
              <span>{formatDays(skip.hire_period_days)} hire</span>
            </div>
            {skip.allows_heavy_waste && (
              <div className="flex items-center">
                <Weight className="w-4 h-4 mr-2 text-green-500" />
                <span>Heavy waste OK</span>
              </div>
            )}
          </div>

          {/* Expandable Details */}
          <div className={`transition-all duration-300 overflow-hidden ${
            isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
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

          {/* Action Button */}
          <Button
            className={`w-full transition-all duration-300 ${
              skip.forbidden
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

          {/* Expand/Collapse Indicator */}
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
