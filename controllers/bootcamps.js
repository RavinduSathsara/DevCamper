// @desc Get All bootcamps
// @route GET /api/v1/bootcamps
// @access Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ sucess: true, dsg: "Show all bootcamps" });
};

// @desc Get a bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    dsg: `Get  bootcamp id ${req.params.id}`,
  });
};

// @desc Create a bootcamp
// @route POST /api/v1/bootcamps/:id
// @access Private

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, dsg: "Create all bootcamps" });
};

// @desc Update a bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, dsg: `Update bootcamp id ${req.params.id}` });
};

// @desc Deletebootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, dsg: `Delete bootcamp id ${req.params.id}` });
};
