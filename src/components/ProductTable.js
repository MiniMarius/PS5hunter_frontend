import React, { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from "@mui/material/Link";
import { Box } from "@mui/system";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

const ProductTable = ({ products }) => {
    const [sortColumn, setSortColumn] = React.useState(null);
    const [sortDirection, setSortDirection] = React.useState("asc");
  
    let sortedProducts = [];
    if (products && products.length > 0) {
      sortedProducts = products.slice().sort((a, b) => {
        if (sortColumn === "website") {
          const nameA = a.website.toUpperCase();
          const nameB = b.website.toUpperCase();
          if (nameA < nameB) return sortDirection === "asc" ? -1 : 1;
          if (nameA > nameB) return sortDirection === "asc" ? 1 : -1;
          return 0;
        } else if (sortColumn === "price") {
          return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
        }
        // sort by availability
        return sortDirection === "asc" ? a.availability - b.availability : b.availability - a.availability;
      });
    }
  
    const handleSortClick = (column) => {
      if (column === sortColumn) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      } else {
        setSortColumn(column);
        setSortDirection("asc");
      }
    };
  
    return (
      <>
        {products && products.length && (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell onClick={() => handleSortClick("website")}>
                  Website
                </TableCell>
                <TableCell onClick={() => handleSortClick("name")}>Product</TableCell>
                <TableCell onClick={() => handleSortClick("availability")}>
                  Availability
                </TableCell>
                <TableCell onClick={() => handleSortClick("price")}>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedProducts.map((item) => (
                <TableRow key={item.id}>
                    <TableCell>
                        <Link href={item.url} color="inherit">
                            {item.website}
                    </Link>
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                    {item.availability ? (
                      <Box display="flex" alignItems="center">
                        <ThumbUpAltOutlinedIcon style={{ color: "green" }} />
                      </Box>
                    ) : (
                      <Box display="flex" alignItems="center">
                        <ThumbDownAltOutlinedIcon style={{ color: "red" }} />
                      </Box>
                    )}
                  </TableCell>
                  <TableCell>{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </>
    );
  };
export default ProductTable;