import React, { useEffect, useState } from 'react'
import db from "../firebase"
import "../Sidebar.css"
import SidebarOption from './SidebarOption'

import AddIcon from '@material-ui/icons/Add'
import AppsIcon from '@material-ui/icons/Apps'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import CreateIcon from '@material-ui/icons/Create'
import DraftsIcon from '@material-ui/icons/Drafts'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import InboxIcon from '@material-ui/icons/Inbox'
import InsertComment from '@material-ui/icons/InsertComment'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'


function Sidebar() {
    const [channels, setChannels] = useState([]);
    useEffect(() => {
        // Run this code when sidebar component loads
        db.collection('rooms').onSnapshot(snapshot => {
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        })
    }, []);

    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__info'>
                    <h2>RN Tejas</h2>
                    <h3>
                        <FiberManualRecordIcon /> Tejas Naik
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertComment} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
            {/* Connect to db and list all the channels */}
            {/* <SidebarOption/> */}
            {channels.map(channel => (
                <SidebarOption
                    title={channel.name}
                    id={channel.id}
                    key={channel.id}
                />
            ))}
        </div>
    )
}

export default Sidebar
