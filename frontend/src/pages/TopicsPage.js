import { React } from 'react';

function TopicsPage() {
    return (
        <>
            <h2>Web Dev Concepts</h2>
            <nav className="local">
                <a href="#servers">Servers</a>
                <a href="#frontend">Frontend</a>
                <a href="#images">Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#css">CSS</a>
            </nav>
            <article id="servers">
                <h3>Web Servers</h3>
                {/* Explain what index means as it relates to websites and servers. Refer to the concepts you learned about in the Explorations. Write in the third-person style. */}
                <p>
                    The file called the <strong>designated homepage</strong> on a web server is usually saved as <strong>index.html</strong>. This is the file that web applications are configured to return when receiving a GET 
                    request for the "/" as the path to resource.
                </p>
                {/* Explain what can be seen in the browser's Web Dev/Inspector Network tab output screen. What is different about the file's details when viewed from the web server versus the 
                    local computer? */}
                <p>
                    Users can use a browser's <strong>Web Dev/Inspector</strong> to see a page's status, method, IP, policy, language, cache instructions, and browser version. When viewing from a web server, 
                    the file details include all the files associated with the webpage and their statuses, methods, domains, etc. When viewing from the local computer, there is no network 
                    information available.
                </p>
                {/* Explain why the favicon.ico file has a status 200, but the main.css and main.js files do not. */}
                <p>
                    The favicon.ico file has a status 200 because the <strong>GET request</strong> succeeded. The main.css and main.js files have status code 404 because those files do not exist, causing the 
                    GET request to fail.
                </p>
                {/* Explain the parts of the URL to your web file. What is the scheme, the subdomain, the host domain, and the resources? */}
                <p>
                    The parts of the URL, https://web.engr.oregonstate.edu/~negusem/Explorations/, are as follows. The <strong>scheme</strong> is https://, the <strong>subdomains</strong> are web. and engr., the <strong>host domain</strong> is 
                    oregonstate.edu, and the <strong>resource</strong> is /~negusem/Explorations/
                </p>
            </article>
            <article id="frontend">
                <h3>Frontend Design</h3>
                {/* The concept of frontend design, in a <p> paragraph. */}
                <p>
                    <strong>Frontend design</strong> consists of the visual design of a webpage, the graphical user-interface (GUI), and the interactive experience. Essentially, frontend design is concerned with 
                    everything the user can see and interact with on a website. Color schemes, font and typography schemes, photography, icon, and illustration schemes, and navigation systems 
                    are all important considerations when working on frontend design. The frontend design also has a large impact on the <strong>usability</strong> of a website, which is the measure of the 
                    quality of a user's experience when interacting with a product or system. Here are the <strong>five "E"s</strong> of usability down below:
                </p>
                {/* The five "E"s of usability, in a <dl> definition list that separates the topics and descriptions.  */}
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>An effective website is good at helping users meet their goals and providing accurate results.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>An efficient website allows users to perform their desired tasks in the least amount of steps possible, allowing users to get their results quickly.</dd>
                    <dt><strong>Easy to Navigate</strong></dt>
                    <dd>A website that is easy to navigate allows new users to immediately locate and achieve their goals through clicking and searching. Users should be able to remember
                        how to navigate the site on subsequent visits as well.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>A website that is error-free avoids any roadblocks for the user that would cause issues concerning accessibility and availability.</dd>
                    <dt><strong>Enjoyable or Engaging</strong></dt>
                    <dd>A website that is enjoyable to use or engaging for users will satisfy the user's needs and will encourage them to come back.</dd>
                </dl>
                {/* The purpose of each of the page layout tags, in a <p> paragraph. */}
                <p>
                    The <strong>page layout tags</strong> are <strong>block-level elements</strong> that are used to break up the content on a page. Block-level elements typically have a <strong>newline</strong> before and after the element. 
                    These page layout tags don't do much on their own aside from adding newlines before and after the element, but styles can be applied using CSS to make sections different 
                    from one another visually. The page layout tags are header, nav, main, section, article, aside, figure, figcaption, blockquote, footer, and div. The <strong>header element</strong> is used 
                    for the banner of a website and is typically the same for the different pages of the site. The <strong>nav element</strong> is used to for the navigation tools of a site, usually including 
                    the main menu, search, tools, stories, locations, and legal links. The nav element can also be used multiple times in on a site. The <strong></strong>main element is the primary block that 
                    will hold the website's content. The <strong>section element</strong> is used to block off a group of content that is related, but does not stand on its own. The <strong>article element</strong> is typically 
                    used inside the section element and will contain a single specific topic. ID selectors can be used to mark articles when there are multiple articles on the page, allowing 
                    them to be uniquely styled. The <strong>aside element</strong> typically includes content related to an article and floats to either the right or left of the article. The 
                    <strong>figure and figcaption elements</strong> are similar to the aside element, but usually they are reserved for media such as images or movies. The <strong>blockquote 
                    element</strong> is used for extended quotes that are too long for a paragraph and this element stands out from the paragraph element by presenting different visually. The 
                    <strong>footer element</strong> is used below the closing main tag and will typically be used to hold legal information, contact information, links to critical pages, and 
                    the website owner's copyright statement. And finally, the <strong>div element</strong> is used as a placeholder for dynamic content or when the use of the other existing 
                    page layout elements does not make sense. The div element has no styles or 
                    dimensions associated with it.
                </p>
                {/* How anchors link to external content, internal content, and from page-to-page, in an <ol> ordered list.  */}
                <h4>Anchors</h4>
                <ol>
                    <li>
                        <strong>External anchors</strong> are used to create a hyperlink to a URL outside the current website. External anchors are created by using the anchor element and setting the href 
                        attribute to the full URL of the website using an <strong>absolute path</strong>.
                    </li>
                    <li>
                        <strong>Internal anchors</strong> are used to create a hyperlink from one text item to another text item within the same page using an ID. Internal anchors are created by using the 
                        anchor element and setting the href attribute to a hashtag "#" followed by the ID.
                    </li>
                    <li>
                        <strong>Page-to-page anchors</strong> are used to create a hyperlink from one page of a website to another. Page-to-page anchors are created by using the anchor element and setting the 
                        href attribute to the filename of the destination page using a <strong>relative path</strong>.
                    </li>
                </ol>
            </article>
            <article id="images">
                <h3>Optimizing Images</h3>
                {/* What are the 6 major specifications of images for the web?  And why? 
                    Which file formats are most appropriate for photos and for line art? And why? */}
                <p>The 6 major specifications of images for the web are <strong>descriptive file name</strong>, <strong>small file size</strong>, <strong>exact dimensions</strong>, 
                    <strong>correct file format</strong>, <strong>reduced resolution</strong>, and <strong>color mode</strong>. A descriptive file name is important in order to improve search 
                    engine optimization (SEO). It is important to include as much information as possible in the file name, such as who, what, when, and where. Even though the information is 
                    important, it is also important to keep it concise as well. The small file size is important for the load times of the images. It is important to understand when high 
                    resolution images are needed and when lower resolution will work instead. Compression can be used to reduce file sizes, with there being options for Lossy compression 
                    (discards some of the image data, which can cause pixelation) and Lossless (does not degrade the visual quality of the image). Exact dimensions are important for images 
                    because time will be wasted loading images that are larger than their allocated space on a webpage. The correct file format is important because each file format is better 
                    suited for specific types of images (line art vs photos and whether transparency is necessary). Reduced resolution is important to consider because monitors can render from 
                    72 to 300+ pixels per inch (ppi), so multiple image sizes should be provided to accommodate this range. Finally, color mode is important to consider because the different file 
                    formats will use different color modes. RGB color mode is used for .PNG, .JPG, .SVG, and .WebP files and Indexed color mode is used for .GIF and .PNG sometimes.</p>
                <p>When it comes to line art and photos, the different file formats have their strengths and weaknesses. SVG, GIF, and PNG file formats are best for line art and JPG and WebP 
                    file formats are best for photos. SVG files are mathematically-derived and marked with XML which makes them best suited for 2-D interactive or animated images. GIF files 
                    have edges that anti-alias to a single background matte color making them best for line art as well. PNGs are best for biomorphic shapes, line art, and solid colors. On the 
                    photo side of things, JPG files are well-equipped to deal with the detail in photographic images and can be compressed down to small file sizes. Also, WebP files can be 
                    compressed down to small file sizes too.</p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                {/* How do browsers and devices use favicons? */}
                <p>Favicons are image files that are used by a site as some sort of identifying logo. They will be displayed on the left-most side of the browser tab, as an app symbol, as a 
                    company logo, etc. And they can be saved as a GIF, PNG, ICO, or SVG file. Favicons will be modified and saved in multiple file formats in order to meet the need of the 
                    specific device or browser. A browser will pull the correct Favicon symbol to use for the bookmark, tab, or search engine result. Devices will also pull the correct Favicon 
                    file to display as the app's symbol.</p>
            </article>
            <article id="css">
                <h3>Cascading Stylesheets</h3>
                {/* What are the main reasons to incorporate stylesheets in websites and apps?
                    What are the 5 ways to incorporate styles? And why? */}
                <p><strong>Cascading Style Sheets (CSS)</strong> are used to modify the look and behavior of webpages and all of their components. The main purpose of modifying the look and behavior is to improve a webpage's usability, readability, and legibility while also focusing on the brand requirements. There are 5 ways to incorporate styles into a webpage. The first way is through an <strong>externally linked or imported .CSS file</strong>. Externally linking or importing a .CSS file is typically the best way to go about incorporating a style, and it is done by creating a separate stylesheet file and linking to it on each .html file or importing it into each .html sheet. Using an externally linked stylesheet will have the lowest priority among the style methods with imported external stylesheets right above it in priority, but these methods will make sure all the style code is in one place. The second way to incorporate style is by <strong>embedding the CSS code in a style tag</strong>. Embedded and internal level stylesheets will have priority over linked and imported stylesheets, as mentioned before. The third way is to type the style code <strong>inline within an element using an attribute and value</strong>. The inline style definition will have the highest priority over the embedded/internal stylesheets and the linked/imported external stylesheets. This makes this method of styling good for one-off changes that you want to make sure are reflected in the webpage due to the high priority. The fourth way is to use <strong>JavaScript template literals within a JavaScript function</strong>. And the fifth way is to manipulate the <strong>Document Object Model in regular JavaScript</strong>.</p>
            </article>
        </>
    );
}

export default TopicsPage;