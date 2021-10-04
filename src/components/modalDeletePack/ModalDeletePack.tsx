import React from "react";
import s from './ModalDeletePack.module.css';
import ModalBox from '../../common/modalBox/ModalBox';
import ModalTitle from '../../common/modalTitle/ModalTitle';
import ButtonCloseModal from '../../common/buttonCloseModal/ButtonCloseModal';
import ButtonReturnCancel from '../../common/buttonReturnCancel/ButtonReturnCancel';

const ModalDeletePack = () => {

    return (
        <ModalBox>
            <>
            <div className={s.headerModal}>
                <ModalTitle
                    text={'Delete Pack'}
                />
                <ButtonCloseModal />
            </div>

            <p className={s.modalText}> Do you really want to remove <span className={s.modalTextBold}>Pack Name - Name Pack? </span>
                All cards will be excluded from this course.
            </p>

            <div className={s.buttonsBox}>
                <ButtonReturnCancel />
                <button className={s.buttonDelete} type='button'>Delete</button>
            </div>
            </>
        </ModalBox>

    )
}

export default ModalDeletePack