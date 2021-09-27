import React from "react";
import s from './CardListMain.module.css';
import ListTitle from '../listTitle/ListTitle';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import InputSearch from '../../common/inputSearch/InputSearch'

const CardListMain = () => {

    return (
        <>
            <main className={s.container}>

                <div className={s.titleWrap}>
                    <ListTitle
                        text={"Packs list"} />
                </div>


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
            </main>
        </>
    )
}

export default CardListMain;


