import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            marginLeft: '40px',
            padding: '0 25px',
            textAlign: 'center',
        },
    }),
);
