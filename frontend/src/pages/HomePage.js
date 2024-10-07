import { React } from 'react';

function HomePage() {
    return (
        <>
            <h2>Home Page</h2>
            <article>
                <h3>Career Goals</h3>
                <p>
                    I am studying to computer science in order to become a software developer. 
                    I am still working on trying to figure out what specific fields and areas of interests I 
                    am heading toward, but with a background in mechanical engineering I do have an interest 
                    in robotics and automation. On the other hand, I have enjoyed the purely computer science 
                    side of things and would be very fulfilled working as a full stack developer. I find it 
                    very important to find a career that will allow you to put your schooling to the test, 
                    teach you practical side of computer science, and keep the workload varied and interesting.
                </p>
                <h3>Technologies Used in this Website</h3>
                    <dl>MongoDB</dl>
                        <dd>A database management system used by this website to store json documents containing 
                            the album information displayed on the Albums Page. MongoDB supports the creation, 
                            reading, updating, and deletion of the album data in the database.</dd>
                    <dl>Express.js</dl>
                        <dd>A Node.js web application framework that provides application programming interfaces 
                            (APIs) for web applications. Express supports the ability to get, post, and delete 
                            data as well as define ports and routes for data.</dd>
                    <dl>React</dl>
                        <dd>A framework for frontend applications. React using components that will manipulate 
                            the DOM tree in order to display the user new components while maintaining a single 
                            page application.</dd>
                    <dl>Node.js</dl>
                        <dd>An open sourse runtime environment used to develop server-side and networking 
                            applications.</dd>
            </article>
        </>
    );
}

export default HomePage;