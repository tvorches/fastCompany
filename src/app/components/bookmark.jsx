import React, { useState } from "react";

const styles = {
    icons: {
        cursor: "pointer"
    }
};

const BookMark = () => {
    const [mark, setMark] = useState(false);

    if (mark) {
        return (
            <i
                className="bi bi-bookmark-check-fill"
                onClick={() => setMark(false)}
            ></i>
        );
    }

    return (
        <i className="bi bi-bookmark-check" onClick={() => setMark(true)}></i>
    );
};

export default BookMark;
