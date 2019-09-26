import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



import Card from '../components/Card';

import OVW from '../assets/images/OVW.jpg';
import movie from '../assets/images/movie.jpg';
import car from '../assets/images/car.jpg';


class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    id: 0,
                    title: 'Fuze',
                    subTitle: 'Team constructor application for Overwatch',
                    imgSrc: OVW,
                    link: 'https://blooming-escarpment-23380.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'MovieMe',
                    subTitle: 'Application to find and save movies on Netflix',
                    imgSrc: movie,
                    link: 'NA',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Park It',
                    subTitle: 'Parking AirBnB',
                    imgSrc: car,
                    link: 'NA',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }



    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    

    render () {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;