//wanna become a host?

import React, {Component} from "react";
import Link from "next/link";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <footer>
                <Link href="/hosts">
                    <a className="footer">Want to become a Purrfect Host?</a>
                </Link>
            </footer>
        )
    }
}

export default Footer