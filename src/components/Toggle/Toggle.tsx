import React, { FC, useState } from 'react';

import './toggle.styles.scss';

interface ToggleProps {
  checked: boolean;
  handleToggle: () => void;
  label?: string;
}

const Toggle: FC<ToggleProps> = ({ checked, handleToggle, label, ...arg }) => {
  return (
    <>
      <input
        {...arg}
        className={'react-switch-checkbox'}
        type={'checkbox'}
        id={`react-switch-new`}
        checked={checked}
        onChange={handleToggle}
      />
      <label className={'react-switch-label'} htmlFor={`react-switch-new`}>
        <span className={'react-switch-button'} />
      </label>
    </>
  );
};

export { Toggle };
