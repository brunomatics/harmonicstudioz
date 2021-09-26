import React from 'react'

function contact() {
    return (
        <section class="contact-view">
        <nav class="c-main-nav">
           <div class="contact-menu-link">
               <div class="contact-img-logo">
                   <img src="./images/my Brand 2.png" alt=""/>
               </div>
               <div class="uni"></div>
           <div class="lic"><ul class="contact-ul">
           <li className><a className="home" href="./">hOME</a></li>
                    <li><a className="about" href="./about">aBOUT US</a></li>
                    <li><a className="con" href="./contact">cONTACT US</a></li>
           </ul>
           </div>
        </div>
       </nav>
    <div class="c-details">
       <p>Contact Us</p>
           <h4>You can leave us a message or reach us through the following platforms</h4>
       </div>
       
   <div class="contact-div">
       <div class="right-contact">
           <div class="name">
               <div class="first-name">
                   <form>
                       <label class="l-name" for="fname">First name</label>
                       <br/>
                       <input class="f-name" type="text" id="fname" name="fname"/>
                   </form>
               </div>
               <div class="second-name">
                   <form>
                       <label class="l-name" for="lname">Last name</label>
                       <br/>
                       <input class="f-name" type="text" id="fname" name="fname"/>
                   </form>
               </div>
           </div>
                   <label class="email" for="email">Email</label>
                   <br/>
                   <input  class="email-box" type="email" id="email" name="email"/>
                   <label class="email" for="esub">Subject</label>
                   <br/>
                   <input  class="email-box" type="text" id="sub" name="subject"/>
                   <label class="email" for="email">Message</label>
                   <br/>
                   <input  class="msg-box" type="text" id="text" name="msg"/>
                   <div class="btn"><button>SEND MESSAGE</button></div>
       </div>
   </div>
   <div class="contact-icon">
       <ul class="c-icon">
           <li><i class="fab fa-facebook-f"></i></li>
           <li><i class="fas fa-camera"></i></li>
           <li><i class="fab fa-linkedin-in"></i></li>
           <li><i class="fab fa-twitter"></i></li>
           <li><i class="fab fa-whatsapp"></i></li>
       </ul>
   </div>
   </section>

    )
}


export default contact
