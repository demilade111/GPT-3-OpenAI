import React from 'react';
import blog01 from "../assets/blog01.png";
import blog02 from "../assets/blog02.png";
import blog03 from "../assets/blog03.png";
import blog04 from "../assets/blog04.png";
import blog05 from "../assets/blog05.png";
import Article from './Article';
import '../blog.css'


const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text  lg:text-3xl px-12  lg:px-48">A lot is happening,<br/>  We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container lg:px-28 lg:max-w-7xl">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26 w-96, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;
