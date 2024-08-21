import mysql from "mysql2"

class Database {

    static pool = undefined;

    constructor() {

        if (this.pool !== undefined) return;

        this.pool = mysql.createPool({
            host: process.env.MYSQL_HOST, 
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: "todo_app"
        }).promise();

    }

    async runQuery(query, params) {

        const [rows] = await this.pool.query(query, params);
        return rows;

    }

}

function getDatabase() {

    return new Database();

}

export default getDatabase;
