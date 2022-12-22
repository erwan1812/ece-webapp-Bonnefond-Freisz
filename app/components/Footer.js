import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="dark:bg-gray-900 bg-gray-100 w-full mb-2 mt-3">
        <div className="text-center text-sm text-gray-500">
          <span className="dark:text-purple-600 text-gray-900 font-bold text-lg mr-2"> Next.js Dev Henri & Erwan</span>   &copy; {new Date().getFullYear()}   All Rights Reserved
        </div>
      </div>
    );
  }
}

export default Footer;