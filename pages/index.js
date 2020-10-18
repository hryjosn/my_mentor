// import { callGetAllIssues } from '@api';
// import { HomeStore } from '@store';
//
// const { page, limit } = HomeStore;

// export async function getStaticProps() {
//     const res = await callGetAllIssues({ page, limit });
//
//     const { list } = res.data
//     return {
//         props: {
//             list
//         }
//     };
// }

export { default } from '@containers/HomePage';
