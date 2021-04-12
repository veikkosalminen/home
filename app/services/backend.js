import Service from '@ember/service';

export default class BackendService extends Service {

    url = "https://script.google.com/macros/s/AKfycbzmIfcn1upgDsZEWKuaoJHuqSdRj0wdT0c8km_o3ejsV3hK9ZM/exec"

    async getPages() {
        const resp = await fetch(this.url + "?sheet=config")
        const data = await resp.json()
        
        let currentPage = null
        const pages = {}
        data.config.forEach((row) => {
            if (row.page.startsWith("#")) return
            if (row.page) currentPage = row.page
            if (!pages[currentPage]) pages[currentPage] = []

            pages[currentPage].push(row)
        })

        return pages
    }

    async getMenus() {
        return Object.keys(await this.getPages())
    }

}
