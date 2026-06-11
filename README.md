🛍️ Souled Store

A fan merchandise e-commerce website built as a frontend learning project. Includes a home page, collections page with search/filter, and a contact page.

***
🔧 Tech Stack

Technology	Usage
HTML5	Page structure and semantic markup
CSS3	Custom styles via project.css
Tailwind CSS (CDN)	Utility-first responsive styling
JavaScript (Vanilla)	Interactivity and DOM manipulation
Font Awesome	Icons
	***
📁 Project Structure

souled-store/
├── index.html          # Home page
├── collection.html     # Collections page with search & filters
├── contactus.html      # Contact Us page
├── project.css         # Custom CSS styles
├── event.js            # Shared JS — offer bar close, image slider
├── collection.js       # Collections page — checkbox filters
└── images/             # All product and banner images

***
📄 Pages

index.html — Home
Offer bar with close button
Sticky header with nav links
Auto-sliding image carousel
Official Merch brand logos section
Features strip (cashback, returns, shipping)
New Arrival product grid
Most Wanted horizontal scroll section
Limited offer banner
Newsletter signup
Footer with quick links and newsletter input

collection.html — Collections
Search bar that filters products in real time by category, colour, size, or name
Sidebar with checkbox filters (category, colour, size) — visible on desktop, hidden on mobile
Responsive product grid (2 columns on mobile, 3 on desktop)
"No products found" message when search has no match

contactus.html — Contact Us
Contact info cards (phone, email, address)
Social media links
Contact form (first name, last name, email, subject, message)

***
✨ Features

✅ Fully mobile responsive across all 3 pages
✅ Image slider with prev/next controls
✅ Real-time product search (filters by data-category, data-color, data-size, and product name)
✅ Offer bar dismiss button
✅ Hover effects on product cards, nav links, and buttons
✅ Sticky header on scroll

***
🚀 Getting Started

No build tools or npm required. Just open in a browser.

# Clone the repo
git clone https://github.com/your-username/souled-store.git

# Open in browser
open index.html

Or simply double-click index.html to run locally.

> Note: Images use .avif format. Make sure your browser supports it (all modern browsers do).

***
📱 Responsive Breakpoints

Uses Tailwind CSS default breakpoints:

Breakpoint	Width
Mobile (default)	< 640px
sm	≥ 640px
md	≥ 768px
lg	≥ 1024px
	***
🙋 Author

Parthasarathi M  
Frontend Developer  
Chennai, Tamil Nadu, India  
📧 parthasarathi0404@gmail.com

***
📌 Note

This is a personal learning project built to practise HTML, CSS, Tailwind CSS, and JavaScript. Not affiliated with the real Souled Store brand.
