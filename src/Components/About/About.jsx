import React, {useState} from 'react'
import Style from './About.module.css'
const vision = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quo aperiam consequuntur corrupti impedit dolorem 
                veritatis temporibus praesentium fugit vero excepturi!`;

const history = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Suscipit quia eum tenetur, vero sed laudantium enim 
                accusamus ipsa commodi, explicabo consequuntur dolorum 
                sint temporibus! Ea similique veritatis qui velit alias?`;

const goals = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fuga accusantium dolorem ratione culpa facere tempore 
                necessitatibus eaque? Id, repellat quos vero eius sint ad 
                consequatur quia enim minus voluptates officia.`


function About() {
    const [content, setContent] = useState(history)

        function showHistory() {
            setContent(history)
        }

        function showVision() {
            setContent(vision)
        }

        function showGoals() {
            setContent(goals)
        }

    return(
        <>
        <div className={Style.container}>
            <div className={Style.aboutcont}>
                <button className={Style.history} onClick={showHistory}>History</button>
                <button className={Style.vision} onClick={showVision}>Vision</button>
                <button className={Style.goals} onClick={showGoals}>Goals</button>
                <p className={Style.content}>{content}</p>
            </div>
        </div>
        </>
        
        
    )
}

export default About