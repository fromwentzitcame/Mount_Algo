import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {Button} from "../styles"

function LandingPage({user}) {
    const navigate = useNavigate();

    return (
        <div>
        <MtAlgoHeader>
            <h1>Mount Algo</h1>
            <h3 className="subheading-fade">Algorithm Adventures Await!</h3>
        </MtAlgoHeader>
            <PlayNowBtn>
            <InstructionPargph> 
                   <span className="subheading-fade">To complete these challenges you will need to open your favorite IDE. We recommend writing your code in the IDE and then running it in the browser console to test output. Copy the output and paste it into the solution field. </span>
            </InstructionPargph>    
            {user ? <Button onClick={() => navigate('/play')}>PLAY NOW!</Button> : <Button onClick={() => navigate('/login')}>PLAY NOW!</Button> }      
            </PlayNowBtn>
        </div>
    )
}

export default LandingPage


const MtAlgoHeader = styled.div`
    margin-top: 150px;
    position: relative;
    height: 100%;
    box-sizing: border-box;
    justify-content: left;
    color: #4f2004;
    font-family: "Copperplate", fantasy
`
const PlayNowBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`
const InstructionPargph = styled.p`
    position: absolute; 
    margin-top: 50%;
    margin-left: 40%;
    margin-right: 50%;
    margin-bottom: 25%;
    display: flex;
    width: 800px;
    font-weight: bold;
    color: #eab676;
    font-size: 0.75em;
    text-align: center
`