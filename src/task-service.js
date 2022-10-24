import * as SQLite from "expo-sqlite";
import {DATABASE_NAME} from "./constans";

const TaskService = class {

    constructor() {
        this.db = SQLite.openDatabase('database.bd');

        this.db.transaction(transaction => {
            transaction.executeSql(
                `CREATE TABLE IF NOT EXISTS ${DATABASE_NAME} (_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status TEXT)`
            )
        })
    };

    fetchData = (callback) => this.db.transaction(transaction => {
        transaction.executeSql(`SELECT * FROM ${DATABASE_NAME}`,
            null,
            (transactionObj, {rows: {_array}}) => callback(_array),
            (transactionObj, error) => console.log('Error ', error)
        )
    });

    create = (name, status, callback) => this.db.transaction(transaction => {
        transaction.executeSql(`INSERT INTO ${DATABASE_NAME} (name, status) values (?, ?)`, [name, status],
            (transactionObj, resultSet) => callback(transactionObj, resultSet),
            (transactionObj, error) => console.log('Error', error))
    });

    updateStatus = (_id, newStatus, callback) => {
        console.log('update status ', newStatus, _id)
        this.db.transaction(transaction => {
            transaction.executeSql(`UPDATE ${DATABASE_NAME} SET status = '?' WHERE _id = ?`, [newStatus, _id],
                (transactionObj, resultSet) => callback(transactionObj, resultSet),
                (transactionObj, error) => console.log('ERROR: ', error)
                )
        })
    }

    delete = (_id, callback) => this.db.transaction(transaction => {
        transaction.executeSql(`DELETE FROM ${DATABASE_NAME} WHERE _id = ? `, [_id],
            (transactionObj, resultSet) => callback(transactionObj, resultSet))
    });
};

export default TaskService;