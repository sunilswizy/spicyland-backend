// export interface IProducts {
//     title: string,
//     imgUrl: string
// }

export type ICategories = Record<string, any> & {
    title: string,
    imgUrl: string
};