import React, { Component, Fragment } from "react";

class Footer extends Component {
  render() {
    return (
      <div style={{ position: "absolute", bottom: 0, width: "100%" }} className="bg-gray-100">
        <div className="text-center text-sm text-gray-500">
          <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2"> Next.js Dev Henri & Erwan</span>   &copy; {new Date().getFullYear()}   All Rights Reserved
        </div>
      </div>
    );
  }
}

export default Footer;