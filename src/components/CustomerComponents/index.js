import React from 'react';
import TopBar from "../CommonComponents/TopBar";
import Steps from "../CommonComponents/Steps";
import BottomBar from "../CommonComponents/BottomBar";

const CustomerWrapper = () => {
    return (
        <div className="container grey-bgc">
            <TopBar />
            <Steps step={3} />
            <br />
            <br />
            <p style={{paddingLeft: '10%'}}>your data</p>
            <BottomBar />
        </div>
    )
}
export default CustomerWrapper;