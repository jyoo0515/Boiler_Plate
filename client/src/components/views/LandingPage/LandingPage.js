import React from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';

function LandingPage(props) {

    const onClickHandler = () => {
        axios.get('/api/users/logout')
            .then(response => {
                if(response.data.success) {
                    props.history.push('/login');
                } else {
                    alert("Failed to logout");
                }
            });
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',
            alignItems: 'center', width: '100%', height: '100vh'
        }}>
            <h2>Landing Page</h2>
            {/* <button onClick={onClickHandler}>Logout</button> */}
            <Button className="primary" onClick={onClickHandler}>Logout</Button>
        </div>
    )
}

export default withRouter(LandingPage)
