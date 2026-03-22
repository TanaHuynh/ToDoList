// Assignment requirement: 
// • Hiển thị thông báo khi danh sách rỗng (empty state). 

import TodoItem from './TodoItem';

export default function TodoList({ items, onToggle, onRemove }) {
    // https://react.dev/learn/conditional-rendering
    if (items.length === 0) {
        return <p>現在, 予定はありません</p>;
    }

    return (
        // https://react.dev/learn/rendering-lists
        <ul>
            {items.map(it => (
                <TodoItem
                    key={it.id}
                    item={it}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            ))}
        </ul>
    );
}