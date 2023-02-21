import bigLogo from "../assets/ps5hunter.png";
import React, { useEffect } from "react";
import {Box, Button} from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from "@mui/material/Link";
import axios from "axios";
function StarterView() {

    const [products, setProducts] = React.useState(null)
    useEffect(() => {
        axios.get("/api/product/")
        .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
    }, []);

    const handleClick = () => {
        axios.get('/run_scraper/')
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      };

    console.log(products)
    return (
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Box display="flex" flexDirection="column" alignItems="stretch">
            {products && products.length && (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Website</TableCell>
                        <TableCell>Availability</TableCell>
                        <TableCell>URL</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.website}</TableCell>
                            <TableCell>{item.availability ? "Available" : "Not available"}</TableCell>
                            <TableCell><Link href={item.url}>{item.url}</Link></TableCell>
                            <TableCell>{item.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>)
}
        <Button variant="contained" color="primary" onClick={handleClick}>Run Scraper</Button>
            </Box>
        </div>
    )
}

export default StarterView;