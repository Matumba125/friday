import React from "react";
import s from './ModalAddPack.module.css';
import ModalBox from '../../common/modalBox/ModalBox';
import ModalTitle from '../../common/modalTitle/ModalTitle';
import InputForm from '../../common/inputForm/InputForm';
import ButtonCloseModal from '../../common/buttonCloseModal/ButtonCloseModal';
import ButtonReturnCancel from '../../common/buttonReturnCancel/ButtonReturnCancel';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';


const ModalAddPack = () => {

    return (
        <ModalBox>
            <>
                <div className={s.headerModal}>
                    <ModalTitle
                        text={'Add new pack'}
                    />
                    <ButtonCloseModal />
                </div>

                <div className={s.inputBox}>
                    <InputForm
                        text={'Name pack'}
                        inputType={'text'}
                        title={'Please enter package name'}
                        placeholder={'Name Pack'}
                    />
                </div>

                <div className={s.buttonsBox}>
                    <ButtonReturnCancel />
                    <div className={s.buttonContainer}>
                        <ButtonFormColor
                            text={'Save'}
                        />
                    </div>

                </div>
            </>
        </ModalBox>


    )
}

export default ModalAddPack