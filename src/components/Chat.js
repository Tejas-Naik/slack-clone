import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "../Chat.css";
import db from "../firebase";
import Message from "./Message";

function Chat() {
    const { roomId } = useParams();     // extract from the url
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        // Getting data based on room id
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((snapshot) => {
                    setRoomDetails(snapshot.data());
                })
        }

        // Getting messages from the roomId
        db.collection("rooms")
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => {
                setRoomMessages(
                    snapshot.docs.map(doc => doc.data())
                )
            })

    }, [roomId]);

    console.log(roomDetails);
    console.log(roomMessages);

    return (
        <div className='chat'>
            <div className='chat__header'>
                <div className='chat__headerLeft'>
                    <h4 className='chat__channelName'>
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className='chat__headerRight'>
                    <p><InfoOutlinedIcon /> Details</p>
                </div>
            </div>
            <div className='chat__messages'>
                {roomMessages.map(({ message, timestamp, user, userImage }) => (
                    <Message
                        message={message}
                        userImg={userImage}
                        timestamp={timestamp}
                        user={user}
                    />
                ))}

            </div>
        </div>
    )
}

export default Chat
