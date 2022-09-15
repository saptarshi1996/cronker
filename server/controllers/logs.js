const logDao = require('../dao/logs');

exports.getCronLogs = async (req, res) => {
  try {
    const { id } = req.params;
    const logs = await logDao.getLogs({ cronId: id });
    return res.status(200).json(logs);
  } catch (ex) {
    return res.status(ex.statusCode || 500).json({
      message: ex.message,
    });
  }
};
