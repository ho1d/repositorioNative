import React, { Component } from 'react';
import { Text, ScrollView, View, FlatList, Safe } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../comun/comun';
import IndicadorActividad from './IndicadorActividadComponent';

const mapStateToProps = state => {
    return {
        actividades: state.actividades
    }
}


function Historia() {
    return (
        <Card>
            <Card.Title>Un poquito de historia</Card.Title>
            <Card.Divider />
            <Text style={{ margin: 10 }}>El nacimiento del club de montaña Gaztaroa se remonta a la primavera de 1976 cuando jóvenes aficionados a la montaña y pertenecientes a un club juvenil decidieron crear la sección montañera de dicho club. Fueron unos comienzos duros debido sobre todo a la situación política de entonces. Gracias al esfuerzo económico de sus socios y socias se logró alquilar una bajera. Gaztaroa ya tenía su sede social.</Text>
            <Text style={{ margin: 10 }}>Desde aquí queremos hacer llegar nuestro agradecimiento a todos los montañeros y montañeras que alguna vez habéis pasado por el club aportando vuestro granito de arena.</Text>
            <Text style={{ margin: 10 }}>Gracias!</Text>
        </Card>
    );
}


class QuienesSomos extends Component {


    render() {

        const renderActividades = ({ item, index }) => {
            return (
                <ListItem
                    key={index}
                    bottomDivider>
                    <Avatar source={{ uri: baseUrl + item.imagen }} />
                    <ListItem.Content>
                        <ListItem.Title>{item.nombre}</ListItem.Title>
                        <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            );
        };
        if (this.props.actividades.isLoading) {

            return (

                <ScrollView>

                    <Historia />

                    <Card title="Actividades y recursos">

                        <IndicadorActividad />

                    </Card>

                </ScrollView>

            );

        }



        else if (this.props.actividades.isLoading) {
            return (
                <ScrollView>
                    <Historia />
                    <Card title="Actividades y recursos">
                        <Text>{this.props.excursiones.errMess}</Text>
                    </Card>
                </ScrollView>
            );
        }

        else {
            return (
                <ScrollView>
                    <Historia />
                    <Card>
                        <Card.Title>"Actividades y recursos"</Card.Title>
                        <Card.Divider />
                        <FlatList
                            data={this.props.actividades.actividades}
                            renderItem={renderActividades}
                            keyExtractor={item => item.id.toString()}
                        />
                    </Card>
                </ScrollView>
            );
        }
    }
}

export default connect(mapStateToProps)(QuienesSomos);