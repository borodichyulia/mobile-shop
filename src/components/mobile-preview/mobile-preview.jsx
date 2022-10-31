import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMobile } from '../../app/mobileSlice';

const MobilePreview = ({ mobile }) => {
  const { id, img, producer, name, price } = mobile;
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const checkout = () => {
    dispatch(setMobile(mobile));
  };
  return (
    <Card sx={{ mr: 10, mb: 5 }}>
      <CardMedia component="img" height="300" image={img} alt="green iguana" />
      <CardContent>
        <Typography variant="h5" component="div" fontWeight={'bold'}>
          {producer}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" onClick={() => navigate(id)}>
          Learn More
        </Button>
        <Button size="small" variant="contained" onClick={() => checkout()}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default MobilePreview;
