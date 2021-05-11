const db = require('../utils/database_27');

const Clothing_27 = class Clothing_27{
    constructor(id, title, cat_id, price, remote_url, local_url){
        this.id = id;
        this.title = title;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }
    // READ
    static fetchAll() {
        return db.execute('SELECT * from clothing_27');
        //return db.query("SELECT * from category_27")

    }

    static fetchProductByCategory(cid){
        return db.execute('SELECT * from clothing_27 where cat_id = ?', [cid])
    }

}

module.exports = Clothing_27;