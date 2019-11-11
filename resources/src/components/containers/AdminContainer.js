import React from "react";
import { connect } from "react-redux";
import Admin from "../pages/Admin/Admin";

const AdminContainer = () => {
        return <Admin/>;
};

export default connect()(AdminContainer);