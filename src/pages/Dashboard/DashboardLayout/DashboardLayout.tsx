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
                                <Link to={'/dashboard/rooms'}>
                                    <button className={cn(css.bookmarks__btn)}
                                            type={'button'}>
                                        Rooms
                                    </button>
                                </Link>
                            </li>
                            <li className={cn(css.bookmarks__item)}>
                                <Link to={'/dashboard/calendar'}>
                                    <button className={cn(css.bookmarks__btn)}
                                            type={'button'}>
                                        Calendar
                                    </button>
                                </Link>
                            </li>
                            {/*<li className={cn(css.bookmarks__item)}>*/}
                            {/*    <Link to={'/dashboard/timeline'}>*/}
                            {/*        <button className={cn(css.bookmarks__btn)}*/}
                            {/*                type={'button'}>*/}
                            {/*            Timeline*/}
                            {/*        </button>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                    <SideBar/>
                </div>
            </div>
        </main>
    )
};

export {DashboardLayout};
