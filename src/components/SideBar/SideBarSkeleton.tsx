import {FC} from "react";
import ContentLoader from "react-content-loader";
import useLocalStorage from "use-local-storage";
import css from '../BookedRoom/BookedRoom.module.scss';
import {useAppSelector} from "../../hooks";
import {selectTheme} from "../../store";

interface Props {
    amount: number;
}

const SideBarSkeleton: FC<Props> = ({amount}) => {
    const {newTheme} = useAppSelector(selectTheme);

    return (
        <>
            {
                [...Array(amount)].map((_, index) =>
                    <div className={css.booked__item} key={index}>
                        <ContentLoader
                            speed={2}
                            width={279}
                            height={64}
                            interval={0.5}
                            viewBox="0 0 279 64"
                            backgroundColor={newTheme === "light" ? "rgba(197,197,197,0.7)" : "#3E3E3E"}
                            foregroundColor={newTheme === "light" ? "rgba(215,215,215,0.7)" : "rgba(109,109,109,0.5)"}
                        >
                            <rect x="0" y="0" rx="5" ry="5" width="140" height="10"/>
                            <rect x="0" y="40" rx="5" ry="5" width="115" height="10"/>
                            <rect x="200" y="40" rx="5" ry="5" width="70" height="10"/>
                        </ContentLoader>
                    </div>
                )
            }
        </>
    );
};

export {SideBarSkeleton};