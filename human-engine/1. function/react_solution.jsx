import { useCallback } from 'react';

export const App = () => {
    const handleClick = useCallback((e) => {
        console.log(e.target);
    }, []);

    return (
        // <div onClick={handleClick}></div>
        // 다음 중 {} 안에 올바른 것은?
        // 1. handleClick이 옳다. return값으로 치환해 보면 다음과 같다.

        <div onClick={(e) => {
            console.log(e.target);
        }}></div>
    )
}