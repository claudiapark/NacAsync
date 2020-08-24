import AsyncStorage from '@react-native-community/async-storage';

const insertString  = (key, value, callback = null)  => {
    try {
        AsyncStorage.setItem(key, value, callback);
    } catch ( e ) {
        throw new Error('Não foi possível inserir os dados!');
    }
}

const insertObject = (key, value, callback = null) => {
    try {
        const jsonValue = JSON.stringify(value);
        insertString(key, jsonValue, callback);
    } catch ( e ) {
        throw new Error('Não foi possível inserir um objeto!');
    }
}

const read = (key, callback = null) => {
    try {
        AsyncStorage.getItem(key, callback);
    } catch ( e ) {
        throw new Error('Não foi possível realizar a leitura!');
    }
}

const remove = (key, callback = null) => {
    try {
        AsyncStorage.removeItem(key, callback);
    } catch ( e ) {
        throw new Error('Não foi possível excluir o registro do banco!');
    }
}

const clear = (callback = null) => {
    try {
        AsyncStorage.clear(callback);
    } catch ( e ) {
        throw new Error('Não foi possível limpar o banco!');
    }
}

export {clear, insertObject, insertString, read, remove};