import React, {useState} from 'react'

export default function FacebookIcon(props) {
    const [hover, setHover] = useState(false);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={hover ? '#bdbdbd' : props.fill} viewBox="0 0 24 24" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} height={props.height}><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path></svg>
    )
}
