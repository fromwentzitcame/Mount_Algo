import React, {useState} from 'react';
import '../Profile.css'
import { Label, Button } from "../styles"
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert'

function Profile({user, resetUser, questions}) {
    const navigate = useNavigate()
    const [showQ, setShowQ] = useState(false)
    const [visibleQ, setVisibleQ] = useState({})

    function handleDelete(user) {
        swal({
            title: "WARNING",
            text: "Once deleted, you will not be able to recover this profile.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`/users/${user.id}`, {
                    method: "DELETE"
                })
                    .then(data => console.log(data))
                swal("You have successfully deleted your profile.", {
                    icon: "success",
                });
                resetUser(null)
                navigate('/')
            } else {
              swal("You live to fight another day!");
            }
          });
    }

    function handleShowQ(question) {
        if (question.id === visibleQ.id) {
            setShowQ(showQ => !showQ)
        } else if (showQ === false) {
            setShowQ(showQ => !showQ)
        }
    }

    function captureVisibleQ(clickedQ) {
        let quest = questions.filter(question => question.id === clickedQ.id)
        setVisibleQ(quest[0])
    }

    function conquered(questions) {
        return (questions.map(question => {
            if ((user.score + 1) > question.id) {
                return (<div key={question.id}>
                    <Label>Q{question.id}</Label>
                    <Button onClick={ () => {handleShowQ(question); captureVisibleQ(question) }}>See Question</Button>
                    </div>)
            }}
            ))
    }
    
    return (
        <div id="profile-card">
            <div className="grid-1">
                <h1>User Profile</h1>
            </div>
            <div className="grid-2">
                <img id="profile-avatar" src={user.avatar.img_url} alt={user.avatar.name}/>
            </div>
            <div className="grid-3">
                <h2>Username: {user.username}</h2>
                <h3>Avatar: {user.avatar.name}</h3>
                <Button onClick={() => handleDelete(user)}>Delete Profile</Button>
            </div>
            <div className="grid-4">
                <h2>Conquered Quest-ions</h2>
            </div>
            <div className="grid-5">
                {conquered(questions)}
            </div>
            <div className="grid-6">
                {showQ ? <p>{visibleQ.question}</p> : null}
            </div>
        </div>
    )
}

export default Profile