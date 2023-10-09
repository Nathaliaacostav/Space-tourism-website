import { Link } from 'react-router-dom';
import '../../sass/NavBar/NavBar.scss';

const NavBar = () => {
    const items = [
        ['00', 'home'],
        ['01','destination'],
        ['02', 'crew'],
        ['03', 'technology'],
    ]
  return (
    <div className='navDestock'>
        <nav >
            <ul className='navDestock__navegacion'>
                {items.map((item,index)=>{
                    return <li key={index} className='navDestock__navegacion__link'><Link to={item[1]}>{item[0]} {item[1]}</Link></li>
                })
                }    
            </ul>
        </nav>
    </div>
  )
}

export default NavBar