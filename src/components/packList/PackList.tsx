import { Link } from 'react-router-dom';
import s from './PackList.module.css';
import CardListContainer from '../../common/cardListContainer/CardListContainer';
import LinkPackName from '../../common/linkPackName/LinkPackName'
import InputSearch from '../../common/inputSearch/InputSearch';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor'

const PackList = () => {

    return (
        <>
            <CardListContainer>
                <>
                    <div className={s.packListWrap}>

                      <LinkPackName/>
                      
                        <div className={s.searchBox}>
                            <div className={s.inputWrap}>
                                <InputSearch
                                    placeholder={'Search...'} />
                            </div>
                            <div className={s.buttonWrap}>
                                <ButtonFormColor
                                    text={'Add new card'}
                                />
                            </div>

                        </div>
                        <span className={s.cardListText}>This pack is empty. Click add new card to fill this pack</span>
                    </div>
                </>

            </CardListContainer>
        </>
    )
}

export default PackList