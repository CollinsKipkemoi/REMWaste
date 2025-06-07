import { MapPin, Trash2, Truck, Shield, Calendar, CreditCard } from 'lucide-react';

const steps = [
    { label: 'Postcode', icon: MapPin, state: 'active' },
    { label: 'Waste Type', icon: Trash2, state: 'active' },
    { label: 'Select Skip', icon: Truck, state: 'active' },
    { label: 'Permit Check', icon: Shield, state: 'inactive' },
    { label: 'Choose Date', icon: Calendar, state: 'inactive' },
    { label: 'Payment', icon: CreditCard, state: 'inactive' },
];

function TimeFrame() {
    return (
        <ol className="flex items-center w-full justify-center">
            {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = step.state === 'active';
                const bgColor = isActive ? 'bg-primary' : 'bg-muted';
                const iconColor = isActive ? 'text-primary-foreground' : 'text-muted-foreground';
                const labelColor = isActive ? 'text-foreground' : 'text-muted-foreground';
                const lineColor = isActive ? 'bg-primary' : 'bg-muted';

                return (
                    <li key={step.label} className="flex items-center">
                        <div className="flex items-center hover:cursor-pointer">
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${bgColor}`}>
                                <Icon className={`w-5 h-5 ${iconColor}`} />
                            </div>
                            <span className={`ml-2 text-sm font-medium ${labelColor}`}>{step.label}</span>
                        </div>
                        {idx < steps.length - 1 && (
                            <div className={`w-16 h-0.5 mx-2 ${lineColor}`}></div>
                        )}
                    </li>
                );
            })}
        </ol>
    );
}

export default TimeFrame;
