class UserStorage {
    loginUser = (id, password) => new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(id === '2kooong2' && password === '2222'){
                resolve(id);
            }else{
                reject(new Error('not found'))
            }
        }, 1000);
    })
    
    getRoles = (user) => new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(user === '2kooong2'){
                resolve({name: '2kooong2', role: 'man who smiles'});
            }else{
                reject(new Error('no Access'))
            }
        }, 1000);
    })
}

const userStorage = new UserStorage();
const id = '2kooong2';
const password = '2222';

userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then((userWithRole) => console.log(`Welcome ${userWithRole.name}, ${userWithRole.role}`))
    .catch((error) => console.log(error));