import * as React from 'react';
import App from "./App";
export interface NavbarProps {
    text: string;
    isReady: boolean;
    onMount();
}

class Navbar extends React.Component<NavbarProps, undefined> {

    componentDidMount() {
        this.props.onMount();
    }

    render() {
        return (
            <App>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target=".navbar-collapse">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="<?= $this->url('home') ?>">
                                <img src="<?= $this->basePath('img/zf-logo-mark.svg') ?>" height="28"
                                     alt="Zend Framework <?= \Application\Module::VERSION ?>"/>&nbsp;Skeleton Application
                            </a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="<?= $this->url('home') ?>">Home</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </App>
        );
    }
}

export default Navbar;