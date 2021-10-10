import { Link } from 'react-router-dom';
import s from './LinkPackName.module.css';
import ListTitle from '../../common/listTitle/ListTitle';
import { PATH } from '../../components/routing/Routing';

type LinkToPacksType = {
    packName: string
}

const LinkToPacks: React.FC<LinkToPacksType> = props => {

    return (
        <>
            <Link className={s.linkCardList} to={PATH.PACKS}>
                <ListTitle text={props.packName} />
            </Link>
        </>
    )
}

export default LinkToPacks