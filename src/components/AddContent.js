export default function AddContent() {
    return (
        <form>
            <div>
                <label>제목</label>
                <input type="text" name="title" placeholder="제목을 입력해주세요" />
            </div>
            <div>
                <label>내용</label>
                <textarea name="content" placeholder="내용을 입력해주세요" />
            </div>
            <div className="btn-area">
                <button>추가</button>
            </div>
        </form>
    );
}