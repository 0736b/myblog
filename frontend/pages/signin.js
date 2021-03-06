import Layout from "../components/Layout";
import { withRouter } from "next/router";
import Router from "next/router";
import Link from "next/link";
import SigninComponent from "../components/auth/SigninComponent";
import { isAuth } from "../actions/auth";

const Signin = ({router}) => {
  const showRedirectMessage = () => {
    if (router.query.message) {
      return <div className="alert alert-danger">{router.query.message}</div>;
    } else {
      return;
    }
  };

  return (
    <Layout>
      <h2 className="text-center pt-4 pb-4 fw-bold">Sign In</h2>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          {showRedirectMessage()}
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SigninComponent />
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(Signin);
