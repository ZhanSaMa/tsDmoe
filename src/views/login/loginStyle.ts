import { Component, Vue, Model } from 'vue-property-decorator';
// 定义登录表单的数据类型
interface Form {
    userName: string;
    password: string;
}
// 表单验证的数据类型
interface rule  {
    name: {
        required: boolean;
        trigger: string;
        message: string
    },
    psd: {
        required: boolean;
        trigger: string;
        message: string
    }
}
@Component({
    name: 'login',
})
export default class Login extends Vue {
    private loginForm: Form = {
        userName: "",
        password: ""
    }
    private rules: rule = {
        name: {
            required: true,
            trigger: "blur",
            message: "请输入用户名"
        },
        psd: {
            required: true,
            trigger: 'blur',
            message: '请输入密码'
        }
    }
    private submit(): void {
        this.$router.push({
            name: 'home'
        })
    }
}