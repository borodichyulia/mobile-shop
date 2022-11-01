import { useSelector } from 'react-redux';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.white}`,
    padding: '0 4px',
  },
}));

const CheckoutIcon = () => {
  const checkoutMobile = useSelector((state) => state.mobile.checkoutMobile);

  const navigate = useNavigate();

  return (
    <IconButton
      aria-label="cart"
      style={{ color: 'white' }}
      onClick={() => navigate('checkout')}
    >
      <StyledBadge badgeContent={checkoutMobile.length} color="error">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default CheckoutIcon;
