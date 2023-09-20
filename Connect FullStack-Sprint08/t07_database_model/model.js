const pool = require('./db');

class Model {
    constructor(attributes) {
        this.attributes = attributes;
    }

    static async find(id) {
        const query = "SELECT * FROM your_table WHERE id = ?";
        try {
            const connection = await pool.promise().getConnection();
            const [results] = await connection.query(query, [id]);
            connection.release();

            if (results.length === 0) {
            return null;
            }
            const modelData = results[0];
            return new Model(modelData);
        } catch (error) {
            throw error;
        }
    }

    async delete() {
        const id = this.attributes.id;
        const existingModel = await Model.find(id);

        if (!existingModel) {
            throw new Error(`Model with ID ${id} does not exist.`);
        }
        const deleteQuery = "DELETE FROM your_table WHERE id = ?";

        try {
            const connection = await pool.promise().getConnection();
            await connection.query(deleteQuery, [id]);
            connection.release();
        } catch (error) {
            throw error;
        }
    }
    async save() {
        const id = this.attributes.id;

        const existingModel = await Model.find(id);
    
        const insertQuery = "INSERT INTO your_table SET ?";
        const updateQuery = "UPDATE your_table SET ? WHERE id = ?";
    
        try {
          const connection = await pool.promise().getConnection();
    
          if (!existingModel) {
            await connection.query(insertQuery, [this.attributes]);
          } else {
            await connection.query(updateQuery, [this.attributes, id]);
          }
    
          connection.release();
        } catch (error) {
          throw error;
        }
      }
}

module.exports = Model;
