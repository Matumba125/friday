import { Link } from 'react-router-dom';
import s from './LinkPackName.module.css';
import ListTitle from '../../common/listTitle/ListTitle';

const LinkPackName = () => {

    return (
        <>
            <Link className={s.linkCardList} to={''}>
                <ListTitle text="Pack Name" />
            </Link>
        </>
    )
}

export default LinkPackName