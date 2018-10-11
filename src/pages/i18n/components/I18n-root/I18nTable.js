import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { actions } from "mirrorx";

import Header from 'components/Header';
import I18nTable from '../I18n-table';
import I18nForm from '../I18n-form';

import './index.less';

/**
 * I18nRoot Component
 */
class I18nRoot  extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    /**
     *
     */
    componentWillMount() {
        this.getTableData();
    }
    /**
     * 获取table表格数据
     */
    getTableData = () => {
        actions.I18n.loadList();
    }

    render() {
        let { pageSize, pageIndex, totalPages} = this.props;
        return (
            <div className='I18n-root'>
                <Header title='国际化工具' back={true}/>
                <I18nForm { ...this.props }/>
                <I18nTable { ...this.props }/>
            </div>
        )
    }
}
export default I18nRoot;