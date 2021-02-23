import React from 'react';
import {useState, useEffect} from "react";

//хуки - ф-я которая мониторится реактом и запускает их при изменении
//хуки нельзя использовать в циклах, в if
const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    //синхронизация данных, когда изменится статус
    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


        return (
            <div>
                {!editMode &&
                <div >
                    <span onDoubleClick={activateEditMode}>{props.status || "---"}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input  onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                    value={status}/>
                </div>
                }
            </div>
        )
}

export default ProfileStatusWithHooks