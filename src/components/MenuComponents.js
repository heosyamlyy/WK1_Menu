import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log("Constructor is mounted")
    }

    componentDidMount() {
        console.log('compoent did mounted');
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
        
        
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <div>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    
                </div>
                
                
            );
        else
            return (
                <div></div>
            );
    }

    

    renderDishInfo(dish) {
        if (dish != null)
            
            
            return (
                
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle>Comments</CardTitle>
                            <CardText>{dish.comments[0].comment}</CardText>
                            <CardText>--{dish.comments[0].author}, {dish.comments[0].date.substring(0,10)}</CardText>

                            <CardText>{dish.comments[1].comment}</CardText>
                            <CardText>--{dish.comments[1].author}, {dish.comments[1].date.substring(0, 10)}</CardText>

                            <CardText>{dish.comments[2].comment}</CardText>
                            <CardText>--{dish.comments[2].author}, {dish.comments[2].date.substring(0, 10)}</CardText>

                            <CardText>{dish.comments[3].comment}</CardText>
                            <CardText>--{dish.comments[3].author}, {dish.comments[3].date.substring(0, 10)}</CardText>

                            <CardText>{dish.comments[4].comment}</CardText>
                            <CardText>--{dish.comments[4].author}, {dish.comments[4].date.substring(0, 10)}</CardText>

                        </CardBody>
                    </Card>
                </div>
            );
            
        else
            return (
               <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDishInfo(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}


export default Menu;