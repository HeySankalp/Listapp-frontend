import React from 'react'

const Alert = (props) => {
    return (
        <div>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show fixed-top`} role="alert">
                <strong>Message</strong> : {props.alert.msg}
            </div>}
        </div>

    )
}

export default Alert