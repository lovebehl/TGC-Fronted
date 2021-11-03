import React,{useState,useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLogin from '../../utils/islogin';
import Loading from '@material-ui/core/LinearProgress';
import { useSelector } from "react-redux";
import showLog from '../../utils/logger';

const PrivateRoute = ({component: Component, ...rest}) => {
 const aT = useSelector(state => state.getIn(['user', 'accessToken']))
 const udata = useSelector(state => state.getIn(['user', 'userData']))
 const [logState, setlogState] = useState("FALSE")
 
useEffect(async() => {
    var newLogState = await isLogin(aT,udata)
    showLog("log State",newLogState)
    if(newLogState){
        setlogState("TRUE")
    }
    else{
            window.location.href = '/login';
    }
    return () => {
        setlogState("FALSE")
    }
}, [])

    return (
        <Route {...rest} render={props => (
            logState === "FALSE" ?
            <Loading
            variant="indeterminate"
            classes={{
            }}
          />:
                <Component {...props} />
        )} />
    );
};

export default PrivateRoute;