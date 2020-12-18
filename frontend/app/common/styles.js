import React from 'react';
import { StyleSheet } from 'react-native';
import colors from './colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mt1: {
        marginTop: 10
    },
    mt2: {
        marginTop: 20
    },
    mt3: {
        marginTop: 30
    },
    wrapper: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.light
    },
    center: {
        alignItems: "center"
    }
});