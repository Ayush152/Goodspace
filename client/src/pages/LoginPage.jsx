import React, { useEffect, useRef } from 'react';
import '@passageidentity/passage-elements/passage-auth';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';


const LoginPage = ({setIsLoggedIn}) => {
    const ref = useRef();
    const [flag, setFlag] = React.useState(false);

    const beforeAuth = (email) => {
        console.log(email);
        return true;
    }


    useEffect(() => {
        const { current } = ref;
        current.beforeAuth = beforeAuth;
        return () => { }
    }, []);

    useEffect(() => {
        // let cancelReq = false;
        // new PassageUser().userInfo().then((user) => {
        //     console.log(user);
        //     if (!cancelReq) {
        //         setIsLoggedIn(true);
        //         console.log("setIsLoggedIn");
        //         setFlag(true);
        //     }
        // }); 
    }, []);
    // useEffect(() => {
    //     new PassageUser().getAuthToken().then((token) => {
    //         console.log(token);
    //     });
    // }, flag);


    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgb(0,0,0)',
        background: 'radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(69,138,246,1) 100%)',
        height: '100vh',
    };


    return (
        <div style={containerStyle}>
            <passage-auth ref={ref} app-id="LbDxLdh4QJ4oBbjwgUrOujeG"></passage-auth>
        </div>
    );
};


export default LoginPage;


