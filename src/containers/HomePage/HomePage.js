import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Button, Page } from '@components';
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import IssueModal from "./components/IssueModal";
import IssueDetailModal from "./components/IssueDetailModal";
import { useStores } from "@store";
import { IssueContainer } from "./HomePage.styles";
import {
    TableContainer,
} from '@material-ui/core';
import { format } from 'date-fns';
import Router from 'next/router';
import { DataGrid } from '@material-ui/data-grid';
import { withTranslation } from '@i18n';
const columns = [
    { field: 'title', headerName: 'Title', width: 140 },
    { field: 'description', headerName: 'Description', width: 150 },
    {
        field: 'author',
        headerName: 'Author',
        width: 200,
        valueFormatter: (rowData) => rowData.value.firstName + rowData.value.lastName
    },
    {
        field: 'updatedAt',
        headerName: 'Update Time',
        width: 200,
        valueFormatter: (rowData) => format(new Date(rowData.value), "yyyy-MM-dd hh:mm:ss")
    },
];

const HomePage = ({ t }) => {
    const { IssueModalStore, HomeStore } = useStores()
    const { openModal } = IssueModalStore
    const { getList, list, total, page, limit, updateData } = HomeStore;
    useEffect(() => {
        getList()
    }, [page, limit]);
    const { userInfo } = useStores()['LayoutStore']
    const { _id } = userInfo || {};

    return (
        <Page>
            <div>
                <Header/>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {
                        _id && <Button onClick={() => {
                            openModal()
                        }}>
                            {t('ask_a_question')}
                        </Button>
                    }
                </div>
            </div>

            <IssueContainer>

                <TableContainer>
                    <div style={{ height: 600, width: '100%' }}>
                        <DataGrid
                            paginationMode={'server'}
                            rows={list}
                            columns={columns}
                            hideFooterSelectedRowCount={true}
                            onRowClick={data => {
                                const { row } = data;

                                Router.push(`/issue/${row.id}`)
                            }}
                            page={page}
                            onPageChange={(params) => {
                                updateData("page", params.page);
                            }}
                            onPageSizeChange={(params) => {
                                updateData("page", 1);
                                updateData("limit", params.pageSize);

                            }}
                            rowCount={total}
                            pagination
                            pageSize={limit}
                            rowsPerPageOptions={[8, 10, 20]}
                        />
                    </div>
                </TableContainer>
            </IssueContainer>
            <LoginModal/>
            <IssueModal/>
            <IssueDetailModal/>
        </Page>


    );
};

export default withTranslation('home')(observer(HomePage));

