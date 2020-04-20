import { Component, Vue } from 'vue-property-decorator'

@Component({
    name: 'home'
})
export default class home extends Vue {
    private handleCommand(): void {
        this.$router.push({
            name: 'login'
        })
    }
}