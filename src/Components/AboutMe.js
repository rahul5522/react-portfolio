import React from 'react'

export default function AboutMe(){


    return(

<> 
 <section className="aboutMe" id="aboutMe">
    <div className="aboutMet">
        <p>
        Hey I am Rahul, aspiring web developer living in Gujarat, India. I am 22 years old. I am a computer engineer. Be sure to checkout my projects :)
        </p>

        <a href="" className="projbut">
                
                <div className="text1">My Cv</div>
                
                <span className="tline"></span>
                <span className="sline"></span>
                <span className="fline"></span>
                

            </a>   
    </div>

    <div className="pro_pic">
            <img className="photo" src={require("../images/my-profile.jpg")} alt="Ooops"></img>
    </div>

 </section>
 </>

)
}