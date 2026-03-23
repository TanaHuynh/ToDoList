// Assignment requirement: 
// • Thêm item (text). 
// • Sử dụng **controlled input** cho ô nhập todo. 

import { useState } from 'react';

export default function ToDoInput({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="send-btn">➤</button>
        </form>
    );
}