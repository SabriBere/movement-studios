"use client"

function Hamburguer({
    name,
    className,
    border,
}: {
    name: string;
    className: string;
    border?: string;
}) {
    return (
        <div className="flex flex-col items-center gap-3">
            <div
                className={`h-12 w-12 rounded-full border ${border ?? "border-transparent"} ${className}`}
            />
            <span className="text-[10px] uppercase tracking-[0.18em] text-grey">
                {name}
            </span>
        </div>
    );
}

export default Hamburguer