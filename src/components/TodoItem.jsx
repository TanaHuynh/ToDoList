// Assignment requirement:
// • Đánh dấu hoàn thành / bỏ hoàn thành. 
// • Xoá item. 

export default function TodoItem({ item, onToggle, onRemove }) {
    return (
        <li className="todo-item">
            {/* https://react.dev/learn/responding-to-events */}
            <div className={`custom-checkbox ${item.completed ? 'checked' : ''}`}
                onClick={() => onToggle(item.id)}>
                {item.completed && '✓'}
            </div>

            {/* https://react.dev/learn/conditional-rendering */}
            <span className="todo-text" style={{
                textDecoration: item.completed ? 'line-through' : 'none',
                color: item.completed ? '#bbb' : '#444'
            }}>
                {item.text}
            </span>

            {/* https://react.dev/learn/responding-to-events */}
            <button className="delete-btn" onClick={() => onRemove(item.id)}>✕</button>
        </li>
    );
}