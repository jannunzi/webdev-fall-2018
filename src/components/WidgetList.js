import React from 'react'
import HeadingWidget from "./HeadingWidget";

class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        props.init(props.widgetsInit, props.topic)
    }

    componentDidUpdate() {
        this.props.init(this.props.widgetsInit, this.props.topic)
    }
    render() {
        return(
            <ul className="list-group">
                {
                    this.props.widgets.map((widget, index) =>
                        <li key={index}
                            className="list-group-item">
                            <button
                                onClick={() => this.props.deleteWidget(widget)}
                                className="btn btn-danger float-right">
                                Delete
                            </button>
                            <HeadingWidget widget={widget}/>
                        </li>
                    )
                }
            </ul>
        )
    }
}
export default WidgetList