import React from "react";

export default function Contact() {
  return (
    <section className="contact py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form
              action="https://formspree.io/enquiry@willwu.net"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter your e-mail"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  row="5"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block text-capitalize mt-5"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
