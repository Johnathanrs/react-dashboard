const Panel = () => <div className="panel">
  <div className="head">{ this.props.title }</div>
  <div className="body">
    { this.props.children }
  </div>
</div>;
export default Panel;
