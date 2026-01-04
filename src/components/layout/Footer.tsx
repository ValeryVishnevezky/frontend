import '@/assets/styles/components/Footer.css'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="full">
			<div className="footer-container">
				
				<div className="footer-section">
					<h3 className="footer-title">Company</h3>
					<ul className="footer-links">
						<li>
							<Link href="/">About Us</Link>
						</li>
						<li>
							<Link href="/">Careers</Link>
						</li>
						<li>
							<Link href="/">Press</Link>
						</li>
						<li>
							<Link href="/">Blog</Link>
						</li>
					</ul>
				</div>

				<div className="footer-section">
					<h3 className="footer-title">Customer Service</h3>
					<ul className="footer-links">
						<li>
							<Link href="/">Contact Us</Link>
						</li>
						<li>
							<Link href="/">Shipping Info</Link>
						</li>
						<li>
							<Link href="/">Returns</Link>
						</li>
						<li>
							<Link href="/">FAQ</Link>
						</li>
					</ul>
				</div>

				<div className="footer-section">
					<h3 className="footer-title">Legal</h3>
					<ul className="footer-links">
						<li>
							<Link href="/">Privacy Policy</Link>
						</li>
						<li>
							<Link href="/">Terms of Service</Link>
						</li>
						<li>
							<Link href="/">Cookie Policy</Link>
						</li>
						<li>
							<Link href="/">Accessibility</Link>
						</li>
					</ul>
				</div>

				<div className="footer-section">
					<h3 className="footer-title">Follow Us</h3>
					<ul className="footer-links">
						<li>
							<Link href="/">Facebook</Link>
						</li>
						<li>
							<Link href="/">Twitter</Link>
						</li>
						<li>
							<Link href="/">Instagram</Link>
						</li>
						<li>
							<Link href="/">LinkedIn</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer-bottom">
				<p>
					&copy; {new Date().getFullYear()} Store. All rights
					reserved.
				</p>
			</div>
		</footer>
	)
}
