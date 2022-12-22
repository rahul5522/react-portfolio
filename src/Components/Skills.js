import React from 'react'


export default function Skills(){

    return(

        <section className="skills" id="skills">

            <div className="sheading">
                                    <span className="pink">S</span>
                                    <span className="orange">K</span>
                                    <span className="green">I</span>LLS
            </div>

            <div className="scontent">
                <div className='sitem'>
                    <img src={require("../images/html.png")} alt="Ooops"></img>
                    <div className="text">HTML 5</div>
                </div>

                <div className='sitem'>
                    <img src={require("../images/CSS3.png")} alt="Ooops"></img>
                    <div className="text">CSS3</div>
                </div>

                

                <div className='sitem'>
                    <img src={require("../images/javascriptn.png")} alt="Ooops"></img>
                    <div className="text">Javascript</div>
                </div>

                <div className='sitem'>
                    <img className='reat' src={require("../images/React.png")} alt="Ooops"></img>
                    <div className="tdown">React</div>
                </div>

                <div className='sitem'>
                    <img  className="Javal" src={require("../images/Javan.png")} alt="Ooops"></img>
                    <div className="tdown">Java</div>
                </div>

                
            </div>


        </section>
    )


}