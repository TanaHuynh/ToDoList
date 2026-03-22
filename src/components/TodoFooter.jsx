// Assignment requirement: 
// • Đếm số item chưa hoàn thành ("items left"). 

export default function TodoFooter({ leftCount }) {
    return (
        <div className="todo-footer">
            <strong>{leftCount}</strong> 項目が残っています
        </div>
    );
}