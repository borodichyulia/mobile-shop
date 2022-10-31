import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MobileInformation = () => {
  const { mobileId } = useParams();
  const mobiles = useSelector((state) => state.mobile.mobiles);
  const defaultMobile = mobiles.find((mobile) => mobile.id === mobileId);
  const { name, price, producer } = defaultMobile;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <CardMedia
          component="img"
          height="300"
          image={
            'https://content2.onliner.by/catalog/device/main/b9fefc8c8f96dbc21492792f3a1a502d.jpeg'
          }
          alt="green iguana"
        />
        <Typography variant="h5" component="div">
          {price}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {producer}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default MobileInformation;
