import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from "../../config";

const Card = ({ blog }) => {

    const showBlogCategories = blog => 
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-dark mx-1 mt-3">{c.name}</a>
            </Link>
        ));
    

    const showBlogTags = blog => 
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-dark mx-1 mt-3">{t.name}</a>
            </Link>
        ));
    

  return (
    <div className="lead pb-4">
      <header>
        <Link href={`/blogs/${blog.slug}`}>
          <a className="text-decoration-none">
            <h2 className="pt-3 pb-3 fw-bold">{blog.title}</h2>
          </a>
        </Link>
      </header>
      <section>
        <p className="mark mx-1">
          Written by <Link href ={`/profile/${blog.postedBy.username}`}>
                      <a>{blog.postedBy.username}</a></Link> | Published{" "}
          {moment(blog.updatedAt).fromNow()}
        </p>
      </section>
      <section>
        {showBlogCategories(blog)}
        {showBlogTags(blog)}
        <br/>
        <br/>
      </section>
      <div className="row">
        <div className="col-md-4">
            <section>
                <img className="img img-fluid" style={{maxHeight: 'auto', width: '100%'}} src={`${API}/blog/photo/${blog.slug}`} alt={blog.title}/>
            </section>
        </div>
        <div className="col-md-8">
          <section>
            {blog.excerpt ? (
              <div className="pb-3">{renderHTML(blog.excerpt)}</div>
            ) : null}
            <Link href={`/blogs/${blog.slug}`}>
              <a className="btn btn-dark pt-2">Read more</a>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Card;
