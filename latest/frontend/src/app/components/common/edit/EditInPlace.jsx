import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class EditInPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: props.editing || false,
      value: props.value
    };
  }

  render() {
    if (this.state.editing) {
      const classes = {'edit-in-place': true, block: this.props.block};
      return <span className={ classNames(classes) }><textarea ref="textarea"
                                                               value={ this.state.value }
                                                               onChange={ (evt) => { this.onInputValueChange(evt) } }
                                                               onKeyDown={ (evt) => { this.onKeyDown(evt) } }></textarea></span>;
    } else {
      const text = this.state.value ? this.state.value : this.props.placeholder;
      const classes = {'edit-in-place': true, block: this.props.block, placeholder: !this.state.value};
      return <span className={ classNames(classes) } onClick={ () => { this.onClick() }}>{ text }</span>;
    }

  }

  componentDidUpdate() {
    this.state.editing && (ReactDOM.findDOMNode(this.refs.textarea).focus());
  }

  onInputValueChange(evt) {
    const newValue = evt.target.value;
    this.setState({value: newValue});
    this.props.onChange && this.props.onChange(newValue);
  }

  onClick() {
    this.setState({editing: true});
  }

  onKeyDown(evt) {
    if (evt.keyCode === 13) {
      this.setState({editing: false});
    }
  }

  reset() {
    this.setState({
      editing: this.props.editing || false,
      value: this.props.value
    });
  }
}
