import React from 'react';
import {ScrollView,
    Text} from 'react-native';
import PropTypes from 'prop-types';
import Card from './card';



const ShowItem = (item) => (
    <Card
    key={item.title}
    title={item.title}
    urlimage={item.urlimage}
    description={item.description}
    url={item.url}></Card>
); 

//FUNCION DE COMPONENTE CARD SET
const CardSet = ({items}) => (
    <ScrollView>
        {
            items.map(ShowItem)
        }
        
    </ScrollView>
);

CardSet.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        urlimage: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired
};

export default CardSet;