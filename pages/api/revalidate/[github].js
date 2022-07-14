// Credits: Code snippet from https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#testing-on-demand-isr-during-development

export default async function handler(req, res) {
  if (req.query.secret !== process.env.NEXT_PUBLIC_MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    console.log('Revalidating...');
    await res.revalidate(`/${req.query.github}`);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
