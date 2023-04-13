import { Component } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-elements"

class Contacto extends Component {
    
    render() {
        return(
            <View>
            <Card>
                <Card.Title>Información de contacto</Card.Title>
                <Card.Divider/>
                <Text style={{margin: 20}}>
                    {"Kaixo Mendizale! \n\nSi quieres participar en las salidas de montaña que organizamos o quieres hacerte soci@ de Gaztaroa, puedes contactar con nosotros a través de diferentes medios. \n Puedes llamarnos por teléfono los jueves de las semanas que hay salida (de 20:00 a 21:00). \n\nTambién puedes ponerte en contacto con nosotros escribiendo un correo electrónico, o utilizando la aplicación de esta página web. Y además puedes seguirnos en Facebook. \n\nPara lo que quieras, estamos a tu disposición! \n\nTel: +34 948 277151 \n\nEmail: gaztaroa@gaztaroa.com"}
                </Text>
            </Card>
        </View>
        )
    }
}

export default Contacto;