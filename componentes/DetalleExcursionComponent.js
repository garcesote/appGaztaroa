import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from '@rneui/themed';
import { EXCURSIONES } from '../comun/excursiones';
import { COMENTARIOS } from '../comun/comentarios';
import { ListItem } from '@rneui/base';
import { baseUrl } from '../comun/comun';

function RenderExcursion(props) {

    const excursion = props.excursion;
    
        if (excursion != null) {
            return(
            <Card>
              <Card.Title>{excursion.nombre}</Card.Title>
              <Card.Divider/>
              <Card.Image source={{uri: baseUrl + excursion.imagen}}></Card.Image>
              <Text style={{margin: 20}}>
                {excursion.descripcion}
              </Text>
              <Icon
                    raised
                    reverse
                    name={ props.favorita ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorita ? console.log('La excursión ya se encuentra entre las favoritas') : props.onPress()}
                />
            </Card>
            );
        }
        else {
            return(<View></View>);
        }
}



const renderListItem = ({item, index}) => {
    return (
        <ListItem
        key={index}
        bottomDivider>
            <ListItem.Content>
                <ListItem.Title>Autor: {item.autor}</ListItem.Title>
                <ListItem.Title>Valoracion: {item.valoracion}</ListItem.Title>
                <ListItem.Subtitle>{item.comentario}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem> 
    );
};

function RenderComentario(props) {

    const comentarios = props.comentarios;
    
    return (
        <Card>
        <Card.Title>Comentarios</Card.Title>
        <Card.Divider/>
            <FlatList 
                data={comentarios}
                renderItem={renderListItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}



class DetalleExcursion extends Component {
        
        constructor(props) {
            super(props);
            this.state = {
                excursiones: EXCURSIONES,
                coments: COMENTARIOS,
                favoritos: []
            };
        }

        marcarFavorito(excursionId) {
            this.setState({favoritos: this.state.favoritos.concat(excursionId)});
        }

        
        render(){
            const {excursionId} = this.props.route.params;
            
            return(
            <ScrollView>
                <RenderExcursion 
                    excursion={this.state.excursiones[+excursionId]}
                    favorita={this.state.favoritos.some(el => el === excursionId)}
                    onPress={() => this.marcarFavorito(excursionId)}
                />
                <RenderComentario
                    comentarios={this.state.coments.filter((comentario) => comentario.excursionId === excursionId)}
                />
            </ScrollView>
);
        }
}

export default DetalleExcursion;
