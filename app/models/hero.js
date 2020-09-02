module.exports = function (sequelize, DataTypes) {
  const Hero = sequelize.define("Hero", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hero_id: DataTypes.INTEGER,
    intel: DataTypes.INTEGER,
    strength: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    durability: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    combat: DataTypes.INTEGER,
    total_power: DataTypes.INTEGER,
    alignment: DataTypes.STRING,
    img_url: DataTypes.STRING,
  });
  return Hero;
};
