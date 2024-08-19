import PropTypes from 'prop-types';
import { Button, Typography } from '@mui/material';
import { useReducer } from 'react';
import { ChevronRightOutlined } from '@mui/icons-material';

const ButtonPrimary = ({ property1, text = 'Lihat Aktivitas' }) => {
  const initialState = {
    property1: property1 || 'inactive-button',
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'mouse_enter':
        return { ...state, property1: 'active-button' };
      case 'mouse_leave':
        return { ...state, property1: 'inactive-button' };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Button
      variant="contained"
      color={state.property1 === 'active-button' ? 'primary' : 'primary'}
      onMouseLeave={() => dispatch({ type: 'mouse_leave' })}
      onMouseEnter={() => dispatch({ type: 'mouse_enter' })}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        p: 1,
        borderRadius: '10px',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          whiteSpace: 'nowrap',
          size: '14px',
          fontWeight: 'bold',
        }}
      >
        {text}
      </Typography>
      <ChevronRightOutlined />
    </Button>
  );
};

ButtonPrimary.propTypes = {
  property1: PropTypes.oneOf(['active-button', 'inactive-button']),
  text: PropTypes.string,
};

export default ButtonPrimary;
