import React, {useEffect} from "react"
import {Controller, useForm} from "react-hook-form"
import * as yup from "yup"

import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import TextField from "@material-ui/core/TextField"
import {Button, Paper} from "@material-ui/core"
import {yupResolver} from '@hookform/resolvers/yup'
import Box from "@material-ui/core/Box"

import logo from '../../assets/img/fox.svg'
import {useStyles} from "./style"
import {useDispatch, useSelector} from "react-redux";
import {fetchSignIn} from "../../store/ducks/user/actionCreators";
import { useState } from "react"
import {selectUserStatus} from "../../store/ducks/user/selectors";
import {LoadingStatus} from "../../store/types";



export interface LoginFormProps {
    email: string
    password: string
}

const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Invalid mail format').required('Please enter your mail!'),
    password: yup.string().min(6, '​Minimum password length 6 characters').required(),
});


const Login: React.FC = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const loadingStatus = useSelector(selectUserStatus);
    const [message, setMessage] = useState<'error' | 'success'>()
    const [isDisable, setIsDisable] = useState<boolean>(false)

    const {control, handleSubmit, errors} = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
    })

    const onSubmit = (data: LoginFormProps) => {
        dispatch(fetchSignIn(data))
        setIsDisable(true)
    }

    useEffect(() => {
        if (loadingStatus === LoadingStatus.ERROR) {
            setMessage('error')
        }
    }, [loadingStatus]);
    return (
        <React.Fragment>


            <Box className={classes.box}>
                <Paper className={classes.paper} elevation={3}>

                    {message === 'error' && <span className={classes.info}>Wrong password or email!</span>}
                    <img src={logo} className={classes.image} alt="logo"/>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>

                                <Controller as={TextField}
                                            control={control}
                                            name="email"
                                            className={classes.loginField}
                                            id="email"
                                            label="E-Mail"
                                            InputLabelProps={{shrink: true}}
                                            variant="outlined"
                                            type="email"
                                            defaultValue=""
                                            helperText={errors.email?.message}
                                            error={!!errors.email} fullWidth autoFocus/>

                                <Controller as={TextField}
                                            className={classes.loginField}
                                            control={control}
                                            name="password"
                                            id="password"
                                            label="Password"
                                            InputLabelProps={{shrink: true}}
                                            variant="outlined"
                                            type="password"
                                            defaultValue=""
                                            helperText={errors.password?.message}
                                            error={!!errors.password} fullWidth/>

                                <Button type="submit"
                                        color="primary"
                                        variant="contained"
                                        disabled={isDisable}
                                        className={classes.loginButton}>
                                    Login
                                </Button>

                            </FormGroup>
                        </FormControl>
                    </form>
                </Paper>
            </Box>
        </React.Fragment>
    )
}
export default Login
