import { callGetIssueById, callGetAllIssues } from "@api"

export async function getStaticPaths() {
    const res = await callGetAllIssues();
    return {
        paths: res.data.list.map(item => `/issue/${item._id}`),
        fallback: false
    };
}

export async function getStaticProps(context) {
    const res = await callGetIssueById({ _id: context.params.params[0] })
    return {
        props: { data: res.data.data }, // will be passed to the page component as props
    }
}

export { default } from '@containers/Issue'
