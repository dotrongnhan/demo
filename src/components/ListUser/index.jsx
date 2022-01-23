import './ListUser.css'
import {useEffect} from "react";

export const ListUser = ({list, onEdit}) => {

    const edit = (item) => {
        onEdit(item)
    }

    return <div className="ant-list-items">
        {
            list.map(item =>
                <div className="ant-list-item">
                    <div className="ant-list-item-meta">
                        <div className="ant-list-item-meta-avatar">
                    <span className="ant-avatar ant-avatar-circle ant-avatar-image">
                        <img src={item.image}/>
                    </span>
                        </div>
                        <div className="ant-list-item-meta-content">
                            <h4 className="ant-list-item-meta-title">
                                <p>{item.name}</p>
                            </h4>
                            <div className="ant-list-item-meta-description">
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <ul className="ant-list-item-action">
                            <li>
                                <a onClick={() => edit(item)}>Edit</a>
                            </li>
                            <li>
                                <a>Remove</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
    </div>
}
