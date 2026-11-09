# Changelog

## [1.0.0] - 2026-09-01

### Created
- About Us page
- Contact page
- Enquiry page 
- Gallery page
- Products page
- Index page

### Added
- Basic HTML for all of the pages
- Images to gallery and products page
- Grid table for storing information 
- Footers to each page
- Interactive Map locations

### Fixed 
- Broken image links
- Uneven grid table
- Fixed navigation links

## - 2026-09-24

### Created
- Created external stylesheet

### Added
- Integrated root visual identity palette metrics and font variable allocated 
- Link from stylesheet to all pages


### Fixed 
- Fixed footer into pleace at bottom of the page
- Google Font url to get correct font
- Image sizing 

## - 2026-10-04

### Added
- New navigation bar to all pages


## - 2026-10-05

### Fixed 
 - Footer that broke again so I added a style that would nail it to the bottom of the page
 - Bullet points that dissapeared 

### Added
- Added responsive design layout so that website can function on smaller devices


## - 2026-11-07

### Fixed
- **CSS Typography Bug:** Formally defined the missing `--font-body` custom variable inside the `:root` block to resolve rendering errors on text and paragraph elements across all pages.
- **Style Consolidation:** Merged duplicate, conflicting layout rules for body text and paragraphs into unified style blocks to ensure clean inheritance.
- **Mobile Responsive Bug Fix:** Corrected a selector syntax error by applying the missing dot prefix to the `.nav-container` class rule inside the mobile viewport breakpoint block.
- **Responsive Typography Configuration:** Implemented responsive typography scaling parameters for heading levels (`h1`, `h2`, `h3`) and content nodes to maximize text legibility on mobile viewports.
- **Grid Layout Adaptation:** Fluidly downscaled `.product-grid` and `.gallery-grid` structures to a single-column layout stack on small viewports to prevent element crunching.


### Added
- **Style Optimization:** Updated `.card-img-wrapper` to feature a explicit standard height threshold and parameterized `.card-img-wrapper img` settings to process image asset sizes dynamically across grid columns.
- **Gallery Refactoring:** Stripped the old table elements from `gallery.html`. Created a modern CSS Grid layout (`.gallery-grid`) enclosing 9 specialized anime collectible showcase items to ensure clean visual flow across variable viewports.
- **Form Interaction Engines:** Developed a unified JavaScript file (`script.js`) implemented on both `contact.html` and `enquiry.html`. The framework intercepts standard submission loops, prevents unexpected window refreshes, and triggers an absolute DOM manipulation sweep to display a responsive success confirmation card component.

### Changed
- **Form Interface Modernization:** Redesigned the product request layout (`enquiry.html`) by removing ancient raw fieldset boundaries and implementing standard flat dark-mode cards with stylized padding.
- **Input Architecture:** Re-engineered native inputs, drop-downs, and text areas with modern focus states (`box-shadow`), explicit alignment tokens, and introduced critical data fields for anime collectors (Manufacturer origin and Target Budget tracks).
- **Contact Alignment Corrections:** Implemented inline flexible block parameters on the layout wrapper to secure side-by-side facility map visualization pairs and fully re-anchored all primary business communications channels.

## - 2026-11-08

### Added
- **SEO Metadata Framework:** Integrated search engine optimization variables across all application pages by provisioning page-specific `<meta name="description">` blocks and targeted indexing keyword tokens to maximize crawl fidelity.


### Changed
 Redesigned `about.html` into a professional layout. Encapsulated text lines within dark theme container frames (`.collectible-card`), arranged mission and vision parameters side-by-side using Flexbox wraps, and applied high-contrast borders onto team curator items.