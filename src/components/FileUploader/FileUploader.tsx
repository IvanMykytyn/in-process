import { FC } from "react";

import css from './FileUploader.module.scss';

interface Props {
    multiple?: boolean;
    variant?: boolean;
    loading?: boolean;
}

const FileUploader: FC<Props> = ({multiple, variant, loading}) => {
    return (
        <form>
            <div className={css.uploader}>
                <input
                    className={variant ? `${css.active}` : `${css.uploader__item}`}
                    type="file"
                    name={"file"}
                    id={"file"}
                    multiple={multiple || false}
                />
                {
                    loading ?
                       (<i className={loading ? `${css.loading}` : ''}></i>)
                        :
                       (<svg className={css.uploader__img}
                             fill="#656565"
                             width={25}
                             height={25}
                             viewBox="0 0 384 512">
                            <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64
                     64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256
                      0V128H384L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 9.4-24.6 9.4-33.9
                       0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z"/>
                        </svg>)
                }
            </div>
        </form>
    );
};

export {FileUploader};