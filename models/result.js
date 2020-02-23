module.exports = (sequelize, type) => {
  const ResultSchema = sequelize.define('Result', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: type.STRING,
    repositoryName: type.STRING,
    findings: type.JSONB,
    queuedAt: {
      type: 'TIMESTAMP',
      defaultValue: type.NOW,
      allowNull: false,
    },
    scanningAt: {
      type: 'TIMESTAMP',
      defaultValue: type.NOW,
      allowNull: false,
    },
    finisheAt: {
      type: 'TIMESTAMP',
      defaultValue: type.NOW,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
  return ResultSchema;
};
