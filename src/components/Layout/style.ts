import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        home: {
            flexGrow: 1,
            margin: theme.spacing(2)
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        childrenWrap: {
            height: '65vh'
        }
    }),
);


