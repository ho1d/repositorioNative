import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { baseUrl,  } from '../comun/comun';
import { connect } from 'react-redux';
import {IndicadorActividad} from './IndicadorActividadComponent';

const mapStateToProps = state => {
    return {
        excursiones: state.excursiones,
        cabeceras: state.cabeceras,
        actividades: state.actividades
    }
}

function RenderItem(props) {

    const item = props.item;

    if (props.isLoading) {
        return (
            <IndicadorActividad />
        );
    }

    else if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }

    else {

        const item = props.item;
        const sssss = "https://firebasestorage.googleapis.com/v0/b/appgaztaroadsm.appspot.com/o/imagenes%2Ffederarse.png?alt=media&token=b22d9d00-fe6e-4417-bb51-c5a116fa9152";
        if (item != null) {
            return (

                <Card>
                    <Card.Image source={{uri: (item.imagen)}}>
                        <Card.Title style={styles.cardTitleStyle}>{item.nombre}</Card.Title>
                    </Card.Image>
                    <Text style={{ margin: 20 }}>
                        {item.descripcion}
                    </Text>
                </Card>
            );
        }
        else {
            return (<View></View>);
        }
    }
}

class Home extends Component {

    render() {

        return (
            <ScrollView>
                <RenderItem item={this.props.cabeceras.cabeceras.filter((cabecera) => cabecera.destacado)[0]} />
                <RenderItem item={this.props.excursiones.excursiones.filter((excursion) => excursion.destacado)[0]} isLoading={this.props.excursiones.isLoading}
                    errMess={this.props.excursiones.errMess}
                />

                <RenderItem item={this.props.actividades.actividades.filter((actividad) => actividad.destacado)[0]} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardTitleStyle: {
        color: 'chocolate',
        fontWeight: 'bold',
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
});

export default connect(mapStateToProps)(Home);