module.exports = function (sequelize, DataTypes) {
	var Items = sequelize.define(
		"Items", {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			},
			itemName: {
				type: DataTypes.STRING,
				allowNull: false,
				required: true
			},
			category: {
				type: DataTypes.STRING,
				allowNull: false,
				required: true
			},
			expDate: {
				type: DataTypes.DATE,
				allowNull: false,
				required: true
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: DataTypes.NOW
			},
			hasExpired: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				required: true
			}
		}, {


			tableName: "Items"
		});

	Items.associate = function (models) {

		Items.belongsTo(models.Person, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Items;
};
