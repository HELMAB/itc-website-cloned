export const state = () => ({
    list: [],
    count: 100,
    footer: {
        departments: [
            'ដេប៉ាតឺម៉ង់ ឆ្នាំសិក្សាមូលដ្ឋាន',
            'ទេពកោសល្យ គីមីនិងចំណីអាហារ',
            'ទេពកោសល្យ សំណង់ស៊ីវីល',
            'ទេពកោសល្យ អគ្គីសនី ថាមពល និងទូរគមនគមន៏',
            'ទេពកោសល្យ ធនធានរ៉ែ និងភូគព្ពសាស្រ្ត',
            'ទេពកោសល្យ ព័ត៏មានវិទ្យា និង​ទំនាក់ទំនង',
            'ទេពកោសល្យ ឧស្សាហកម្ម និងមេកានិច',
            'ទេពកោសល្យ ជនបទ',
        ],
        about: [
            'អំពីយើង',
            'ផែនការយុទ្ធសាស្រ្ត',
            'សាររបស់ឯកឧត្តម អគ្គនាយក',
            'អង្គការលេខ', 'ទីចាត់ការ',
            'ក្រុមអ្នកបច្ចេកទេសអន្តរជាតិ',
            'ការប្រជុំក្រុមប្រឹក្សាភិបាល',
            'កម្មវិធីនិងជំនាញ',
            'រូបថត'
        ],
        association: [
            'ទំព័រមន្រីរាជការ',
            'ទំព័រនិស្សិត',
            'អតីតនិស្សិតនៃ​​​ ប.វ.ក',
        ],
        section: [
            'មជ្ឈមណ្ឌល IT',
            'មជ្ឈមណ្ឌល E-learning',
            'បណ្ណាល័យអេឡិចត្រូនិច',
            'ឌីណាមិកនិងប្រព័ន្ធបញ្ជា',
            'ផ្នែកភាសាអង់គ្លេស',
            'ផ្នែកភាសាបារំាង',
        ],
        contact: [
            'ប្រអប់សំបុត្រលេខ៨៦ មហាវិថីសហព័ន្ធរុសី្ស រាជធានីភ្នំពេញ កម្ពុជា',
            'ទូរស័ព្ទ: (៨៥៥) ២៣ ៨៨០ ៣៧០/៩៨២ ៤០៤',
            'ទូរសារ : (៨៥៥) ២៣ ៨៨០ ៣៦៩',
            'សារអេឡិចត្រូនិច: info@itc.edu.kh',
            'គេហទំព័រ: www.itc.edu.kh',
        ]
    },
    blogs: [{
            id: 1,
            title: '1ST Symposium on Tonle Sap Water Environment',
            date: '2016-04-06 07:55:07 Introduction',
            description: "The Symposium On Tonle Sap Water Environment will be initiated by Tonle Sap Water Environmental Platform(TSWEP) based in Phnom Penh, Cambodia. The 1 st Symposium on Tonle Sap Water Environment(STSWE1) will be held at Institute of Technology of Cambodia in this summer to provide a global platform for the conservation of Tonle Sap Lake(TSL)."
        },
        {
            id: 2,
            title: 'SCIENTIFIC DAY-2018',
            date: '2016-04-06 07:55:07 Introduction',
            description: `General information Background Cambodian Industrial
        Development policy launched in 2015 has our good document to
        drive our comment to promote Science, Technology, Engineering
        and Math (STEM).`
        },
    ],
    events: [{
            id: 1,
            title: 'The Job Announcement 7 Positions',
            date: '2016-04-06 07:55:07 Introduction',
            description: "The Symposium On Tonle Sap Water Environment will be initiated by Tonle Sap Water Environmental Platform(TSWEP) based in Phnom Penh, Cambodia. The 1 st Symposium on Tonle Sap Water Environment(STSWE1) will be held at Institute of Technology of Cambodia in this summer to provide a global platform for the conservation of Tonle Sap Lake(TSL)."
        },
        {
            id: 2,
            title: '4th International Symposium on Convervation and Management of Tropical Lakes',
            date: '2016-04-06 07:55:07 Introduction',
            description: `General information Background Cambodian Industrial
        Development policy launched in 2015 has our good document to
        drive our comment to promote Science, Technology, Engineering
        and Math (STEM).`
        },
    ]
})

export const getters = {
    getDepartments(state) {
        return state.footer.departments
    },

    getFooterAbout(state) {
        return state.footer.about
    },

    getFooterAssociation(state) {
        return state.footer.association
    },

    getFooterSection(state) {
        return state.footer.section
    },

    getFooterContact(state) {
        return state.footer.contact
    },

    getBlogs(state) {
        return state.blogs
    },

    getEvents(state) {
        return state.events
    }
}

export const mutations = {
    add(state, text) {
        state.list.push({
            text,
            done: false
        })
    },
    remove(state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
        todo.done = !todo.done
    }
}