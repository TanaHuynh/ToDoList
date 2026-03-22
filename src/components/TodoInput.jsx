// Assignment requirement: 
// • Thêm item (text). 
// • Sử dụng **controlled input** cho ô nhập todo. 

import { useState } from 'react';

export default function ToDoInput({ addTodo }) {
    // https://react.dev/learn/state-a-components-memory
    const [text, setText] = useState('');

    // https://react.dev/learn/responding-to-events
    const handleSubmit = (e) => {
        e.preventDefault(); // Chặn hành vi load lại trang của form

        if (text.trim()) {
            addTodo(text);
            setText('');
        }

    };

    return (
        <form onSubmit={handleSubmit} className="input-wrapper">

            <input
                type="text"
                placeholder="新しい項目"
                value={text}
                // https://react.dev/learn/responding-to-events
                onChange={(e) => setText(e.target.value)}
            />

            <button type="submit" className="send-btn">➤</button>
        </form>
    );
}