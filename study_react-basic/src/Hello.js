import React from "react";

function Hello({ color, name, isTrue }) {
    return (
        <div style={{ color: color }}>
            {isTrue && <b>*</b>}
            Hello ~{name}
        </div>
    );
}

Hello.defaultProps = {
    name: "이름없음"
};

export default Hello;
