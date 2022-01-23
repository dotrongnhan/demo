import React, {useEffect, useState} from "react";

export const AddUserForm = ({currentItem, save, cancel, setItem}) => {
    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState("")
    const [description, setDescription] = useState("")
    const [id, setId] = useState("")

    useEffect(() => {
        if (currentItem) {
            setId(currentItem.id)
            setName(currentItem.name)
            setDescription(currentItem.description)
            setAvatar(currentItem.image)
        }
    },[currentItem])

    useEffect(()=> {
        setItem({id: id,avatar: avatar, name: name, description: description})
    }, [name, avatar, description])

    useEffect(() => {

    })
    return <div>
        <div className="field-input-group">
            <input value={avatar} onChange={event => setAvatar(event.target.value)} placeholder="Avatar" type="text" className="ant-input" />
        </div>
        <div className="field-input-group">
            <input value={name} onChange={event => setName(event.target.value)} placeholder="Name" type="text" className="ant-input" />
        </div>
        <div className="field-input-group">
            <input value={description} onChange={event => setDescription(event.target.value)} placeholder="Content" type="text" className="ant-input" />
        </div>
        <div className="modal-new-user-footer">
            <button onClick={save} className="ant-btn ant-btn-primary">
                Save
            </button>
            <button onClick={cancel} className="ant-btn" style={{marginLeft: 10}}>
                Cancel
            </button>
        </div>
    </div>
}
