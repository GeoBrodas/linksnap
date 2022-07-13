const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function handler(req, res) {
  // protect apt route using getSession
  switch (req.method) {
    case 'GET':
      return getProfile(req, res);

    case 'POST':
      return postProfile(req, res);

    default:
      return res.status(405).json({
        status: 405,
        message: 'Method not allowed',
      });
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
  const user = await prisma.user.findUnique({
    where: {
      github: github,
    },
  });

  if (user.length !== 0) {
    // update user profile
    try {
      await prisma.user.update({
        where: {
          github: github,
        },
        data: {
          name: name,
          occupation: occupation,
          country: country,
          email: email,
          linkedin: linkedin,
          facebook: facebook,
          twitter: twitter,
          devto: devto,
          hashnode: hashnode,
        },
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: 'Internal server error',
      });
    } finally {
      await prisma.$disconnect();
    }

    return res.status(200).json({
      message: 'Profile updated',
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
