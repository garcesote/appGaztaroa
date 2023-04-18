import { Component } from "react";
import { ACTIVIDADES } from "../comun/actividades";
import { Avatar, Card, ListItem, Text } from "react-native-elements";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { baseUrl } from "../comun/comun";

class QuienesSomos extends Component{

    constructor(props){
        super(props);
        this.state = {
            actividades: ACTIVIDADES
        }
    }

    render(){
        
        const renderListItem = ({item, index}) => {
            return (
                <ListItem
                key={index}
                bottomDivider>
                    <Avatar source={{uri: baseUrl + item.imagen}} />
                    <ListItem.Content>
                        <ListItem.Title>{item.nombre}</ListItem.Title>
                        <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem> 
            );
        };

        return(
            <SafeAreaView>
                <ScrollView>
                    <Card>
                        <Card.Title>Un poco de historia</Card.Title>
                        <Card.Divider/>
                        <Text style={{margin: 20}}>
                            {"El nacimiento del club de montaña Gaztaroa se remonta a la primavera de 1976 cuando jóvenes aficionados a la montaña y pertenecientes a un club juvenil decidieron crear la sección montañera de dicho club. Fueron unos comienzos duros debido sobre todo a la situación política de entonces. Gracias al esfuerzo económico de sus socios y socias se logró alquilar una bajera. Gaztaroa ya tenía su sede social. \n\nDesde aquí queremos hacer llegar nuestro agradecimiento a todos los montañeros y montañeras que alguna vez habéis pasado por el club aportando vuestro granito de arena.\n\nGracias!"}
                        </Text>
                    </Card>
                    <Card>
                        <Card.Title>Actividades y recursos</Card.Title>
                        <Card.Divider/>
                            <FlatList 
                                data={this.state.actividades}
                                renderItem={renderListItem}
                                keyExtractor={item => item.id.toString()}
                            />
                    </Card>
                </ScrollView>
            </SafeAreaView>
        )
    }
    

}

export default QuienesSomos;