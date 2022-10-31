import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const CheckoutItem = ({ mobile }) => {
  const { name, price, img, amount } = mobile;

  const [amountMobile, setAmount] = useState(amount);

  const addMobile = () => {
    setAmount(amountMobile + 1);
  };

  const removeMobile = () => {
    amountMobile === 1 ? setAmount(1) : setAmount(amountMobile - 1);
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton>
          <DeleteIcon />
        </IconButton>
      }
      sx={{ m: '20px 0 ' }}
    >
      <Avatar
        alt="Remy Sharp"
        src={img}
        variant="square"
        sx={{ width: 85, height: 105 }}
      />
      <Container sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Container>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}$
          </Typography>
        </Container>
        <Container sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => addMobile()}>
            <AddCircleOutlineIcon sx={{ marginRight: 2 }} />
          </IconButton>
          <Typography sx={{ fontSize: 26 }}>{amountMobile}</Typography>
          <IconButton onClick={() => removeMobile()}>
            <RemoveCircleOutlineIcon sx={{ marginLeft: 2 }} />
          </IconButton>
        </Container>
      </Container>
    </ListItem>
  );
};

export default CheckoutItem;
