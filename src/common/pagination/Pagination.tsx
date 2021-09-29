import * as React from 'react';
import Pagination from '@material-ui/core/Pagination';
import Stack from '@material-ui/core/Stack';
import { makeStyles } from '@material-ui/styles';

const useStyles: any = makeStyles({
  root: {
    '& button.Mui-selected': {
      backgroundColor: '#21268F',
      color: '#FFFFFF',
    },

    '& button': {
      fontSize: '.75rem'
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

