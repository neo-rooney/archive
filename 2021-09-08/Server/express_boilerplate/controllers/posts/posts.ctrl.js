const models = require('../../models');

exports.get_posts = async (req, res) => {
  const paginate = require('express-paginate');
  const [posts, totalCount] = await Promise.all([
    models.Posts.findAll({
      limit: req.query.limit,
      offset: req.offset,
      order: [['createdAt', 'desc']],
    }),
    models.Posts.count(),
  ]);
  const pageCount = Math.ceil(totalCount / req.query.limit);
  const pages = paginate.getArrayPages(req)(4, pageCount, req.query.page);

  res.json({ posts });
  try {
  } catch (e) {
    res.json(e);
  }
};
exports.get_post_detail = async (req, res) => {
  try {
    const post = await models.Posts.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (post) {
      res.json(post);
    } else {
      res.send('Can not find post');
    }
  } catch (e) {
    res.json(e);
  }
};

exports.post_post_detail = async (req, res) => {
  try {
    await models.Posts.create(req.body);
    res.send({
      message: 'success',
    });
  } catch (e) {
    res.json(e);
  }
};

exports.edit_post_detail = async (req, res) => {
  try {
    await models.Posts.update(req.body, {
      where: { id: req.params.id },
    });
    res.send({
      message: 'success',
    });
  } catch (e) {
    res.json(e);
  }
};

exports.delete_post_detail = async (req, res) => {
  try {
    await models.Posts.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send({
      message: 'success',
    });
  } catch (e) {
    res.json(e);
  }
};

exports.post_tag = async (req, res) => {
  try {
    const tag = await models.Tag.findOrCreate({
      where: {
        name: req.body.name,
      },
    });
    const post = await models.Posts.findByPk(req.body.post_id);
    const status = await post.addTag(tag[0]);
    res.json({
      status: status,
    });
  } catch (e) {
    res.json(e);
  }
};

exports.delete_tag = async (req, res) => {
  try {
    const post = await models.Posts.findByPk(req.params.post_id);
    const tag = await models.Tag.findByPk(req.params.tag_id);

    const result = await post.removeTag(tag);

    res.json({
      result: result,
    });
  } catch (e) {
    res.json(e);
  }
};

exports.search_post = async (req, res) => {
  try {
    const posts = await models.Posts.findAll({
      include: ['Tag'],
      where: {
        ...('name' in req.query && req.query.name
          ? {
              [models.Sequelize.Op.or]: [
                models.Sequelize.where(models.Sequelize.col('Tag.name'), {
                  [models.Sequelize.Op.like]: `%${req.query.name}%`,
                }),
                {
                  title: {
                    [models.Sequelize.Op.like]: `%${req.query.name}%`,
                  },
                },
              ],
            }
          : ''),
      },
    });
    res.json({
      posts,
    });
  } catch (e) {
    res.json(e);
  }
};
