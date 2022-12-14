import {makeStyles} from "@material-ui/styles";
import {useAppSelector} from "./redux.hook";

export function useStyle() {
    const {mode} = useAppSelector(state => state.themes);

    const useStyles: any = makeStyles({
        select: {
            "& ul": {
                backgroundColor: mode === "light" ? "rgba(197,197,197,0.7)" : "#3E3E3E",
                borderRadius: 15,
                // backdropFilter: "blur(20px)",
            },
            "& svg": {
                color: mode === "light" ? "rgba(197,197,197,0.7)" : "#3E3E3E"},
        },
    });
    return {
        useStyles
    };
};

