import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'


const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic('ca65be96-b5c8-4373-a119-4b640864896c',props.user.username, props.user.secret );
    
    return <div style={{ height: "100vh" }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps}  style={{ height: "100%" }}/>
    </div>
}

export default ChatsPage



