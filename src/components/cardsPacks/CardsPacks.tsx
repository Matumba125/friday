import React, { MouseEvent, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardPacksType } from '../../api/cardsPackAPI';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import { Paginator } from '../../common/pagination/Paginator';
import { SearchBar } from '../../common/searchBar/SearchBar';
import { TablePacks } from '../../common/tablePacks/TablePacks';
import { getCardsPacksTC, changePageCardTC } from '../../store/cardsPacksReducer';
import { AppStateType } from '../../store/store';

const CardsPacks = () => {
  const packs = useSelector<AppStateType, CardPacksType[]>(
    (store) => store.cardsPack.cards
  );
  const cardPacksTotalCount = useSelector<AppStateType, number>(
    (store) => store.cardsPack.totalCount
  );
  const perCount = useSelector<AppStateType, number>(
    (store) => store.cardsPack.perPage
  );
  const currentPage = useSelector<AppStateType, number>(
    (store) => store.cardsPack.currentPage
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardsPacksTC());
  }, [dispatch]);

  const onGetPacksClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(getCardsPacksTC());
  };

  const onPageChange = (page: number) => {
    dispatch(changePageCardTC(page));
  };

  return (
    <div>
      <SearchBar />
      <ButtonFormColor text={'Get Packs'} onClick={onGetPacksClickHandler} />
      <TablePacks packs={packs} />
      <Paginator
        totalCount={cardPacksTotalCount}
        pageCount={perCount}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default CardsPacks;
