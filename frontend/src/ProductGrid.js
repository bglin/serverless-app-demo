import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container  from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import  Typography  from '@mui/material/Typography';
import food from './Food_icon.png';

const apiUrl= 'https://'+ process.env.REACT_APP_API_URL + '/products';

function ProductGrid() {
   const [products,setProducts] = useState([])
 
    useEffect(() => {
    fetch(apiUrl).then((res => res.json())).then((data) => {
        console.log(data);
        setProducts(data)})
        .catch((error) => {
            console.error('Error:', error);
          }
        )
    },[setProducts])
    return (
        <Container maxWidth="lg">
        <Box  sx={{
            display: 'flex',
            flexDirection:'column',
            minHeight:'150vh',
            alignItems: 'center',
            justifyContent:'center'
          }}>
        <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {products.map((product, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
               <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={food}
                                alt="food"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Category: {product.category}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                ID: {product.prodId}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Temp Zone: {product.temp}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Details</Button>
                            </CardActions>
                </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      </Container>
    );
}

export default ProductGrid;