import * as React from 'react';
import {ChangeEvent} from 'react';
import Pagination from '@material-ui/core/Pagination';
import Stack from '@material-ui/core/Stack';
import {makeStyles} from '@material-ui/styles';
import {useDispatch, useSelector} from 'react-redux';
import {setPageAC} from '../../store/cardsPacksReducer';
import {getTotalPagesCount} from '../../store/selectots';

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



export const PaginationRounded = () => {

  const dispatch = useDispatch()

  const pagesCount = useSelector(getTotalPagesCount)
  
  const onPaginationChangeHandler = (e: ChangeEvent<unknown> ,page: number) =>{
    dispatch(setPageAC({page: page}))
  }

  const classes = useStyles();
  return (
    <Stack spacing={2}>
      <Pagination count={pagesCount} onChange={onPaginationChangeHandler} shape="rounded" className={classes.root} />
    </Stack>
  );
}

