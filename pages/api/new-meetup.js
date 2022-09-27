/*
this will be the url of api  --  /api/new-meetup
*/

import {MongoClient} from 'mongodb'

async function handler(req,res)
{
  if(req.method==='POST')
  {
     const data = req.body;
     

  const client =  await MongoClient.connect('mongodb+srv://avijaiz:jrb12peAr80GtQid@cluster0.kb55rib.mongodb.net/?retryWrites=true&w=majority');

  const db= client.db();

  const meetupsCollection = db.collection('meetups')

const result = await meetupsCollection.insertOne(data);
console.log(result);

client.close();

res.status(201).json({message:'MeetUp Inserted'})

  }
}

export default handler

