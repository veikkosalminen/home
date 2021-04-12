import Service from '@ember/service';

export default class BackendService extends Service {

    url = "https://script.google.com/macros/s/AKfycbzmIfcn1upgDsZEWKuaoJHuqSdRj0wdT0c8km_o3ejsV3hK9ZM/exec"

    async getPages() {

        const config = localStorage.getItem("config")
        let json
        const fetchConfig = fetch(this.url + "?sheet=config")

        if (config) {
            fetchConfig.then(response => response.json())
            .then(data => localStorage.setItem("config", JSON.stringify(data)))

            json = JSON.parse(config)
        }
        else {
            const resp = await fetchConfig
            json = await resp.json()
            localStorage.setItem("config", JSON.stringify(json))
        }
        
        let currentPage = null
        const pages = {}
        json.config.forEach((row) => {
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
