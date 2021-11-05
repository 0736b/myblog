import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { singleBlog, listRelated } from "../../actions/blog";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";
import SmallCard from '../../components/blog/SmallCard';

const SingleBlog = ({ blog, query }) => {

  const [related, setRelated] = useState([]);
  
  const loadRelated = () => {
    listRelated({blog}).then(data => {
      if(data.error){
        console.log(data.error)
      }
      else {
        setRelated(data);
      }
    });
  };

  useEffect(() => {
    loadRelated();
  }, [])

  const head = () => {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{blog.title} | {APP_NAME}</title>
        <meta
          name="description"
          content={blog.mdesc}
        />
        <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
        <meta
          property="og:title"
          content={`${blog.title} | ${APP_NAME}`}
        />
        <meta
          property="og:description"
          content={blog.mdesc}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
        <meta property="og:site_name" content={`${APP_NAME}`} />

        <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
        <meta
          property="og:image:secure_url"
          content={`${API}/blog/photo/${blog.slug}`}
        />
        <meta property="og:image:type" content="image/jpg" />
        {/* <meta property="fb:app_id" content={`${FB_APP_ID}`}/> */}
      </Head>
    );
  };

  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-dark mx-1 mt-3">{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-outline-dark mx-1 mt-3">{t.name}</a>
      </Link>
    ));

  const showRelatedBlog = () => {
    return related.map((blog, i) => (
      <div key={i} className="col-md-4">
        <article>
          <SmallCard blog={blog}/>
        </article>
      </div>
    ))
  }

  return (
    <>
    {head()}
      <Layout>
        <main>
          <article>
            <div className="container-fluid">
              <section>
                <div className="row" style={{ marginTop: "-30px" }}>
                  <img
                    src={`${API}/blog/photo/${blog.slug}`}
                    alt={blog.title}
                    className="img img-fluid featured-image"
                  />
                </div>
              </section>
              <section>
                <div className="container">
                  <h1 className="display-2 pb-3 text-center fw-bold pt-3">
                    {blog.title}
                  </h1>
                  <p className="lead mt-3 mark">
                    Written by {blog.postedBy.name} | Published{" "}
                    {moment(blog.updatedAt).fromNow()}
                  </p>
                  <div className="pb-3">
                    {showBlogCategories(blog)}
                    {showBlogTags(blog)}
                    <br />
                    <br />
                  </div>
                </div>
              </section>
            </div>
            <div className="container">
              <section>
                {/* {renderHTML(blog.body)} */}
                {blog.body ? (
                  <div className="col-md-12 lead">{renderHTML(blog.body)}</div>
                ) : (
                  blog.body
                )}
              </section>
            </div>
            <div className="container">
              <h4 className="text-center pt-5 pb-5 h2">Related blogs</h4>
              <hr/>
              <div className="row">{showRelatedBlog()}</div>
            </div>
            <div className="container pb-5">
              <p>show comments</p>
            </div>
          </article>
        </main>
      </Layout>
    </>
  );
};

SingleBlog.getInitialProps = ({ query }) => {
  return singleBlog(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { blog: data, query };
    }
  });
};

export default SingleBlog;
