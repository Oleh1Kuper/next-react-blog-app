import { MongoClient } from 'mongodb';

const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

export async function POST(req) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !message || !regexEmail.test(email)) {
    return Response.json({ message: 'Invalid data' }, { status: 422 });
  }

  const newMessage = { ...body };

  try {
    const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_URL);
    const db = client.db();
    const result = await db.collection('messages').insertOne(newMessage);

    newMessage.id = result.insertedId;
    client.close();

    return Response.json(
      { message: 'Message was sent', id: newMessage.id },
      { status: 201 },
    );
  } catch (error) {
    throw error;
  }
}
