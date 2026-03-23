// Assignment requirement:
// • Đánh dấu hoàn thành / bỏ hoàn thành. 
// • Xoá item. 
// • Edit item. 

import { useState, useEffect } from 'react';

export default function TodoItem({ item, onToggle, onRemove, onStartEdit, onSaveEdit }) {
    const [draft, setDraft] = useState(item.text);

    useEffect(() => setDraft(item.text), [item.text]);

    const handleSave = () => {
        onSaveEdit(item.id, draft);
    };

    return (
        <li className="todo-item">
            <div className={`custom-checkbox ${item.completed ? 'checked' : ''}`}
                onClick={() => onToggle(item.id)}>
                {item.completed && '✓'}
            </div>

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
                            value={draft} // Giá trị đang gõ (chưa lưu chính thức)
                            onChange={(e) => setDraft(e.target.value)} // // Cập nhật draft liên tục khi gõ
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