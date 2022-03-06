import React, { Component } from "react";
import Draggable from "react-draggable";

export default class DraggableContainer extends Component {
  state = {
    disabled: false
  };

  toggleDraggable = () =>
      this.setState(prevState => ({ disabled: !this.state.disabled }));

  render = () => {
    const { disabled } = this.state;
    return (
        <div>
          <div className="left-bar">

          </div>
          <div className="container">
          <Draggable disabled={disabled} bounds="parent">
            <div
                style={{ width: 200 }}
                className={!disabled ? "draggable" : null}
            >
              <h4 style={{ height: 20, userSelect: "none" }}>
                {!disabled && "Now Draggable"}
              </h4>
              <input disabled={!disabled} className="uk-input" />
              <br />
              <button
                  className="uk-button uk-button-primary"
                  onClick={this.toggleDraggable}
              >
                {disabled ? "Enable" : "Disable"} Drag
              </button>
            </div>
          </Draggable>

        </div>
        </div>
    );
  };
}
