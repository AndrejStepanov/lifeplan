<template>
	<c-app :curentSystem="$vuetify.t('$vuetify.texts.testPage.HeadTxt')" :panelLeft="{show:true}">
		<v-layout align-space-between justify-center column fill-height ml-1>
			<v-flex>
				<v-tabs
						show-arrows
						dark
						color="transparent"
				>
					<v-tabs-slider color="orange"></v-tabs-slider>

					<v-tab
							v-for="tab in tabs"
							:href="'#tab-' + tab.id"
							:key="tab.id"
						>
						{{ tab.title }}
					</v-tab>

					<v-tabs-items>
						<v-tab-item value="tab-1">
							<v-card flat style="background:transparent;">
								<v-card-text>
									<v-stepper v-model="test1" vertical dark style="background:transparent;">
										<v-stepper-step :complete="test1 > 1" step="1">
											Инструкция
											<small></small>
										</v-stepper-step>
										<v-stepper-content step="1">
											<v-card color="white black--text" class="mb-1 pa-2">
												"Представьте себе, что после соответствующего обучения Вы сможете успешно работать абсолютно по любой профессии и в любой сфере деятельности.
												<br>Однако, Вам необходимо выбрать только одну из двух представленных Вам возможностей.
												<br><br>Начнём тестирвоание...
											</v-card>
											<v-btn color="primary" @click="test1 = 2">Начать тестирование</v-btn>
										</v-stepper-content>


										<template v-for="(item, key) in test1_q">
											<v-stepper-step :complete="test1 > (key+2)" :step=key+2>Вопрос № {{ key+1 }}. Что Вы предпочтете?</v-stepper-step>
											<v-stepper-content :step=key+2>
												<v-card color="white black--text" class="mb-1 pa-2">
													<b>1А.</b> {{ item.a }}
													<br><br>
													<b>1Б.</b> {{ item.b }}
												</v-card>
												<v-btn color="primary" @click="test1=key+3">1а</v-btn>
												<v-btn color="primary" @click="test1=key+3">1б</v-btn>

												<v-btn color="primary" @click="test1=key+3">Пропустить</v-btn>
												<v-btn color="primary" @click="test1=key+1">Назад</v-btn>
											</v-stepper-content>
										</template>

										<v-stepper-step :complete="test1 > (test1_q.length+2)" :step=test1_q.length+2 >Окончание теста:</v-stepper-step>
										<v-stepper-content :step=test1_q.length+2>
											<v-card color="white black--text" class="mb-1 pa-2">
												Спасибо! Тест закончен, осталость только отправить данные на сервер.
											</v-card>
											<v-btn color="primary" @click="test1=1">Завершить тестирование и отправить результат</v-btn>
										</v-stepper-content>
									</v-stepper>

								</v-card-text>
							</v-card>
						</v-tab-item>

					<v-tab-item value="tab-2">
						<v-card flat style="background:transparent;">
							<v-card-text>
								<v-stepper v-model="test2" vertical dark style="background:transparent;">
									<v-stepper-step :complete="test2 > 1" step="1">
										Инструкция
										<small></small>
									</v-stepper-step>

									<v-stepper-content step="1">
										<v-card color="white black--text" class="mb-5 pa-2">Идёт разработка теста ...</v-card>
										<v-btn color="primary" disabled>Начать тестирование</v-btn>
									</v-stepper-content>
								</v-stepper>

							</v-card-text>
						</v-card>
					</v-tab-item>

					<v-tab-item value="tab-3">
						<v-card flat style="background:transparent;">
							<v-card-text>
								<v-stepper v-model="test2" vertical dark style="background:transparent;">
									<v-stepper-step :complete="test2 > 1" step="1">
										Инструкция
										<small></small>
									</v-stepper-step>

									<v-stepper-content step="1">
										<v-card color="white black--text" class="mb-5 pa-2">Идёт разработка теста ...</v-card>
										<v-btn color="primary" disabled>Начать тестирование</v-btn>
									</v-stepper-content>
								</v-stepper>

							</v-card-text>
						</v-card>
					</v-tab-item>
					</v-tabs-items>

				</v-tabs>


			</v-flex>
		</v-layout>
	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
	export default {
		data: () => ({
            tabs:[
                {id:1, title:'Тест по профориентации' 	 },
                {id:2, title:'Определение личности'  },
                {id:3, title:'Сильные и слабые стороны'  },
            ],
            test1: 1,
            test1_q:[
                {res_a:'', res_b:'', a:'Ухаживать за животными, лечить их, создавать приюты для животных', b:'Работать на технических агрегатах,  приборах, следить за показаниями приборов и регулировать их'},
                {res_a:'', res_b:'', a:'Заботиться о детях, стариках, лечить людей, помогать больным, представлять страну на гуманитарных форумах', b:'Составлять алгоритмы, таблицы, схемы, писать компьютерные программы'},
                {res_a:'', res_b:'', a:'Участвовать в оформлении  баннеров,  рекламных буклетов, создавать книжные иллюстрации и рисовать комиксы.', b:'Выращивать чудодейственные растения, изучать природу и ее проявления'},
                {res_a:'', res_b:'', a:'Делать своими руками что – либо из дерева, ткани, бусин, металла, пластмассы и т.п.', b:'Рекламировать товары, придумывать рекламные кампании, добиваться, чтобы рекламируемые Вами товары покупали'},
                {res_a:'', res_b:'', a:'Заниматься современными научными направлениями, исследованиями, участвовать в научных форумах', b:'Принимать участие в создании художественных образов в спектаклях, КВН, комедийных постановках'},
                {res_a:'', res_b:'', a:'Заниматься генной инженерией, выводить и выращивать животных новой  породы.', b:'Заниматься с малышами и младшими школьниками, помогать им  в выполнении трудовых, учебных, спортивных и иных  заданий '},
                {res_a:'', res_b:'', a:'Играть на  музыкальных инструментах, петь, участвовать в концертах и международных конкурсах', b:'Управлять  транспортными средствами: машиной, скутером, велосипедом, самолетом, пароходом и др.'},
                {res_a:'', res_b:'', a:'Помогать окружающим находить  нужные  сведения в Интернете, на сайтах, организовывать и проводить встречи с известными людьми', b:'Проявлять авторство в оформлении выставок, светящихся витрин, динамичных рекламных баннеров'},
                {res_a:'', res_b:'', a:'Ремонтировать все по дому: технику, вещи, изделия', b:'Работать с текстами, рисунками, графиками, таблицами, придумывать для них шаблоны'},
                {res_a:'', res_b:'', a:'Работать в области медицины  животных', b:'Обеспечивать выполнение необходимых  вычислений, расчетов, диаграмм'},
                {res_a:'', res_b:'', a:'Выводить новые сорта растений для нужд людей ', b:'Конструировать,   проектировать и создавать новые, необычные  виды материалов, машин '},
                {res_a:'', res_b:'', a:'Выступать в качестве миротворца в спорах, ссоры между людьми, убеждать, разъяснять ', b:'Разбираться в чертежах, схемах, таблицах'},
                {res_a:'', res_b:'', a:'Заниматься творчеством: современные танцы, песни, игры и.д.', b:'Работать с микроскопом:  изучать жизнь вирусов, микробов'},
                {res_a:'', res_b:'', a:'Конструировать современные    медицинские приборы, искусственные органы и препараты.', b:'Работать как МЧС, оказывать помощь при наводнениях, землетрясениях, экстренных ситуациях.'},
                {res_a:'', res_b:'', a:'Изучать явления, события с точки зрения науки, исследовать,  их,  описывать результаты о наблюдаемых явлениях, событиях, измеряемых объектах и др. ', b:'Изображать, пародировать или представлять друзей, знакомых,  их действия в  разных ситуациях, быть блогером.'},
                {res_a:'', res_b:'', a:'Делать лабораторные анализы в диагностических центрах', b:'Проводить диагностику болезней людей, придумывать и назначать лечение'},
                {res_a:'', res_b:'', a:'Расписывать стены помещений, поверхность изделий, создавать художественные образы в цвете', b:'Монтировать или собирать машины, приборы, агрегаты, космические аппараты'},
                {res_a:'', res_b:'', a:'Организовывать и участвовать в  походах, квестах, прыгать на тарзанке', b:'Принимать участие в концертах, спектаклях сценках КВН'},
                {res_a:'', res_b:'', a:'Работать с чертежами, превращая их в машины, дома, станки, роботов', b:'Проектировать новые агрегаты, искусственный интеллект'},
                {res_a:'', res_b:'', a:'Заниматься экологий нашей земли, делать ее чище, красивее, бороться  с вредителями леса, сада', b:'Работать на клавиатуре компьютера, печатать тексты,  программы и др.'},
            ],
            test2: 1,
		}),
		mixins: [
			XApp,
		],
		methods: {
		},
		created: function (){
			let vm=this
		},
	}
</script>
<style>
</style>