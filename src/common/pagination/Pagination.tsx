import * as React from 'react';
import Pagination from '@material-ui/core/Pagination';
import Stack from '@material-ui/core/Stack';
import { makeStyles } from '@material-ui/styles';
import s from './Pagination.module.css';

const useStyles: any = makeStyles({
  root: {
    '& button.Mui-selected': {
      backgroundColor: '#21268F',
      color: '#FFFFFF',
      Width: '18.25rem',
         },

    '& button': {
      fontSize: '.75rem',
      fontFamily: 'Lato',
    }

  },
  ul: {},
  outlined: {},
  text: {}
});


export default function PaginationRounded() {
  const classes = useStyles();
  return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" className={classes.root} />
    </Stack>
  );
}

