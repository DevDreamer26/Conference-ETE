import React from 'react'
import  './Footer.css'


const Footer = () => {
  return (
    <>
 	<footer>
		<div class="footer-container">
			<div class="footer-logo">
				<h2>ETE Conference</h2>
				<p>International Conference organised by the ETE dept</p>
				<a href="#" class="fa fa-facebook"></a>
				<a href="#" class="fa icons fa-twitter"></a>
				<a href="#" class="fa fa-instagram"></a>
			</div>
			<div class="footer-links">
				<div class="platform">
					<h3>Ouick Links</h3>
					<ul>
						<a href="#"><li>How it Works</li></a>
						<a href="#"><li>Checkout</li></a>
						<a href="#"><li>Fraud</li></a>
						<a href="#"><li>Protection</li></a>
						<a href="#"><li>Payments</li></a>
						<a href="#"><li>Accounts</li></a>
					</ul>
				</div>
				<div class="learning">
					<h3>Popular Topics</h3>
					<ul>
						<a href="#"><li>Resources</li></a>
						<a href="#"><li>Blog</li></a>
						<a href="#"><li>FAQs</li></a>
						<a href="#"><li>ThinkShop</li></a>
					</ul>
				</div>
				<div class="About">
					<h3>About</h3>
					<ul>
						<a href="#"><li>Careers</li></a>
						<a href="#"><li>Team</li></a>
						<a href="#"><li>Partners</li></a>
						<a href="#"><li>Contact Us</li></a>
						<a href="#"><li>News & Press</li></a>
					</ul>
				</div>
			</div>
			<div class="footer-contactus">
				<h2>Contact US</h2>
				<button>Get in touch</button>
			</div>
		</div>
		<div class="copywright-tag">Copyright@2024. All rights reserved</div>
	</footer>

    </>
  );

};



export default Footer