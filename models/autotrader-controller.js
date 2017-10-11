//CONTROLLER

module.exports = function(sequelize, DataTypes) {
  var trades = sequelize.define("trades", {
    make: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlphanumeric: true
      }
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlphanumeric: true
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true
      }
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlpha: true
      }
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlpha: true
      }
    },
    style: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlpha: true
      }
    },
    mpg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isAlpha: false,
        contains: '/'
      }
    },
    engine: {
      type: DataTypes.STRING,
      allowNull: false
    },
    transmission: {
      type: DataTypes.STRING,
      allowNull: false
    },
    drivetype: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['automatic', 'Automatic', 'manual', 'Manual']],
        isAlpha: true
      }
    },
    features: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 150],
        isAlpha: true
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 500],
        isAlpha: true
      }
    },
    interest: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100],
        isAlphanumeric: true
      }
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [7, 11],
        isNumeric: true
      }
    }
  });
  return trades;
};
