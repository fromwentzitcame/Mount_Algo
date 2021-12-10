import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
// import {prompts} from './prompts n solution/prompt.js'
// import {solutions} from './prompts n solution/solution.js'
import VictoryPage from './VictoryPage.js'
import { Button, Input, FormField, Label } from '../styles'
import { useNavigate } from 'react-router-dom'
import '../Gameboard.css'
import swal from 'sweetalert'

function GameBoard({user, setUser, questions}) {
    const navigate = useNavigate()
    const [solution, setSolution] = useState('')

    function checkAnswer(e) {
        e.preventDefault();
        console.log(user)
        if(`${solution}` == `${questions[user.score].answer}`) {
            fetch(`/users/${user.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({
                    score: user.score
                })
            })
            .then(response => response.json())
            .then(data => setUser(data))
        } else {
            swal("Try Again")
        }
    }


    return (
        <>
        <div id="gameboard">
            <div className="greeting">
                <h2>{`Welcome ${user.username}, the ${user.avatar.name}`}</h2>
            </div>
            <div className="question-text">
                <h2>{user.score < 5 ? `Quest ${user.score + 1}` : null }</h2>
                <p>{user.score < 5 ? `${questions[user.score].prompt}` : null }</p>
                <p>{user.score < 5 ? `${questions[user.score].question}` : null}</p>
                {user.score === 5 && <VictoryPage />}
            </div>
            {user.score < 5 ? (
                <div className="input-field">
                    <form className="form" onSubmit={checkAnswer}>
                        <FormField>
                            <Label>ANSWER</Label>
                            <Input type="text"
                            id="solution"
                            value={solution}
                            onChange={(e) => setSolution(e.target.value)}
                            />
                            <Button type="submit">SUBMIT</Button>
                        </FormField>
                    </form>
                </div> ) : 
                <Button className="end" onClick={() => {navigate('/')}}>RETURN HOME</Button> 
                }
            {user.score===0? <img src={user.avatar.img_url} className="q1-avatar"/> : null}
            {user.score===1? <img src={user.avatar.img_url} className="q2-avatar"/> : null}
            {user.score===2? <img src={user.avatar.img_url} className="q3-avatar"/> : null}
            {user.score===3? <img src={user.avatar.img_url} className="q4-avatar"/> : null}
            {user.score===4? <img src={user.avatar.img_url} className="q5-avatar"/> : null}
            {user.score===5? <img src={user.avatar.img_url} className="winner-avatar"/> : null}
            <Label className="gatekeeper">The Gatekeeper</Label>
            <Label className="elf">Elven Pass</Label>
            <Label className="inn">Gambler's Inn</Label>
            <Label className="hermit">Hermit's Hut</Label>
            <Label className="cylean">Cubic Point</Label>
            <Label className="summit">The Summit</Label>
        </div>
        </>
    )
}

export default GameBoard
