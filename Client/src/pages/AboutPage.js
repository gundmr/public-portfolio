import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title}/>

            <Content>
                    <p>Hello, my name is Rachel. I'm a full stack engineer leveraging a background in Business Intelligence Analytics to build a more intuitive user experience on the web. </p>

                    <p>I'm driven by working on products that delight users, solves complex customer problems with simple solutions, while driving significant business outcomes.</p>

                    <p>While my experience is with MongoDB, JavaScript, React.js and Node.js, I am always striving to learn new things. </p>
                    
                
            </Content>

        </div>
    );
}

export default AboutPage;