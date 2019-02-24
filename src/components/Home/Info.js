import React from "react";
import { Link } from "gatsby";

export default function Info({ info }) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p
              className="lead text-muted mb-5"
              dangerouslySetInnerHTML={{ __html: info }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
