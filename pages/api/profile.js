const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function handler(req, res) {
  // protect apt route using getSession
  switch (req.method) {
    case 'GET':
      return getProfile(req, res);

    case 'POST':
      return postProfile(req, res);
  }
}

async function postProfile(req, res) {
  const {
    name,
    occupation,
    country,
    email,
    github,
    linkedin,
    facebook,
    twitter,
    devto,
    hashnode,
  } = req.body;

  if (!name || !occupation || !country || !email || !github)
    return res.status(400).json({
      message: 'Bad request',
    });

  // check if user with github username already exists
  const user = await prisma.user.findMany({
    where: {
      github: github,
    },
  });

  if (user.length !== 0) {
    console.log(user);
    return res.status(400).json({
      message: 'User already exists',
    });
  }

  // create user
  try {
    await prisma.user.create({
      data: {
        name,
        occupation,
        country,
        email,
        github,
        linkedin,
        facebook,
        twitter,
        devto,
        hashnode,
      },
    });

    return res.status(201).json({
      message: 'User created',
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: 'Internal server error',
    });
  } finally {
    await prisma.$disconnect();
  }
}

export default handler;
