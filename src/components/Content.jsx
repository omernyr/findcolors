import { useContext } from 'react';
import Search from "./Search"
import Brand from './Brand';
import MainContext from '../MainContext';
import LazyLoad from 'react-lazyload';
import Download from './Download';


const Content = () => {

    const { brands, search } = useContext(MainContext);

    return (
        <main className='content'>
            <Download />
            <header className="header">
                <Search />
            </header>
            <div className="brands">
                {
                    brands.map(brand =>
                        <LazyLoad once={true} overflow={true} placeholder="Yükleniyor..."  >
                            <Brand brand={brand} />
                        </LazyLoad>
                    )}
            </div>
        </main>
    )
}

export default Content