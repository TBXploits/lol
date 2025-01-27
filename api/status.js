module.exports = (req, res) => {
  const videoStatus = "OK";
  const statusCode = 200;

  const jsonResponse = {
    video: videoStatus,
    owner: "TBX",
    status: statusCode
  };

  res.status(200).json(jsonResponse);
};
