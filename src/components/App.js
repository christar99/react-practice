import { useEffect, useState } from "react";
import "style/App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Counter />
            </header>
        </div>
    );
}

const Counter = () => {
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');
    const [value, setValue] = useState(0);

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeNickName = (e) => {
        setNickName(e.target.value);
    }

    useEffect(() => {
        console.log(name + ' 놈아');
        return (
            console.log(name + ' 깨끗이 쓰자')
        )
    }, [name]);
    
    
    return (
        <div>
            <p>개시발놈아</p>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickName} onChange={onChangeNickName} />
            </div>
            <div>
                <div>
                <b>이름:</b> {name}
                </div>
                <div>
                <b>닉네임: </b>
                {nickName}
                </div>
            </div>
        </div>
    )
};

export default App;
