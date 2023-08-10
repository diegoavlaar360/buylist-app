import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';
import { TextField, Button, Grid, Typography} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import '../index.css';


export const SecondBuyListComponent = () => {

    const [total, setTotal] = useState(0);

    const [products, setProducts] = useState([]);
    const [values, handleChange] = useForm({
        id:'PROD-',
        name:'',
        price:0.0,
        quantity:1
    });

    const [selectedRows, setSelectedRows] = useState([]);     
    const handleSelectionModelChange = (selectionModel) => {
          setSelectedRows(selectionModel);
          console.log(selectedRows)
    };

    const calculateTotal = (calculateValue) =>{
        let totalValue = 0;
        calculateValue.forEach(object=> totalValue += object.price*object.quantity);
        console.log(calculateValue)
        console.log(products)
        console.log('Total: '+total)
        console.log('Total Value: '+totalValue)
        setTotal(totalValue);
    }

    const onSubmit = (e) => {
        e.preventDefault();
 
        let newValues = [...products, values]
        setProducts(newValues);
        console.log(newValues)
        calculateTotal(newValues);
    }

    const onDelete = () => {
        console.log(selectedRows)
        console.log(products)
        console.log('DELETE has been pressed');
        let productsSelected = products.filter(object => !selectedRows.includes(object.id));
        console.log(productsSelected);
        setProducts(productsSelected);
        calculateTotal(productsSelected);
    };

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Product' },
        { field: 'price', headerName: 'Price' },
        { field: 'quantity', headerName: 'Quantity' },
    ];

  return (
    <>
        <div style={{ height: '40vh'}}>
            
            <form noValidate autoComplete="off" onSubmit={onSubmit} style={{height: '100%'}}>
                <Typography variant="subtitle1" color="primary" style={{ fontFamily: 'monospace', fontSize: '30px', textAlign: 'center'}}>ENTER A NEW PRODUCT:</Typography>
                <Grid container spacing={2} style={{ height: '100%'}}>
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <TextField id="standard-basic" label="CODE" name="id" value={values.id} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <TextField id="standard-basic" label="PRODUCT" name="name" value={values.name} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <TextField id="standard-basic" label="PRICE ($US)" name="price" value={values.price} onChange={handleChange} type="number" inputProps={{ step: '0.10', min: 0 }}/>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <TextField id="standard-basic" label="QUANTITY (UNITS)" name="quantity" value={values.quantity} onChange={handleChange} type="number" inputProps={{ min: 1 }}/>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button type="submit" variant="contained">Add</Button>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button type="button" variant="contained" onClick={onDelete}>Delete</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
        <div style={{ height: '60vh' , display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
            <Typography variant="subtitle1" color="primary" style={{ fontFamily: 'monospace', fontSize: '30px'}}>PRODUCTS: $US {total.toFixed(2)}</Typography>
            <DataGrid
                style={{width: '50vw'}}
                rows={products}
                columns={columns}
                initialState={{
                    pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                selectionModel={selectedRows}
                onRowSelectionModelChange={handleSelectionModelChange}
            />
        </div>
    </>
  )
}