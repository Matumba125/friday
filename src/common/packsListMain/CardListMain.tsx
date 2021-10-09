import React, {useState} from "react";
import s from './CardListMain.module.css';
import ListTitle from '../listTitle/ListTitle';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import {InputSearch} from '../../common/inputSearch/InputSearch';
import TableHead from '../tableHead/TableHead';
import TableLeine from '../tableLeine/TableLeine';
import {PaginationRounded} from '../pagination/Pagination';
import Select from '../select/Select';
import {useDispatch, useSelector} from "react-redux";
import {getCardPacks, getPacksPage, getTotalPagesCount} from "../../store/selectots";
import {setPackNameAC, setPageAC, setPageCountAC} from "../../store/cardsPacksReducer";
import ModalAddPack from "../../components/PackModals/modalAddPack/ModalAddPack";

const PacksListMain = () => {

    const cardPacks = useSelector(getCardPacks)

    const dispatch = useDispatch()

    const [packName, setPackName] = useState<string>('')
    const [addPack, setAddPack] = useState<boolean>(false)


    const page = useSelector(getPacksPage)
    const pagesCount = useSelector(getTotalPagesCount)

    const onPaginationChangeHandler = (page: number) =>{
        dispatch(setPageAC({page: page}))
    }

    const onSelectChangeHandler=(pageCount: number)=>{
        dispatch(setPageCountAC({pageCount}))
    }

    const onPackNameChangeHandler = (newPackName: string) => {
        setPackName(newPackName)
        dispatch(setPackNameAC({packName: newPackName}))
    }

    const tBody = cardPacks.map((m, index) => <TableLeine cardsCount={m.cardsCount}
                                                          updated={m.updated}
                                                          userName={m.user_name}
                                                          packName={m.name}
                                                          key={index}
                                                          _id={m._id}
                                                          user_id={m.user_id}
    />)

    const onAddPackClickHandler = () => {
        setAddPack(true)
    }

    return (
        <>
            <ModalAddPack open={addPack} setClose={setAddPack}/>
            <main className={s.container}>

                <div className={s.titleWrap}>
                    <ListTitle
                        text={"Packs list"}/>
                </div>

                <div className={s.mainBlock}>

                    <div className={s.controlBlock}>

                        <div className={s.inputsContainer}>
                            <div className={s.inputWrap}>
                                <InputSearch
                                    placeholder={"Search by pack name"}
                                    value={packName}
                                    onChangeText={onPackNameChangeHandler}
                                />
                            </div>
                        </div>

                        <div className={s.buttonContainer}>
                            <ButtonFormColor
                                text={'Add new pack'}
                                onClick={onAddPackClickHandler}
                            />
                        </div>

                    </div>

                    {/* ! tabble */}
                    <div className={s.tabWrap}>
                        <table className={s.table}>

                            <TableHead/>

                            <tbody className={s.tableBody}>
                            {/*<TableLeine packName={'new'} userName={'new'} user_id={'1'} _id={'1'} key={1} created={new Date()} cardsCount={10}/>*/}
                            {tBody}
                            </tbody>
                        </table>

                    </div>

                    <div className={s.tableNavigation}>

                        <PaginationRounded totalPages={pagesCount} setNewPage={onPaginationChangeHandler} currentPage={page}/>

                        <div className={s.select}>
                            <span className={s.selectText}>
                                Show
                            </span>

                            <Select changeHandler={onSelectChangeHandler}/>

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

export default PacksListMain;


