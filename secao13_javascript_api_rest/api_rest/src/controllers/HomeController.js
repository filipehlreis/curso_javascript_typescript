class HOmeController {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

export default new HOmeController();
