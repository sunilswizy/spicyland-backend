import sequelize from '../src/config/sequelize';
import { DataType } from 'sequelize-typescript';

const Categories = 
    sequelize.define('categories', {
          id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          title: {
            type: DataType.STRING,
            unique: true
          },
          imgUrl: {
            type: DataType.STRING
          },
          createdAt: {
            type: DataType.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: DataType.DATE,
            allowNull: false,
          },
      });


export default Categories;