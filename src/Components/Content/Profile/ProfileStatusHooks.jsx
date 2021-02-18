import React, {useState} from 'react'

const StatusHooks = (props) => {

    let [editMode, setEditMode] = useState(true)
    let [status, setStatus] = useState(props.status)

    let activateEditMode = () => {
        setEditMode(false)
    }
    let deActivateEditMode = () => {
        setEditMode(true)
      props.updateStatusThunk(status)
    }
    let onChangeStatus = (event) => {
            setStatus(event.currentTarget.value)
    }


    return (
        <>
            { editMode &&
                <div>
                    <span onClick={activateEditMode}>{props.status}</span>
                </div>
            }
            { !editMode &&
                <div>
                    <input onBlur={deActivateEditMode} onChange={onChangeStatus} value={status}/>
                </div>
            }
        </>
    )
}

export default StatusHooks