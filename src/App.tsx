import React, {useEffect} from "react";
import {Route, Switch, useHistory} from 'react-router-dom'
import {Container} from "@material-ui/core";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import CSV from "./pages/CSV/CSV";
import Threshold from "./pages/Threshold/Threshold";
import {useSelector} from "react-redux";
import {selectUserStatus} from "./store/ducks/user/selectors";
import {LoadingStatus} from "./store/types";
import Preloader from "./components/Preloader/Preloader";
import {WinStorage} from "./services/AuthSrorage";


const App: React.FC = () => {

    const history = useHistory()
    const loadingStatus = useSelector(selectUserStatus)

    const isReady = loadingStatus === LoadingStatus.LOADING
    const token = WinStorage.isAuthenticated()

    useEffect(() => {
        token ? history.push('/dashboard') : history.push('/signin')
    }, [token, history]);

    if (isReady) {
        return <Preloader/>
    }

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Switch>
                    <Route exact path="/signin" component={Login}/>
                    <Layout>
                        <Route exact path="/dashboard" component={Dashboard}/>
                        <Route exact path="/csv" component={CSV}/>
                        <Route exact path="/threshold" component={Threshold}/>
                    </Layout>
                </Switch>
            </Container>
        </React.Fragment>
    );
}

export default App;
