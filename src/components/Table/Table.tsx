"use client";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import Modal from "../Modals/Modal";
import clients from "@/mocks/clients.json";
import styles from "./table.module.scss";

const columnHelper = createColumnHelper<Client>();

const Table = () => {
    const [clienteSeleccionado, setClienteSeleccionado] =
        useState<Client | null>(null);
    const data = useMemo(() => clients as Client[], []);

    const columns = useMemo(
        () => [
            columnHelper.accessor("id", {
                header: "ID",
                cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("nombre", {
                header: "Nombre",
                cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("email", {
                header: "Email",
                cell: (info) => info.getValue(),
            }),
            columnHelper.accessor("pais", {
                header: "País",
                cell: (info) => info.getValue(),
            }),
            columnHelper.display({
                id: "acciones",
                header: "Información",
                cell: ({ row }) => (
                    <button
                        onClick={() => setClienteSeleccionado(row.original)}
                    >
                        Más
                    </button>
                ),
            }),
        ],
        []
    );

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div>
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal
                isOpen={!!clienteSeleccionado}
                onClose={() => setClienteSeleccionado(null)}
                client={clienteSeleccionado}
            />
        </div>
    );
};

export default Table;
