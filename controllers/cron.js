const cronDao = require('../dao/cron');

const fileHelper = require('../helpers/file');
const cronHelper = require('../helpers/cron');

exports.getCronList = async (_, res) => {
  try {
    const cronList = await cronDao.listCron();
    return res.status(200).json({
      data: cronList,
    });
  } catch (ex) {
    return res.status(ex.statusCode || 500).json({
      message: ex.message,
    });
  }
}

exports.createNewCron = async (req, res) => {
  try {

    const {
      name,
      cronExpression,
      requestMethod,
      requestUrl,
      requestPayload,
    } = req.body;

    const cronFound = await cronDao.getCronByName(name)

    if (cronFound) {
      throw new Error('Cron already exists');
    }

    if (!cronHelper.checkURLValid(requestUrl)) {
      throw new Error('Url is invalid');
    }

    const cronCreated = await cronDao.createCron({
      name,
      cronExpression,
      requestMethod,
      requestUrl,
      requestPayload,
    });

    fileHelper.createFileForCron(cronCreated);

    return res.status(200).json({
      data: cronCreated,
    });

  } catch (ex) {
    return res.status(ex.statusCode || 500).json({
      message: ex.message,
    });
  }
}

exports.updateCron = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      cronExpression,
      isActive,
    } = req.body;

    const cron = await cronDao.getCronById(id);

    if (!cron) {
      throw new Error('Cron does not exists');
    }

    await cronDao.updateCron({
      id,
      name,
      cronExpression,
      isActive,
    });

    const cronAfterUpdate = await cronDao.getCronById(id);
    fileHelper.updateFileForCron(cronAfterUpdate);

    return res.status(200).json({
      message: 'Cron updated successfully',
    });

  } catch (ex) {
    return res.status(ex.statusCode || 500).json({
      message: ex.message,
    });
  }
}

exports.deleteCron = async (req, res) => {
  try {

    const { id } = req.params;

    const cronFound = await cronDao.getCronById(id);

    if (!cronFound) {
      throw new Error('Cron does not exists');
    }

    await cronDao.deleteCron(id);

    fileHelper.deleteFileForCron(id);

    return res.status(200).json({
      message: 'Cron deleted successfully',
    });

  } catch (ex) {
    return res.status(ex.statusCode || 500).json({
      message: ex.message,
    });
  }
}
