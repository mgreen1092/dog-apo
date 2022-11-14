import {Link} from 'react'
import RandomDogs from './RandomDogs'

function Header (props) {
    return (
        <div>
            <span onClick={() => props.setCurrentView('Random Dogs')}>Dog Images</span>
            <span onClick={() => props.setCurrentView('Dog Breeds')}>Dog Breeds</span>
            {/* <Link to=''></Link>
            <Header>My Dog Website</Header> */}
        </div>
    )
}

export default Header