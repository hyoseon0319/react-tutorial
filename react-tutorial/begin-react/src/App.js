import React, { useRef, useState } from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import InputSample from './InputSample'
import UserList from './UserList'
import CreateUser from './CreateUser'

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  };


  const { users, setUsers } = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
    }, 
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
    }
]);


  const nextId = useRef(4);
  const onCreate = () => {
      const user = {
        id: nextId.current,
        username,
        email
      };  
      // setUsers([...users, user]); ??
      setUsers(users.concat(user)); 

      setInputs({
        username: '',
        email: '' 
      });
      nextId.current += 1;
      // console.log(nextId.current); // 4
  };

  return (
        <Wrapper>
          <Hello name="자식 컴포넌트" color="black" isSpecial />
          <Hello color="orange" />          
          {/* 내부의 내용은 Wrapper에서 props.children 렌더링  */}
          <hr />
          <Counter />
          <hr />
          <InputSample />
          <hr />
          <UserList users={users} />  
          {/* ??  */}
          <hr />
          <CreateUser 
            username={username} 
            email={email} 
            onChange={onChange} 
            onCreate={onCreate}
          />
        </Wrapper>
    );
  }


  export default App;
