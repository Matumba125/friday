import React from "react";
import s from './CardListMain.module.css';
import ListTitle from '../listTitle/ListTitle';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import InputSearch from '../../common/inputSearch/InputSearch';
import TableHead from '../tableHead/TableHead';
import TableLeine from '../tableLeine/TableLeine';
import {PaginationRounded} from '../pagination/Pagination';
import Select from '../select/Select';
import { useSelector } from "react-redux";
import { getCardPacks } from "../../store/selectots";

const CardListMain = () => {

    const cardPacks = useSelector(getCardPacks)


    const tBody = cardPacks.map((m,index) => <TableLeine cardsCount={m.cardsCount}
        created={m.created}
        userName={m.user_name}
        packName={m.name}
        key={index}
        _id={m._id}
        user_id={m.user_id}
    />)

    return (
        <>
            <main className={s.container}>

                <div className={s.titleWrap}>
                    <ListTitle
                        text={"Packs list"} />
                </div>

                <div className={s.mainBlock}>

                    <div className={s.controlBlock}>

                        <div className={s.inputsContainer}>
                            <div className={s.inputWrap}>
                                <InputSearch
                                    placeholder={"Search by pack name"} />
                            </div>

                            <InputSearch
                                placeholder={"Search by author"}
                            />
                        </div>

                        <div className={s.buttonContainer}>
                            <ButtonFormColor
                                text={'Add new pack'} />
                        </div>

                    </div>

                    {/* ! tabble */}
                    <div className={s.tabWrap}>
                        <table className={s.table}>
                            
                            <TableHead />

                            <tbody className={s.tableBody}>
                                <TableLeine cardsCount={5} user_id={'1'} _id={'1'} key={2} userName={'none'} packName={'hey'} created={new Date()} />
                                {tBody}
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

            </main>
        </>
    )
}

export default CardListMain;


