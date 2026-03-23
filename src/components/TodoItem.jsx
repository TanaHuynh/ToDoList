// Assignment requirement:
// • Đánh dấu hoàn thành / bỏ hoàn thành. 
// • Xoá item. 

import { useState, useRef, useEffect } from 'react';

export default function TodoItem({ item, onToggle, onRemove, onStartEdit, onSaveEdit }) {
    const [draft, setDraft] = useState(item.text);
    const inputRef = useRef(null);

    useEffect(() => setDraft(item.text), [item.text]);

    useEffect(() => {
        if (item.isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [item.isEditing]);

    const handleSave = () => {
        onSaveEdit(item.id, draft);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSave();
        }
    };

    return (
        <li className="todo-item">
            {/* https://react.dev/learn/responding-to-events */}
            <div className={`custom-checkbox ${item.completed ? 'checked' : ''}`}
                onClick={() => onToggle(item.id)}>
                {item.completed && '✓'}
            </div>

            {/* https://react.dev/learn/conditional-rendering */}
            <div className="todo-item-content">
                {!item.isEditing ? (
                    <>
                        <span style={{ textDecoration: item.completed ? 'line-through' : 'none', flex: 1, paddingRight: '10px' }}>
                            {item.text}
                        </span>
                        <button className="edit-btn" onClick={() => onStartEdit(item.id)}>Edit</button>
                        <button className="delete-btn" onClick={() => onRemove(item.id)}>✕</button>
                    </>
                ) : (
                    <>
                        <input
                            ref={inputRef}
                            value={draft}
                            onChange={(e) => setDraft(e.target.value)}
                            onKeyDown={handleKeyDown}
                            style={{ border: '1px solid #ddd', padding: '2px 5px', borderRadius: '4px', flex: 1, marginRight: '5px' }}
                        />
                        <button className="save-btn" onClick={handleSave}>Save</button>
                        <button className="delete-btn" onClick={() => onRemove(item.id)}>✕</button>
                    </>
                )}
            </div>
        </li>
    );
}