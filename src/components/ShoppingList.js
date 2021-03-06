import React , {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {getItems,deleteItem} from '../actions/itemAction';


import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';


class ShoppingList extends Component {
    
   componentDidMount(){
       console.log("ok")
       this.props.getItems();
   }
   onDeleteClick= id =>{
       this.props.deleteItem(id);
   }
    render(){
        const {items}= this.props.item;
        
        return(
            <Container>
            
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({_id, name})=>(
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem className='List'>
                                    <Button className='remove-btn' color='danger'
                                        onClick={this.onDeleteClick.bind(this,_id)}
                                        >
                                        &times;
                                    </Button>
                                    {name}</ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>    

            </Container>
        )
    }
}
ShoppingList.prototypes={
    getItems:PropTypes.func.isRequired,
    item:PropTypes.object.isRequired
}
const mapStateToProps=(state)=>({
    item:state.item
})
export default connect(mapStateToProps,{getItems,deleteItem}) (ShoppingList);
