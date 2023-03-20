import React, { Component } from "react";
import { LanguageContext } from "./LanguageContext";

class DisplayLanguage extends Component {
    render() {
      return (
        <div>
          <LanguageContext.Consumer>
            {(language) => {
              return <div>The current language is: {language}</div>;
            }}
          </LanguageContext.Consumer>
        </div>
      );
    }
  }

export default DisplayLanguage