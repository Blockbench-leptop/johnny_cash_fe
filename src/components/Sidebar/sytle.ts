import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sidebar: {
            padding: theme.spacing(2),
            color: theme.palette.text.secondary,
            height: '60vh',
            boxSizing: 'border-box',
            '& a': {
                lineHeight: "20px",
                fontSize: "14px",
                textDecoration:'none',
                textTransform: "none",
                color: "inherit",
                "&:hover,&:focus": {
                    fontWeight: 500,
                    color: "inherit",
                    background: "transparent",
                    transitionDelay: 'all .4s ease',
                    '-webkit-transition-delay': 'all .4s ease'
                }
            }
        },
        linkWrap: {
            display: 'flex'
        },
        icon: {
            paddingTop: '4px',
            marginRight: "10px",
            fontSize: '13px'
        },
        button: {
            margin: theme.spacing(1),
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5)
        }

    }),
);