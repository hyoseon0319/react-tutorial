import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    const nameInput = useRef();
    const { name, nickname } = inputs;



    const onChange = (e) => { // 이벤트함수는 이벤트 객체 e를 파라미터로 받아와서 사용가능
       const { name, value } = e.target; 

       // e.target은 이벤트가 발생한 DOM인 input DOM을 가리키게 됨
       setInputs ({
           ...inputs,
           [name] : value,
        //    nextInputs[name] = value;
       });
    };
       // e.target.value 조회 -> 현재 input에 입력한 값이 무엇인지 알 수 있음

    const onReset = () => {
        setInputs ({
            name: '',
            nickname: '',
        });
        nameInput.current.focus(); // input의 name 에 focus
    };

    return (
        <div>
            <input 
            name="name" 
            placeholder="이름" 
            onChange={onChange} 
            value={name} 
            ref={nameInput} 
            />
            <input 
            name="nickname" 
            placeholder="닉네임" 
            onChange={onChange} 
            value={nickname} 
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>이름:</b>{name}
            </div>
            <div>    
                <b>닉네임</b>{nickname}
            </div>
        </div>
    );
}


export default InputSample;