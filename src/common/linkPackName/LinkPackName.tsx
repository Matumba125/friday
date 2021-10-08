import { Link } from 'react-router-dom';
import s from './LinkPackName.module.css';
import ListTitle from '../../common/listTitle/ListTitle';
import { PATH } from '../../components/routing/Routing';

const LinkPackName = () => {

    return (
        <>
            <Link className={s.linkCardList} to={PATH.CARDS_PACKS}>
                <ListTitle text="Pack Name" />
            </Link>
        </>
    )
}

export default LinkPackName