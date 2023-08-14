import React, {useState} from 'react'

const Sidebar = ({amoBookmark, commet}) => {
    //para cambiar si ya lo guardaste  no
    const [saveBookmark, setSavebookmark] = useState(true)

    return (
        <div style={{backgroundColor: 'green', width: '100px', height: '1000px'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {
                    saveBookmark 
                        ? <img src='/img/favorite_black.svg' alt="favorite_black" />
                        : <img src='/img/fvorite.svg' alt="favorite" />
                }
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => commet()}>
                <img src='/img/chat_bubble.svg' alt="chat_bubble" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {
                    saveBookmark 
                        ? <img src='/img/turned.svg' alt="Bookmark" />
                        : <img src='/img/bookmark.svg' alt="Bookmark" />
                }
                <p>{amoBookmark}</p>
            </div>
        </div>
    )
}

export default Sidebar