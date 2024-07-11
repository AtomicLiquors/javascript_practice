'use strict';
// JavaScript is synchronous.
// Execute the code block by in order after hoisting.


// console.log(1);
// setTimeout(() => console.log(2), 1000);
// console.log(3);


/* 콜백 지옥 */
// 근본적으로 '결괏값을 바로 받아야 한다는 점' 때문에 결과적으로 코드가 중첩이 되고 복잡해진다.
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === '2kooong2' && password === '2222')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(
                (user === '2kooong2')
            ){
                onSuccess({name: '2kooong2', role: 'man who smiles'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = '2kooong2';
const password = '2222';

userStorage.loginUser('2koooong2', '2222', user => {
    userStorage.getRoles(
        user, 
        userWithRole => {
            console.log(`Welcome ${userWithRole.name}, ${userWithRole.role}`);
        },
        error => {
            console.log(error);
        }
    );
});