const db = require('../utils/database_27');

const Category_27 = class Category_27{
    constructor(id, title, size, remote_url, local_url){
        this.id = id;
        this.title = title;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * from category_27');
        //return db.query("SELECT * from category_27")

    }

}

module.exports = Category_27;