import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

const imageUrls = {
  check: require('../../../img/check_16_w.png'),
  close: require('../../../img/close_16_w.png')
};

export default class EditInPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: props.editing || false,
      value: props.value
    };
  }

  reset() {
    this.setState({
      editing: this.props.editing || false,
      value: this.props.value
    });
  }

  render() {
    if (this.state.editing) {
      const classes = {'edit-in-place': true, block: this.props.block};
      const styles = this.props.styles ? this.props.styles : {};
      return <span className={ classNames(classes) }>
        <textarea ref="textarea"
                  style={ styles }
                  value={ this.state.value }
                  onChange={ (evt) => { this.onInputValueChange(evt) } }
                  onKeyDown={ (evt) => { this.onKeyDown(evt) } }></textarea>
        <span className="edit-in-place-buttons">
          <a href="javascript:void(0)" onClick={ () => { this.onCancel() } }><img src={ imageUrls['close'] } alt=""/></a>
          <a href="javascript:void(0)" onClick={ () => { this.onApply() } }><img src={ imageUrls['check'] } alt=""/></a>
        </span>
      </span>;
    } else {
      const text = this.state.value ? this.state.value : this.props.placeholder;
      const decoratedText = this.props.decorator ? this.props.decorator(text) : text;
      const classes = {'edit-in-place': true, block: this.props.block, placeholder: !this.state.value};
      return <span className={ classNames(classes) } onClick={ () => { this.onClick() }}>{ decoratedText }</span>;
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
      this.onApply();
    }
    if (evt.keyCode === 27) {
      this.onCancel();
    }
  }

  onCancel() {
    this.reset();
    this.props.onCancel && this.props.onCancel();
  }

  onApply() {
    this.setState({editing: false});
    this.props.onApply && this.props.onApply(this.state.value);
  }

}


