module.exports = function(sequelize, DataTypes) {
	return sequelize.define('todo', {
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 8]
			}
		},
		categories: {
			type: DataTypes.ARRAY(DataTypes.TEXT),
			allowNull: false,
			defaultValue: false
		}
	});
};