import React from 'react';
import mirror, { connect } from 'mirrorx';

// 组件引入
import I18nTable from './components/I18n-root/I18nTable';
import I18nSelectTable from './components/I18n-root/I18nSelectTable';
import I18nPaginationTable from './components/I18n-root/I18nPaginationTable';
import I18nEdit from './components/I18n-edit/Edit';
// 数据模型引入
import model from './model'
mirror.model(model);

// 数据和组件UI关联、绑定
export const ConnectedI18nTable = connect( state => state.I18n, null )(I18nTable);
export const ConnectedI18nSelectTable = connect( state => state.I18n, null )(I18nSelectTable);
export const ConnectedI18nPaginationTable = connect( state => state.I18n, null )(I18nPaginationTable);
export const ConnectedI18nEdit = connect( state => state.I18n, null )(I18nEdit);
