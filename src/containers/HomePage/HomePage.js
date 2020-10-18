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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from '@material-ui/core';


import { withTranslation } from '@i18n';
import Link from "next/link";


const HomePage = ({ t }) => {
    const { IssueModalStore, HomeStore } = useStores()
    const { openModal } = IssueModalStore
    const { getList, list, total, page, limit, updateData } = HomeStore;
    useEffect(() => {
        getList()
    }, [page, limit]);
    const columns = [
        { id: 'title', label: 'Title', minWidth: 170 },
        { id: 'description', label: 'Description' },
    ];
    return (
        <Page>
            <div>
                <Header/>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <Button onClick={() => {
                        openModal()
                    }}>
                        {t('ask_a_question')}
                    </Button>
                </div>
            </div>

            <IssueContainer>

                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns?.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={'left'}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list.map((row, index) => {
                                return (
                                    <Link href="/issue/[[...params]]" as={`/issue/${row._id}`}
                                          key={`issue-row-${index}`}>
                                        <TableRow hover role="checkbox" tabIndex={-1}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    </Link>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[8, 25, 100]}
                    component="div"
                    count={total}
                    rowsPerPage={limit}
                    page={page}
                    onChangePage={(e, nextPage) => {
                        updateData("page", nextPage);
                    }}
                    onChangeRowsPerPage={(event) => {
                        updateData("limit", parseInt(event.target.value, 10))
                        updateData("page", 0);
                    }}
                />
            </IssueContainer>


            <LoginModal/>
            <IssueModal/>
            <IssueDetailModal/>
        </Page>


    );
};

export default withTranslation('home')(observer(HomePage));
