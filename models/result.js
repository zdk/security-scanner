module.exports = (sequelize, type) => {
  const ResultSchema = sequelize.define('Result', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: type.STRING,
    repository_name: type.STRING,
    findings: type.STRING,
    queue_at: {
      type: 'TIMESTAMP',
      defaultValue: type.NOW,
      allowNull: false,
    },
    scanning_at: {
      type: 'TIMESTAMP',
      defaultValue: type.NOW,
      allowNull: false,
    },
    finished_at: {
      type: 'TIMESTAMP',
      defaultValue: type.NOW,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
  return ResultSchema;
};

// Expected Schema
// Id: any type of unique id
// Status: "Queued" | "In Progress" | "Success" | "Failure"
// RepositoryName: string
// Findings: JSONB, see example
// QueuedAt: timestamp
// ScanningAt: timestamp
// FinishedAt: timestamp
