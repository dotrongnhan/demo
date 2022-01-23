import React, {useEffect, useState} from 'react';
import { Modal } from 'antd';

import {ListUser} from './components/ListUser'
import {AddUserForm} from './components/AddUserForm'

import 'antd/dist/antd.css'
import './App.css';
import axios from "axios";

function App() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState(null)
    const [newItem, setNewItem] = useState({id:"", avatar: "", name: "", description: ""})
    const [list, setList] = useState([])

    useEffect(async () => {
        try {
            const res = await axios.get('https://5d36d86c86300e0014b647c7.mockapi.io/users')
            setList(res.data)
        } catch (e) {
            alert(e)
        }

    }, [])

    const addNewItem = async () => {
        try {
            const res = await axios.post('https://5d36d86c86300e0014b647c7.mockapi.io/users', newItem)
            setList([res.data, ...list])
        } catch (e) {
            alert(e)
        }
    }

    const updateItem = async () => {
        const newResult = [...list]
        const indexOfItemUpdated = newResult.findIndex(item => item.id === newItem.id)
        try {
            const res = await axios.put(`https://5d36d86c86300e0014b647c7.mockapi.io/users/${newItem.id}`, newItem)
            newResult[indexOfItemUpdated] = res.data
            await setList([...newResult])
        } catch (e) {
            alert(e)
        }
    }


    const save = () => {
        switch (newItem.id) {
            case "":
                addNewItem()
                break
            default:
                updateItem()
        }
        handleCancel()
    }

    const cancel = () => {
        handleCancel()
    }

    const edit = (item) => {
        setCurrentItem(item)
        handleOpenModal()
    }
    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    return (
        <div className="App">
            <h2>List user</h2>
            <div className="header-add-user">
                <button className="ant-btn ant-btn-primary" onClick={handleOpenModal}>
                    Add New User
                </button>
            </div>
            <ListUser onEdit={edit} list={list}/>
            <Modal title="Basic Modal" visible={isModalVisible} footer={null} onCancel={handleCancel}>
                <AddUserForm currentItem={currentItem} setItem={setNewItem} save={save} cancel={cancel}/>
            </Modal>
        </div>
    );
}

export default App;
