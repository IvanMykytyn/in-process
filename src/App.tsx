
import * as React from 'react';
import cn from 'classnames';

import css from './App.module.scss';

import file from './assets/images/icons/file-up.svg';

import {Input, Checkbox, MainCalendar, Button, FileUploader, ButtonLoading, Toggle, Badge,Modal} from './components';

function App() {
    return (
        <div className={css.container}>
            <ul className={css.wrapper}>
                <li className={css.wrapper__item}>
                    <h2>Calendar</h2>
                    <MainCalendar/>
                </li>
                <li className={css.wrapper__item}>
                    <h2>Inputs</h2>
                    <h3>Password</h3>
                    <Input type={'password'}>123</Input>
                    <h3>Error</h3>
                    <Input error={true}/>
                </li>
                <li className={css.wrapper__item}>
                    <h2>Button</h2>
                    <div style={{display: 'flex', gridGap: '15px', justifyContent: 'center'}}>
                        <Button>Button</Button>
                        <ButtonLoading>Loading</ButtonLoading>
                    </div>
                    <h2>File Uploader</h2>
                    <FileUploader/>
                    <h2>CheckBox and Toggle</h2>
                    <div style={{display: 'flex', gridGap: '15px', justifyContent: 'center'}}>
                        <div className={css.wrapper__item} style={{flexDirection: 'row'}}>
                            <Checkbox circled={true}/>
                            <Checkbox/>
                        </div>
                        <div className={css.wrapper__item} style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Toggle/>
                        </div>
                    </div>
                </li>
                <li className={css.wrapper__item}>
                    <h2>Badges</h2>
                    <div style={{display: 'flex', gridGap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
                        <Badge label={'InProcess'}/>
                        <Badge label={'HtoYa?'}/>
                        <Badge label={'Hello World!'}/>
                        <Badge label={'Go v Minecraft'}/>
                    </div>
                </li>
                <li className={css.wrapper__item}>
                    <h2>Modal</h2>
                    <div style={{display: 'flex', gridGap: '15px', justifyContent: 'center',flexWrap: 'wrap'}}>
                      <Modal>{<div><img src={'https://miro.medium.com/max/800/0*rrLH9s9KUL994QBv'}/></div>}</Modal>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default App;
