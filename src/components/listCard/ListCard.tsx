import React from 'react-router-dom';
import s from './ListCard.module.css';
import CardListContainer from '../../common/cardListContainer/CardListContainer';
import LinkPackName from '../../common/linkPackName/LinkPackName'
import InputSearch from '../../common/inputSearch/InputSearch';
import TableHead from '../../common/listCardTableHead/ListCardTableHead';
import ListCardTableLeine from '../../common/listCardTableLeine/ListCardTableLeine'
import ButtonTabDelete from '../../common/buttonTabDelete/ButtonTabDelete';
import ButtonTabEdit from '../../common/buttonTabEdit/ButtonTabEdit';
import { PaginationRounded } from '../../common/pagination/Pagination';
import Select from '../../common/select/Select';

const ListCard = () => {

    return (
        <>
            <CardListContainer>
                <>
                    <div className={s.packListWrap}>
                        <LinkPackName />
                        <div className={s.inputWrap}>
                            <InputSearch
                                placeholder={'Search...'}
                            />
                        </div>

                        {/* ! tabble */}
                        <div className={s.tabWrap}>
                            <table className={s.table}>

                                <TableHead />

                                <tbody className={s.tableBody}>

                                    <ListCardTableLeine />

                                </tbody>
                            </table>

                        </div>

                        <div className={s.tableNavigation}>

                            <PaginationRounded />

                            <div className={s.select}>
                                <span className={s.selectText}>
                                    Show
                                </span>

                                <Select />

                                <span className={s.selectText}>
                                    Cards per Page
                                </span>
                            </div>

                        </div>

                    </div>
                </>
            </CardListContainer>
        </>

    )
}

export default ListCard