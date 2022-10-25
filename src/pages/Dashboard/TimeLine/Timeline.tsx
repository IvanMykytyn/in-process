import {FC} from 'react'

// styles
import cn from 'classnames'
import css from './timeline.module.scss'

const Timeline: FC = () => {
    return (
        <div className={css.timeline}>
            <h3 className={css.timeline__title}>
                Timeline
            </h3>
            <ul className={css.timeline__items}>
                <li className={css.timeline__item}>
                    <details className={css.timeline__details}>
                        <summary className={css.timeline__summary}>Event 1</summary>
                        <div>
                            <p className={css.timeline__description}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dicta!
                            </p>
                        </div>
                    </details>
                </li>
                <li className={css.timeline__item}>
                    <details className={css.timeline__details}>
                        <summary className={css.timeline__summary}>Event 2</summary>
                        <div>
                            <p className={css.timeline__description}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dicta!
                            </p>
                        </div>
                    </details>
                </li>
                <li className={css.timeline__item}>
                    <details className={css.timeline__details}>
                        <summary className={css.timeline__summary}>Event 3</summary>
                        <div>
                            <p className={css.timeline__description}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dicta!
                            </p>
                        </div>
                    </details>
                </li>
                <li className={css.timeline__item}>
                    <details className={css.timeline__details}>
                        <summary className={css.timeline__summary}>Event 4</summary>
                        <div>
                            <p className={css.timeline__description}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dicta!
                            </p>
                        </div>
                    </details>
                </li>
                <li className={css.timeline__item}>
                    <details className={css.timeline__details}>
                        <summary className={css.timeline__summary}>Event 5</summary>
                        <div>
                            <p className={css.timeline__description}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dicta!
                            </p>
                        </div>
                    </details>
                </li>
                <li className={css.timeline__item}>
                    <details className={css.timeline__details}>
                        <summary className={css.timeline__summary}>Event 6</summary>
                        <div>
                            <p className={css.timeline__description}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Accusantium aut beatae
                                culpa cum, dolores est et ex excepturi ipsa
                                molestias nam necessitatibus quos sapiente
                                sequi tempore temporibus voluptate? Accusamus
                                beatae consequatur error eum harum maxime
                                natus nulla sapiente similique veniam? A,
                                alias at cupiditate doloremque doloribus et
                                eveniet odio vero? Adipisci animi cumque dicta
                                dignissimos dolores doloribus ea, eius enim
                                est illum maxime numquam officiis quaerat quas
                                quasi quibusdam quo repudiandae! At corporis
                                dolorum libero vel. Aspernatur assumenda ea
                                libero saepe similique! Asperiores autem
                                beatae commodi consequatur doloribus ea
                                earum eius facilis fuga ipsam odio rerum
                                sequi temporibus, vero, voluptate?
                            </p>
                        </div>
                    </details>
                </li>
                <li className={css.timeline__item}>
                    <details className={css.timeline__details}>
                        <summary className={css.timeline__summary}>Event 7</summary>
                        <div>
                            <p className={css.timeline__description}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dicta!
                            </p>
                        </div>
                    </details>
                </li>
            </ul>
        </div>
    )
}

export {Timeline}
