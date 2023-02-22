import React, { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from "@mui/material/Link";

const ProductTable = ({products}) => {
    const [sortColumn, setSortColumn] = React.useState(null);
    const [sortDirection, setSortDirection] = React.useState('asc');

    let sortedProducts = [];
    if (products && products.length > 0) {
        sortedProducts = products.slice().sort((a, b) => {
            if (sortColumn === 'website') {
                const nameA = a.website.toUpperCase();
                const nameB = b.website.toUpperCase();
                if (nameA < nameB) return sortDirection === 'asc' ? -1 : 1;
                if (nameA > nameB) return sortDirection === 'asc' ? 1 : -1;
                return 0;
            } else if (sortColumn === 'price') {
                return sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
            }
            return 0;
        });
    }

    const handleSortClick = (column) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    return (
        <>
            {products && products.length && (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell onClick={() => handleSortClick('id')}>ID</TableCell>
                            <TableCell onClick={() => handleSortClick('website')}>Website</TableCell>
                            <TableCell onClick={() => handleSortClick('name')}>Name</TableCell>
                            <TableCell onClick={() => handleSortClick('availability')}>Availability</TableCell>
                            <TableCell onClick={() => handleSortClick('url')}>URL</TableCell>
                            <TableCell onClick={() => handleSortClick('price')}>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedProducts.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.website}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.availability ? 'Available' : 'Not available'}</TableCell>
                                <TableCell>
                                    <Link href={item.url}>{item.url}</Link>
                                </TableCell>
                                <TableCell>{item.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )
            }
        </>
    )
};
export default ProductTable;