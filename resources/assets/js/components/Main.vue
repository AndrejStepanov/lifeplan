<template>
    <v-app light>
        <v-toolbar class="transparent" fixed dark color="elevation-0"  style="z-index:10;">
            <v-toolbar-side-icon  @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title  class="pl-5 hidden-xs-only" v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn class="hidden-xs-only" color="orange" large>  Авторизация <v-icon right>account_circle</v-icon></v-btn>
        </v-toolbar>
        <v-navigation-drawer style="z-index:6;" v-model="drawer" :mini-variant.sync="mini" app fixed dark class="orange">
            <v-list class="mt-5 pt-4">
                <v-list-tile avatar @click="">
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Личный кабинет</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-list>
                <v-divider></v-divider>
                <v-list-tile class="pt-2"
                        v-for="item in items"
                        :title="item.title"
                        @click=""
                >
                    <v-list-tile-action>
                        <v-icon large>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

        </v-navigation-drawer>
        <v-content>
            <section>
                <v-parallax src="storage/bg.jpg" height="720">
                    <v-layout
                            column
                            align-center
                            justify-center
                            class="white--text"
                    >
                        <img class="bg_2" src="storage/bg2.jpg" alt="lifeplan" height="603">
                        <div class="bg_div">
                            <img class="logo" src="storage/logo2.png" alt="lifeplan">
                            <span v-html="logo_txt" class="hidden-xs-only"></span>
                        </div>
                    </v-layout>
                </v-parallax>
            </section>

            <section>
                <v-layout
                        column
                        wrap
                        class="my-4"
                        align-center
                >
                    <v-flex xs12 sm4 class="my-2">
                        <div class="text-xs-center">
                            <h2 class="headline">{{ header_txt }}</h2>
                            <span class="subheading">{{ header_txt2 }}</span>
                        </div>
                    </v-flex>
                    <v-flex xs12>
                        <v-container grid-list-xl>
                            <v-layout row wrap align-center>
                                <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="orange--text">{{ dop_i1 }}</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="headline text-xs-center">{{ dop_h1 }}</div>
                                        </v-card-title>
                                        <v-card-text>{{ dop_t1 }}</v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="orange--text">{{ dop_i2 }}</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="headline">{{ dop_h2 }}</div>
                                        </v-card-title>
                                        <v-card-text>{{ dop_t2 }}</v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="orange--text">{{ dop_i3 }}</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="headline text-xs-center">{{ dop_h3 }}</div>
                                        </v-card-title>
                                        <v-card-text>{{ dop_t3 }}</v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>
            </section>

            <section>
                <v-parallax src="storage/bg.jpg" height="380">
                    <v-layout column align-center justify-center>
                        <div class="headline white--text mb-3 text-xs-center">{{ header2_txt }}</div>
                        <em>{{ header2_txt2 }}</em>

                        <v-btn
                                class="mt-5"
                                dark
                                large
                                color="orange"
                        >
                            {{ button_txt2 }}
                            <v-icon right>search</v-icon>
                        </v-btn>
                    </v-layout>
                </v-parallax>
            </section>

            <section>
                <v-container grid-list-xl>
                    <v-layout row wrap justify-center class="my-1">
                        <v-flex xs12 sm4>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">{{ about_project_h }}</div>
                                </v-card-title>
                                <v-card-text>
                                    {{ about_project }}
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm4 offset-sm1>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">{{ contacts }}</div>
                                </v-card-title>
                                <v-card-text>{{ contacts2 }}</v-card-text>
                                <v-list class="transparent">
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">phone</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>{{ phone }}</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">email</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>{{ email }}</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </section>

            <v-footer
                    height="auto"
                    color="blue darken-4"
            >
                <v-layout
                        justify-center
                        row
                        wrap
                >
                    <v-btn
                            v-for="link in links"
                            :key="link"
                            color="white"
                            flat
                    >
                        {{ link }}
                    </v-btn>
                    <v-flex
                            orange
                            py-1
                            text-xs-center
                            white--text
                            xs12
                            v-html="footer"
                    >
                    </v-flex>
                </v-layout>
            </v-footer>

        </v-content>
    </v-app>
</template>

<script>
    export default {
        name:'main',
        data: () => ({
            title:'Навигация',
            logo_txt:"ИНТЕЛЛЕКТУАЛЬНАЯ СИСТЕМА<br\>ПОДБОРА ПРОФЕССИИ ДЛЯ ВАШЕГО РЕБЕНКА",
            header_txt:"Лучший путь чтобы найти свою профессию",
            header_txt2:"Самая продвинутая система интелектуального поиска",
            dop_i1:"security",
            dop_h1:"Блокчейн технология",
            dop_t1:"Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.",
            dop_i2:"blur_on",
            dop_h2:"Многокритериальный поиск",
            dop_t2:"Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.",
            dop_i3:"face",
            dop_h3:"Персональная настройка",
            dop_t3:"Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.",
            header2_txt:"Интелектуальная система поиска ВУЗов",
            header2_txt2:"Персональный поиск с многокритериальной оценкой. Начни пользоваться сегодня",
            button_txt2:"Начать поиск ВУЗа",
            about_project_h:"О проекте",
            about_project:"Наш проект предназначен для облегчения поиска ВУЗа для ребёнка. Интелектуальная система поиска учитывает множество факторов позволяющая сделать правильный выбор и найти свою профессию в жизни.",
            contacts:"Контакты",
            contacts2:"Если у Вас возникли вопросы Вы можете связаться с нами, будем рады Вам помочь",
            phone:"8 800 350-5354",
            email:"info@konsom.ru",
            footer:"Интеллектуальная система подбора профессии для Вашего ребенка &copy;2019",
            links: [
                'ВОСТРЕБОВАННЫЕ ПРОФЕССИИ',
                'ТОП ВУЗОВ В ВАШЕМ РЕГИОНЕ',
                'ТОП СПЕЦИАЛЬНОСТЕЙ',
                'КАТАЛОГ ПРОФЕССИЙ',
            ],
            drawer: false,
            mini:false,
            items: [
                { title: 'Главная страница', icon: 'home' },
                { title: 'Востребованные профессии', icon: 'trending_up' },
                { title: 'Топ ВУЗов в вашем регионе', icon: 'account_balance' },
                { title: 'Топ специальностей', icon: 'favorite' },
                { title: 'Каталог профессий', icon: 'view_module' },
                { title: 'Психологические тесты', icon: 'ballot' },
                { title: 'Астрологический прогноз', icon: 'brightness_4' },
                { title: 'Актуальные предложения', icon: 'adb' },
                { title: 'Поиск', icon: 'search' }
            ],
        }),
        computed: {

        },
        methods: {

        },
        mounted: {
        }
    }
</script>

<style>
    img.bg_2{
        position:absolute;
        z-index:0;
    }
    div.bg_div{
        background:#FFFFFF;
        z-index:1;
        width:90%;
        margin-top: -10px;
        min-height:120px;
        padding-top:25px;
        padding-left:10%;
        font-size:22px;
        color:#ff6600;
        text-align:left;
    }
    img.logo{
        float:left;
        margin-right:20px;
        height:70px;
    }
    div.v-parallax__image-container, div.v-parallax__content{
        padding:0px;
    }
</style>