import * as React from 'react';
import {Rating, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {ChangeEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import StarIcon from '@material-ui/icons/Star';

const useStyles: any = makeStyles(
  {
    root: {

      maxWidth: '17%',
      
      '& .MuiRating-decimal': {
        fontSize: '.8rem',
        color: '#21268F'
      }


    }
  }
)

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export default function HoverRating() {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

  const classes = useStyles();

  return (
    <Box className={classes.root}
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        readOnly
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        // onChangeActive={(event, newHover) => {
        //   setHover(newHover);
        // }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {/* {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )} */}
    </Box>
  );
}