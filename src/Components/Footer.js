import React from 'react'


export default function Footer(){

    return(


        <section className='footer' id="contact">
            <div className='fheading'>
                Contact
            </div>


            <div className='footer_content'>
                <div className='fform'>
                    <div className='fnamediv'>
                        <input type="text" name="fname" id="fname" className="fname" placeholder="Your Name"/>  
                    </div> 

                    <div className='fnamediv'>
                        <textarea className="ftext" id="ftext" cols="30" rows="10" placeholder="Your message..."></textarea> 
                    </div>

                    <div className='fnamediv'>
                    <a href="https://memegeneratorrw.netlify.app/" className="projbut">
                
                            <div className="text1">Send</div>
                
                            <span className="tline"></span>
                            <span className="sline"></span>
                            <span className="fline"></span>
                

                    </a>
                    </div>
                    
                </div>


                <div className='fboard'>
                    <div className='board'>
                        <blockquote>
                            "Who controls the past controls the future. Who controls the
                            present controls the past."
                        </blockquote>

                        <aside>~George Orwell</aside>
                    </div>
                </div>
            </div>
        </section>
    )
}