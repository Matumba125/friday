import {Link} from 'react-router-dom';
import s from './LinkPackName.module.css';
import {PATH} from '../../components/routing/Routing';
import ListTitle from '../listTititle/ListTitile';

type LinkToPacksType = {
    packName: string
}

const LinkToPacks: React.FC<LinkToPacksType> = props => {

    return (
        <Link className={s.linkCardList} to={PATH.PACKS}>
            <ListTitle text={props.packName}/>
        </Link>
    )
}

export default LinkToPacks