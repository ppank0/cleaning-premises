const sequelize = require('../db')
const{DataTypes}=require('sequelize')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email: {type:DataTypes.STRING, unique:true},
    password: {type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue:"USER"},
})

const Brigade = sequelize.define('brigade',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, allowNull:false},
    
})

const Employee = sequelize.define('employee',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, allowNull:false},
    contact: {type:DataTypes.STRING, allowNull:false},
    experience: {type:DataTypes.STRING, allowNull:false},
    url: {type:DataTypes.STRING, unique:true},
})
const Schedule = sequelize.define('schedule',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    date:{type: DataTypes.DATE, allowNull:false},
    time:{type: DataTypes.TIME, allowNull:false},
    room: {type:DataTypes.STRING, allowNull:false},
})

User.hasOne(Employee)
Employee.belongsTo(User)

Brigade.hasMany(Employee)
Employee.belongsTo(Brigade)

Brigade.hasMany(Schedule)
Schedule.belongsTo(Brigade)

module.exports={
    User,
    Brigade,
    Employee,
    Schedule
}

