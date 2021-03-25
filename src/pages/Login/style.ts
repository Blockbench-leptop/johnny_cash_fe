import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            minWidth: '368px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '32px'
        },
        info: {
            textAlign: 'center',
            color: 'red'
        },
        box: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1
        },
        image: {
            width: '80px',
            margin: '20px auto'
        },
        loginButton: {
            margin: '0 auto !important'
        },
        loginField: {
            marginBottom: ' 32px !important'
        }
    }),
);
