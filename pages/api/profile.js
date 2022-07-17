const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

async function handler(req, res) {
  // protect apt route using getSession
  const token = await getToken({ req, secret });

  switch (req.method) {
    case 'GET':
      return getProfile(req, res);
    case 'POST':
      return postProfile(req, res, token);
    default:
      return res.status(405).json({
        status: 405,
        message: 'Method not allowed',
      });
  }
}

async function postProfile(req, res, token) {
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
    imgUrl,
    theme,
  } = req.body;

  if (!token)
    return res.status(401).json({
      status: 401,
      message: 'You are not logged in',
    });

  if (
    !name ||
    !occupation ||
    !country ||
    !email ||
    !github ||
    !imgUrl ||
    !theme
  )
    return res.status(400).json({
      message: 'Bad request',
    });

  if (token.email !== email)
    return res.status(400).json({
      message: 'You can only update your own profile',
    });

  // check if user with github username already exists
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  console.log(user);

  if (user.length !== 0) {
    // update user profile
    console.log('Updating...');
    try {
      await prisma.user.update({
        where: {
          email: email,
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
          imgUrl: imgUrl,
          theme: theme,
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
        imgUrl,
        theme,
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
