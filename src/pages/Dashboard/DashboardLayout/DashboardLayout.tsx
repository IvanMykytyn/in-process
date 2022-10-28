import {FC} from 'react'

// styles
import cn from 'classnames'
import css from './dashboard-layout.module.scss'

// router-dom
import {Link, Outlet} from 'react-router-dom'

// components
import {SideBar} from 'components'

const DashboardLayout: FC = () => {
    return (
        <main>
            <div className={css.container}>
                <div className={cn(css.dashboard)}>
                    <div className={cn(css.inner)}>
                        <div className={cn(css['dashboard-page'])}>
                            <Outlet/>
                        </div>
                        <ul className={cn(css.bookmarks)}>
                            <li className={cn(css.bookmarks__item)}>
                                <button className={cn(css.bookmarks__btn)}
                                        type={'button'}>
                                    <Link to={'/dashboard/calendar'}>
                                        Calendar
                                    </Link>
                                </button>
                            </li>
                            <li className={cn(css.bookmarks__item)}>
                                <button className={cn(css.bookmarks__btn)}
                                        type={'button'}>
                                    <Link to={'/dashboard/timeline'}>
                                        Timeline
                                    </Link>
                                </button>
                            </li>
                            <li className={cn(css.bookmarks__item)}>
                                <button className={cn(css.bookmarks__btn)}
                                        type={'button'}>
                                    <Link to={'/dashboard/map'}>
                                        Map
                                    </Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <SideBar/>
                </div>
            </div>
        </main>
    )
};

export {DashboardLayout};
