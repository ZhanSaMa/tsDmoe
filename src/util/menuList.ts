import { Vue } from 'vue-property-decorator'

interface data {
    index: number,
    name: string,
    path: string[]
}
export default class list extends Vue {
    private List = [
        {
            index: 1,
            name: "船公司",
            path: [
                {
                    name: "代申请"
                },
                {
                    name: "已申请"
                }
            ]
        },
        {
            index: 2,
            name: "车队",
            path: [
                {
                    name: "已完成"
                },
                {
                    name: "进行中"
                }
            ]
        }
    ]
}