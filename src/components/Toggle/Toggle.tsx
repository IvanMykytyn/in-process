import React, {FC, useState} from 'react';

import "./toggle.styles.scss";

interface ToggleProps {
    toggled?: boolean;
    checked?: boolean;
    label?: string;
}

const Toggle: FC<ToggleProps> = ({checked,label,...arg}) => {
    const [toggled, setToggled] = useState(false);

    return (
        <>
            <input {...arg}
                   className={'react-switch-checkbox'}
                   type={'checkbox'}
                   id={`react-switch-new`}
                   checked={checked}
                   onChange={(event => setToggled(event.target.checked))}
            />
            <label className={'react-switch-label'}
                   htmlFor={`react-switch-new`}
            >
                <span className={'react-switch-button'}/>
            </label>
        </>
    );
};

export {Toggle};