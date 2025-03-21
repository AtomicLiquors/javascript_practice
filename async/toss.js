const init = async () => {
    const getSomeData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const jsonData = await response.json();
        
        return jsonData;
    };

    const data = await getSomeData();

    console.log(data);
}


init();
