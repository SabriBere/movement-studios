export type ColorToken = {
    name: string;
    className: string;
    border?: string;
};

export const colorGroups: ColorToken[][] = [
    [
        { name: "White", className: "bg-white", border: "border-grey/25" },
        { name: "Black", className: "bg-black" },
        { name: "Blue Barry", className: "bg-blue-barry" },
        { name: "Grey", className: "bg-grey" },
        { name: "Fucsia", className: "bg-fucsia" },
    ],
    [
        { name: "White", className: "bg-white", border: "border-grey/25" },
        { name: "Black", className: "bg-black" },
        { name: "Blue Barry", className: "bg-blue-barry" },
    ],
    [
        { name: "Blue Barry", className: "bg-blue-barry" },
        { name: "Cian", className: "bg-cian" },
        { name: "Grey", className: "bg-grey" },
        { name: "Blue", className: "bg-blue" },
    ],
    [{ name: "Grey", className: "bg-grey" }],
];
