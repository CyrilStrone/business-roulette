import { Link } from 'react-router-dom'
import '../styles/SearchPastItem.css'
import { ApiImage } from '../../../ui/functions/axiosInstance'

interface ISearchPastItem {
    firstName: string
    lastName: string
    aboutShort: string
    currentPosition: string
    avatarPath: string
    login: string
}

export const SearchPastItem = (params: ISearchPastItem) => {
    return (
        <Link to={`/user/login/${params.login}`} className='SearchPastItem Search__User__Card Block__Active' >
            <img src={ApiImage + params.avatarPath} alt="Avatar" className='SearchPastItem__Avatar' />
            <div className='SearchPastItem__Bar'>
                <div className='SearchPastItem__Bar__Name'>
                    {params.firstName + " " + params.lastName}
                </div>
                <div className='SearchPastItem__Bar__Position'>
                    {params.currentPosition}
                </div>
                <div className='SearchPastItem__Bar__Short'>
                    {params.aboutShort}
                </div>
            </div>
        </Link>
    );
};
