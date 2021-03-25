import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            padding: theme.spacing(2),
            color: theme.palette.text.secondary,
            '& img': {
                maxWidth: '40px',
                paddingRight: '15px'
            },
            '& span': {
                fontSize: '20px'
            },
        },
    }),
);