import { useCallback, useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

function App() {
    const [length, setLength] = useState(8);
    const [numbers, usenumbers] = useState(false);
    const [symbols, usesymbols] = useState(false);
    const [password, setPassword] = useState("");
    const textRef = useRef(null);
    const [copyText, setCopyText] = useState("Copy to Clipboard");


    const handleCopyClick = () => {
        textRef.current.select();

        document.execCommand('copy');
        setCopyText("Copied!");
    };


    const passwordGenerator = useCallback(() => {
        let pwd = ""
        let str = "AVCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numbers) {
            str += "0123456789"
        }
        if (symbols) {
            str += "!@#$%^&*()?/+_-="
        }

        for (var i = 0; i < length; i++) {
            pwd += str[Math.floor((Math.random() * str.length))]
        }

        setPassword(pwd)
        // console.log(pwd);

    }, [length, numbers, symbols, setPassword])


    useEffect(() => {
        passwordGenerator();
        setCopyText("Copy to Clipboard")
    }, [passwordGenerator, length, numbers, symbols, setPassword])


    function handleNumberChange() {
        usenumbers(
            (prevValue) => { return !prevValue }
        )
    }


    return (
        <>
            <h1 className='main-heading'>Password Generator</h1>

            <div className='container'>
                <input type="text" name="password" id="password" className='box' value={password} placeholder='Password'
                    readOnly ref={textRef} />

                <button className='box' onClick={handleCopyClick}>
                    <FontAwesomeIcon icon={faClipboard} />&nbsp;&nbsp;{copyText}
                </button>
            </div>

            <div className='changes-container'>
                <div className='change-element-container'>
                    <input type="range" name="" id="" min={8} max={15} value={length}
                        onChange={(event) => setLength(event.target.value)} />

                    <label htmlFor="">Length : {length}</label>
                </div>
                <div className='change-element-container'>
                    <input type="checkbox" name="NumberAllowed" id="numbers" value={numbers} onChange={handleNumberChange} />
                    <label htmlFor="">Numbers Allowed</label>
                </div>
                <div className='change-element-container'>
                    <input type="checkbox" name="SymbolAllowed" id="symbols"
                        value={symbols} onChange={() => usesymbols((prevValue) => { return !prevValue })} />

                    <label htmlFor="">Symbols Allowed</label>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default App