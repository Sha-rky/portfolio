import React from "react";

interface CustomContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function CustomContainer({ children, className = "" }: CustomContainerProps) {
    return (
        <div className={`max-w-6xl mx-auto px-4 md:px-8 w-full ${className}`}>
            {children}
        </div>
    );
}

export default CustomContainer;
