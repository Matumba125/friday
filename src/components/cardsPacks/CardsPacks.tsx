import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import { SearchBar } from '../../common/searchBar/SearchBar';
import { getCardsPacksTC } from '../../store/cardsPacksReducer';
import { AppStateType } from '../../store/store';

const CardsPacks = () => {
  const dispatch = useDispatch();
  const cardsPack = useSelector<AppStateType>((store) => store.cardsPack);

  const onGetPacksClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(getCardsPacksTC());
  };

  return (
    <div>
      <SearchBar />
      <ButtonFormColor text={'Get Packs'} onClick={onGetPacksClickHandler} />
      {/* <ul>{cardsPack.map((pac, index) => {
          return <li key={index}>{pac}</li>
      })}</ul> */}
      {console.log(cardsPack)}
    </div>
  );
};

export default CardsPacks;
