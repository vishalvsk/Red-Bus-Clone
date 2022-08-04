function navbar(){
    return `<div id="headerBlock">
      <article class="container">
        <nav class="leftNav">
          <section>
            <div class="logo">
              <a href="homePage.html"><img src="./images/logo.png" alt=""></a>
            </div>
            <div class="leftmenu">
              <ul>
                <li><a href="#" ></a>eBUS TICKETS</a></li>
                <li>
                  <a href="#">rPool <sup>new</sup></a>
                </li>
                <li><a href="#">BUS HIRE</a></li>
                <li><a href="#">PILGRIMAGES</a></li>
              </ul>
            </div>
          </section>
        </nav>
        <!----right side menu-->
        <nav class="rightNav">
          <ul>
            <li><a href="#">Help</a></li>
            <li>
              <a href="#" id="dropup-menu-booking" >Manage booking
              <span><i class="fas fa-chevron-down"></i> </span> 
              </a>
              <div class="dropdown-menu-booking">
                <div>
                  <a class="dropdown-item" href="PageCancelTicket.html">Cancel Ticket</a><br>
                  <a class="dropdown-item" href="PageShowTicket.html">Show My Ticket</a><br>
                  <a class="dropdown-item" href="#">Change Travel Date</a><br>
                </div>
              </div>
             
            </li>
            
            <li id="Signup">
              <a href="#" id="dropup-menu" >
                <span><i class="far fa-user-circle"></i></span>
                <span><i class="fas fa-chevron-down after_user_circle"></i>
                        
                </span>
              </a>
              <div class="dropdown-menu">
                <div>
                <a href="PageMytrip.html">MY Trips</a><br>
                <a href="PageWalletAndCard.html">Wallets</a><br>
                <a href="PageMyProfile.html">MY Profile</a><br>
                <a href="SignupLogin.html">Sign Out</a><br>
                </div>          
              </div>
            </li>
          </ul>
        </nav>
      </article>
    </div>`;
}

export default navbar;