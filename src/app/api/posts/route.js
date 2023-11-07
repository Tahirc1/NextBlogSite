import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  try {
    await connect();
    const post = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  console.log(body);
  const newPost = new Post(body);
  try {
    await connect();
    console.log("database connect");
    await newPost.save();
    console.log("post saved");
    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database error", { status: 501 });
  }
};