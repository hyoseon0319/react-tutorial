import React from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import InputSample from './InputSample'

function App() {
  return (
        <Wrapper>
          <Hello name="자식 컴포넌트" color="black" isSpecial />
          <Hello color="orange" />          
          {/* 내부의 내용은 Wrapper에서 props.children 렌더링  */}
          <hr />
          <Counter />
          <hr />
          <InputSample />
        </Wrapper>
  );
}

export default App;
