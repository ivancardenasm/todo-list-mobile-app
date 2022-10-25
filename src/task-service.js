import * as SQLite from "expo-sqlite";
import {DATABASE_NAME} from "./constans";
import { logger } from "react-native-logs";

const log = logger.createLogger();

const TaskService = class {

    constructor() {
        this.db = SQLite.openDatabase('database.bd');
        this.db.transaction(transaction => {
            transaction.executeSql(
                `CREATE TABLE IF NOT EXISTS ${DATABASE_NAME} (_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status TEXT)`
            )
        });
    };

    defaultErrorCallback = (_transactionObj, error) => log.error(error);

    fetchData = (callback) => this.db.transaction(transaction => {
        transaction.executeSql(`SELECT * FROM ${DATABASE_NAME}`, null,
            (transactionObj, {rows: {_array}}) => callback(_array), this.defaultErrorCallback)
    });

    create = (name, status, callback) => this.db.transaction(transaction => {
        transaction.executeSql(`INSERT INTO ${DATABASE_NAME} (name, status) values (?, ?)`, [name, status],
            callback, this.defaultErrorCallback)
    });

    updateStatus = (_id, newStatus, callback) => this.db.transaction(transaction => {
        transaction.executeSql(`UPDATE ${DATABASE_NAME} SET status = ? WHERE _id = ?`, [newStatus, _id],
            callback, this.defaultErrorCallback)
    });

    delete = (_id, callback) => this.db.transaction(transaction => {
        transaction.executeSql(`DELETE FROM ${DATABASE_NAME} WHERE _id = ? `, [_id],
            callback, this.defaultErrorCallback)
    });
};

export default TaskService;