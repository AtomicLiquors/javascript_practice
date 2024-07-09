import { useCallback } from 'react';

export const App = () => {
    const handleClick = useCallback((e) => {
        console.log(e.target);
    }, []);

    return (
        <div onClick={ ()=>{} }></div>
        // 다음 중 onClick={} 안에 들어갈 것으로 올바른 것은?
        // 1. handleClick 2. handleClick() 3. handleClick(e)
    )
}