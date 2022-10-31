import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item';

const Checkout = () => {
  const mobiles = useSelector((state) => state.mobile.checkoutMobile);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={10} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
          <List
            sx={{
              boxShadow: '8px 8px 15px 5px lightgrey',
              borderRadius: '8px',
            }}
          >
            {mobiles.map((mobile) => (
              <CheckoutItem key={mobile.id} mobile={mobile} />
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;
