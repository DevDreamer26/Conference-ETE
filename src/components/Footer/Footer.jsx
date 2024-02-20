import React from 'react'
import  './Footer.css'


const Footer = () => {
  return (
    <>
 	<footer>
		<div class="footer-container">
			<div class="footer-logo">
				<h2>ETE Conference</h2>
				<p>International Conference ETE dept</p>
				<a href="#" class="fa fa-facebook"></a>
				<a href="#" class="fa icons fa-twitter"></a>
				<a href="#" class="fa fa-instagram"></a>
			</div>
			<div class="footer-links">
				<div class="learning">
					<h3>Popular</h3>
					<ul>
						<a href="#"><li>Seminars</li></a>
						<a href="#"><li>Speakers</li></a>
						
					</ul>
				</div>
				<div class="learning">
					<h3>Popular</h3>
					<ul>
						<a href="#"><li>Seminars</li></a>
						<a href="#"><li>Speakers</li></a>
						
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