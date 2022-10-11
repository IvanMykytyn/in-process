import {FC} from "react";

import css from './FileUploader.module.scss';

import fileUploader from '../../../assets/images/icons/file-up.svg';

interface Props {
    multiple?: boolean;
}

const FileUploader: FC<Props> = ({multiple}) => {
    return (
        <form method={"post"} action={'#'} id={"#"}>
            <div className={css.uploader}>
                <input
                    className={css.uploader__item}
                    type="file"
                    name={"file"}
                    id={"file"}
                    multiple={multiple || false}
                />
                <img src="" alt=""/>
            </div>
        </form>
    );
};

export {FileUploader};