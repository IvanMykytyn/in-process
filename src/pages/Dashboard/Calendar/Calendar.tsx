import {FC} from 'react';

// styles
import cn from 'classnames';
import css from './calendar.module.scss';

import { MainCalendar } from 'components';

const Calendar: FC = () => {
    return (
        <div>
            <MainCalendar/>
        </div>
    );
};

export {Calendar};
