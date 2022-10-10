import React from 'react';

const Blog = () => {
    return (
      <div>
        <section className="text-gray-800 bg-gray-100 py-20">
          {/* ------------------------------- */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 w-8/12 mx-auto rounded-box my-5"
          >
            <div className="collapse-title text-xl font-medium">
              What is the purpose of react router?
            </div>
            <div className="collapse-content">
              <p>
                ReactJS Router is mainly used for developing Single Page Web
                Applications. React Router is used to define multiple routes in
                the application. When a user types a specific URL into the
                browser, and if this URL path matches any 'route' inside the
                router file, the user will be redirected to that particular
                route.
              </p>
            </div>
          </div>
          {/* ------------------------------- */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 w-8/12 mx-auto rounded-box my-5"
          >
            <div className="collapse-title text-xl font-medium">
              How does Context API works?
            </div>
            <div className="collapse-content">
              <p>
                The React Context API is a way for a React app to effectively
                produce global variables that can be passed around. This is the
                alternative to "prop drilling" or moving props from grandparent
                to child to parent, and so on. Context is also touted as an
                easier, lighter approach to state management using Redux. <br />{" "}
                <br />
                React.createContext() is all you need. It returns a consumer and
                a provider. Provider is a component that as it's names suggests
                provides the state to its children. It will hold the "store" and
                be the parent of all the components that might need that store.
                Consumer as it so happens is a component that consumes and uses
                the state.
              </p>
            </div>
          </div>
          {/* ------------------------------- */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 w-8/12 mx-auto rounded-box my-5"
          >
            <div className="collapse-title text-xl font-medium">
              What is useRef hook in react?
            </div>
            <div className="collapse-content">
              <p>
                The useRef Hook allows us to persist values between renders. It
                can be used to store a mutable value that does not cause a
                re-render when updated. It can be used to access a DOM element
                directly.
              </p>
            </div>
          </div>
          {/* ------------------------------- */}
        </section>
      </div>
    );
};

export default Blog;